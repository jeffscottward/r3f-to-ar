import React, { useRef } from 'react'
import { Sphere } from '@react-three/drei'

import gltfDownload from './exporters/gltfDownload'
import usdzDownload from './exporters/usdzDownload'
import sceneFilesExport from './exporters/sceneFilesExport'

import App from './r3f-ar-nouns/components/App'

function Scene() {
  const mesh = useRef(null)

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

  return (
    <App />
  )
}



export default Scene
