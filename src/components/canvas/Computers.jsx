import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  // More aggressive mobile optimizations
  const hemisphereIntensity = isMobile ? 0.08 : 0.15;
  const spotLightIntensity = isMobile ? 0.5 : 1;
  const pointLightIntensity = isMobile ? 0.5 : 1;

  return (
    <mesh>
      <hemisphereLight intensity={hemisphereIntensity} groundColor="black" />
      {/* Reduce shadows on mobile for better performance */}
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={spotLightIntensity}
        castShadow={!isMobile} // Disable shadows on mobile
        shadow-mapSize={isMobile ? 512 : 1024} // Reduce shadow map size
      />
      <pointLight intensity={pointLightIntensity} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.6 : 0.75} // Even smaller on mobile
        position={isMobile ? [0, -3, -2.5] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  // Error boundary fallback
  const handleCanvasError = () => {
    setHasError(true);
  };

  // If there's an error or on very small mobile devices, show a fallback
  if (hasError || (isMobile && window.innerWidth < 400)) {
    return (
      <div className="flex justify-center items-center h-full">
        <div className="w-40 h-40 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-50 animate-pulse"></div>
      </div>
    );
  }

  return (
    <Canvas
      frameloop="demand"
      shadows={!isMobile} // Disable shadows completely on mobile
      dpr={isMobile ? [0.5, 1] : [1, 2]} // Much lower DPR on mobile
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{
        preserveDrawingBuffer: true,
        antialias: !isMobile, // Disable antialiasing on mobile
        powerPreference: isMobile ? "low-power" : "high-performance",
      }}
      onError={handleCanvasError}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enableDamping={!isMobile} // Disable damping on mobile
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
