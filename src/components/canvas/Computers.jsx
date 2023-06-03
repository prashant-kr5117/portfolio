/* eslint-disable react/no-unknown-property */
// import {Suspense,useEffect,useState} from 'react'
import { Suspense } from "react";

// canva is just a empty canvas on which allow us to place something on it
import { Canvas } from "@react-three/fiber";

// these helpers will help us to draw  of these canvas
//and help us to import utility models
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = () => {
  // importing our GLTF Model

  const computer = useGLTF("../../../public/desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        castShadow
        shadow-mapSize={1024}
      />

      <primitive
        object={computer.scene}
        scale={0.75}
        position={[0, -3.55, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      {/* canvas loader */}
      <Suspense fallback={<CanvasLoader />}>
        {/* this control will allow us our model to left or right */}
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};
export default ComputersCanvas;
