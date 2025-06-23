import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  // More aggressive mobile optimizations
  const hemisphereIntensity = isMobile ? 0.6 : 0.15;
  const spotLightIntensity = isMobile ? 0.3 : 1;
  const pointLightIntensity = isMobile ? 0.3 : 1;

  return (
    <mesh>
      <hemisphereLight intensity={hemisphereIntensity} groundColor="black" />
      {/* Reduce shadows on mobile for better performance */}
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={spotLightIntensity}
        castShadow={!isMobile} // Keep shadows disabled on mobile for performance
        shadow-mapSize={isMobile ? 256 : 1024} // Further reduce shadow map size for mobile
      />
      <pointLight intensity={pointLightIntensity} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.45 : 0.75} // Much smaller scale for mobile
        position={isMobile ? [-1.9, -2.5, -2.2] : [0, -3.25, -1.5]} // Moved left for mobile: x from 1 to -0.8
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
        <div className="w-32 h-32 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-50 animate-pulse"></div>
      </div>
    );
  }

  return (
    <Canvas
      frameloop="demand"
      shadows={!isMobile} // Disable shadows completely on mobile
      dpr={isMobile ? [0.5, 1] : [1, 2]} // Lower DPR for mobile to improve performance
      camera={
        isMobile
          ? { position: [16, 3, 5], fov: 30 } // Slightly wider FOV for mobile to accommodate smaller model
          : { position: [20, 3, 5], fov: 25 }
      }
      gl={{
        preserveDrawingBuffer: true,
        antialias: !isMobile, // Disable antialiasing on mobile
        powerPreference: isMobile ? "low-power" : "high-performance",
        precision: isMobile ? "lowp" : "highp", // Lower precision for mobile
      }}
      onError={handleCanvasError}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "auto",
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enableDamping={!isMobile} // Disable damping on mobile
          enablePan={false} // Disable panning for better mobile performance
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
