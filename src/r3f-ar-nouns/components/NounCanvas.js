import React, { Suspense, useRef, useState } from "react";
import * as THREE from "three";
import { Canvas, extend } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import useReflector from "../shaders/useReflector";
import "../shaders/materials/ReflectorMaterial";
import ProgressBar from "./ProgressBar";

import {
  bodyAttributes,
  glassesAttributes,
  headAttributes,
  pantsAttributes,
  shoesAttributes,
} from "../constants/attributes";

import Bonsai from "../assets/FullBodyNouns/Bonsai";
import Cloud from "../assets/FullBodyNouns/Cloud";
import Computer from "../assets/FullBodyNouns/Computer";
import Crab from "../assets/FullBodyNouns/Crab";
import Mixer from "../assets/FullBodyNouns/Mixer";
import Pirate from "../assets/FullBodyNouns/Pirate";
import Rabbit from "../assets/FullBodyNouns/Rabbit";
import Shark from "../assets/FullBodyNouns/Shark";

const lookAtPosition = new THREE.Vector3(0, 2, 0);

const rand = (attr) => Math.floor(Math.random() * attr)

const NounCanvas = (props) => {
  const [optionsVisibility, setOptionsVisibility] = useState("none");
  const [currentCameraPosition, setCurrentCameraPosition] = useState(lookAtPosition);
  const orbitControls = useRef();

  const [environment, setEnvironment] = useState("Normal");

  const [head, setHead] = useState(
    headAttributes[rand(headAttributes.length)].value
  );
  const [glasses, setGlasses] = useState(
    glassesAttributes[rand(glassesAttributes.length)]
      .value
  );
  const [body, setBody] = useState(
    bodyAttributes[rand(bodyAttributes.length)].value
  );
  const [pants, setPants] = useState(
    pantsAttributes[rand(pantsAttributes.length)].value
  );
  const [shoes, setShoes] = useState(
    shoesAttributes[rand(shoesAttributes.length)].value
  );

  const generateRandomNoun = () => {
    setHead(
      headAttributes[rand(headAttributes.length)].value
    );
    setGlasses(
      glassesAttributes[rand(glassesAttributes.length)]
        .value
    );
    setBody(
      bodyAttributes[rand(bodyAttributes.length)].value
    );
    setPants(
      pantsAttributes[rand(pantsAttributes.length)].value
    );
    setShoes(
      shoesAttributes[rand(shoesAttributes.length)].value
    );
  };

  return (
    <>
      {environment === "Normal" && (
        <fog attach="fog" args={[0xa0a0a0, 1, 5]} />
      )}
      <ambientLight intensity={0.8} />
      <directionalLight
        position={[0, 0.5, 0.2]}
        castShadow
        intensity={0.5}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <OrbitControls
        target={[0, 0.2, 0]}
        ref={orbitControls}
        autoRotate={props.autoRotate}
        enablePan={false}
        enableDamping={true}
        maxPolarAngle={Math.PI / 2.05}
        maxDistance={5}
        minDistance={0.325}
      />
      {environment === "Normal" && (
        <mesh receiveShadow position={[0, -0.025, 0]}>
          <boxBufferGeometry args={[25, 0.05, 25]} />
          <meshStandardMaterial
            color={new THREE.Color(0xffffff)
              .setHex(0xffffff)
              .convertSRGBToLinear()}
          />
        </mesh>
      )}
      {environment === "Normal" && (
        <gridHelper
          args={[
            50,
            200,
            new THREE.Color(0x919191),
            new THREE.Color(0x919191),
          ]}
          position={[0, 0.001, 0]}
        />
      )}
      <Suspense fallback={<ProgressBar />}>
        {/* <Bonsai
            head={head}
            glasses={glasses}
            body={body}
            pants={pants}
            shoes={shoes}
          /> */}
        <Cloud
          head={head}
          glasses={glasses}
          body={body}
          pants={pants}
          shoes={shoes}
        />
        <Computer
          head={head}
          glasses={glasses}
          body={body}
          pants={pants}
          shoes={shoes}
        />
        <Crab
          head={head}
          glasses={glasses}
          body={body}
          pants={pants}
          shoes={shoes}
        />
        <Mixer
          head={head}
          glasses={glasses}
          body={body}
          pants={pants}
          shoes={shoes}
        />
        <Pirate
          head={head}
          glasses={glasses}
          body={body}
          pants={pants}
          shoes={shoes}
        />
        <Rabbit
          head={head}
          glasses={glasses}
          body={body}
          pants={pants}
          shoes={shoes}
        />
        <Shark
          head={head}
          glasses={glasses}
          body={body}
          pants={pants}
          shoes={shoes}
        />
      </Suspense>
    </>
  );
};

export default NounCanvas;