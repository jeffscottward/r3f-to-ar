// https://github.com/mrdoob/three.js/blob/dev/examples/misc_exporter_gltf.html
// https://github.com/mrdoob/three.js/blob/dev/examples/misc_exporter_usdz.html

import React, { useRef, useEffect } from 'react'
import { Canvas, extend, useFrame, useThree } from '@react-three/fiber'
import { Box, Sphere } from "@react-three/drei";
import exportGLTF from './exporters/gltfExporter'

function Scene() {
  const mesh = useRef()
  function handleDownloadGTLF () {
    exportGLTF(mesh.current, 'scene')
  }
  return (
    <>
      <Sphere ref={mesh} args={[1, 1, 1]} onClick={handleDownloadGTLF}>
        <meshBasicMaterial attach="material" color="hotpink" />
      </Sphere>
    </>
  )
}

export default Scene
