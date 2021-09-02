// https://github.com/mrdoob/three.js/blob/dev/examples/misc_exporter_gltf.html
// https://github.com/mrdoob/three.js/blob/dev/examples/misc_exporter_usdz.html

import React, { useRef, useEffect } from 'react'
import { Canvas, extend, useFrame, useThree } from '@react-three/fiber'
import { Box, Sphere } from '@react-three/drei'
import gltfDownload from './exporters/gltfDownload'
import usdzDownload from './exporters/usdzDownload'
import sceneFilesExport from './exporters/sceneFilesExport'
import csscolors from 'css-color-names'

function Scene() {
  const mesh = useRef()
  const handleDownloadGTLF = () => gltfDownload(mesh.current, 'scene')
  const handleDownloadUSDZ = () => usdzDownload(mesh.current, 'scene')
  const handleAll3DDownloads = () => {
    handleDownloadGTLF()
    handleDownloadUSDZ()
  }
  const handleFileCreation = async () => {
    let files = await sceneFilesExport(mesh.current, 'scene')
    console.log(files)
  }
  const makeAbunch = async () => {
    const testmesh = useRef()
    let sphere = () => (
      <Sphere ref={testmesh} onClick={handleFileCreation}>
        <meshStandardMaterial color={'blue'} />
      </Sphere>
    )
  }
  let filledArray = new Array(10).fill(null).map(()=> ({'hello':'goodbye'}))
  return (
    <>
      {/* <Sphere ref={mesh} onClick={handleFileCreation}>
        <meshStandardMaterial color={'green'} />
      </Sphere> */}
    </>
  )
}

export default Scene
