import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Box } from "@react-three/drei";

function randNum(base) {
  return Math.ceil(Math.random() * base);
}

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const GeneratedBox = () => (
  <Box args={[randNum(3), randNum(3), randNum(3)]}>
    <meshLambertMaterial attach="material" color={getRandomColor()} />
  </Box>
);

const Scene = () => {
  const box = useRef();
  useFrame(() => {
    box.current.rotation.y += 0.02;
    box.current.rotation.x += 0.02;
    box.current.rotation.z += 0.02;
  });
  return (
    <group>
      <group ref={box}>
        <GeneratedBox />
        <GeneratedBox />
      </group>
      {/* <group>
        <GeneratedBox />
        <GeneratedBox />
      </group> */}
    </group>
  );
};

export default Scene;
