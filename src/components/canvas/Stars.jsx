import { useState, useRef, Suspense, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = (props) => {
  const ref = useRef();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile device
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () =>
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  // Even more aggressive reduction for mobile devices (50% reduction from original)
  const starCount = isMobile ? 400 : 5000; // Further reduced to 1200 for better memory management
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(starCount), { radius: 1.2 })
  );

  useFrame((state, delta) => {
    if (ref.current) {
      // Slower rotation on mobile to reduce processing
      const rotationSpeed = isMobile ? 40 : 30;
      ref.current.rotation.x -= delta / rotationSpeed;
      ref.current.rotation.y -= delta / (rotationSpeed / 2);
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={isMobile ? 0.0006 : 0.001} // Even smaller on mobile
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  const [hasError, setHasError] = useState(false);

  const handleCanvasError = () => {
    setHasError(true);
  };

  // If there's an error, don't render anything
  if (hasError) {
    return null;
  }

  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas
        camera={{ position: [0, 0, 1] }}
        onError={handleCanvasError}
        gl={{
          antialias: false, // Disable antialiasing for performance
          powerPreference: "low-power",
        }}
      >
        <Suspense fallback={null}>
          <Stars />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
