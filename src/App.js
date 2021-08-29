import React from "react";
import { Canvas } from "@react-three/fiber";
import "./styles.css";
import Scene from "./Scene";

export default function App() {
  return (
    <Canvas>
      <ambientLight intensity={0.9} />
      <pointLight intensity={1.12} position={[0, 0, 0]} />
      <Scene />
    </Canvas>
  );
}
