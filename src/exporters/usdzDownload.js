import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { USDZExporter } from 'three/examples/jsm/exporters/USDZExporter.js'
import { makeBlobFromSource, saveFile } from '../utils'

async function exportUSDZ(mesh, filename, options) {
  const gltfExporter = new GLTFExporter()
  const gltfLoader = new GLTFLoader()
  const usdzExporter = new USDZExporter()

  // Mesh to GLTF
  const exportGLTF = (meshObj) => {
    return new Promise((resolve) => {
      gltfExporter.parse(meshObj, (result) => resolve(result), options)
    })
  }

  // Construct Parts
  const gltfData = await exportGLTF(mesh)
  const stringifiedData = JSON.stringify(gltfData, null, 2)
  const gltfBlob = makeBlobFromSource('string', stringifiedData)
  const gltfBlobURL = URL.createObjectURL(gltfBlob)

  const createUSDZBlob = async (gltfBlobURL) => {
    return new Promise(async (resolve, reject) => {
      gltfLoader.load(gltfBlobURL, async function onCompleted(gltf) {
        const arrayBufferData = await usdzExporter.parse(gltf.scene)
        const blob = makeBlobFromSource('arrayBuffer', arrayBufferData)
        resolve(blob)
      })
    })
  }

  const usdzBlob = await createUSDZBlob(gltfBlobURL)
  saveFile(usdzBlob, filename + '.usdz')
}

export default exportUSDZ
