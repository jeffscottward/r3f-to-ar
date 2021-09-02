// https://threejs.org/docs/#examples/en/exporters/GLTFExporter
// https://stackoverflow.com/a/66535506
import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter.js'
import { saveArrayBuffer, saveString } from '../utils'

function exportGLTF(mesh, filename, options) {
  const gltfExporter = new GLTFExporter()

  gltfExporter.parse(
    mesh,
    function onCompleted(result) {
      // Binary check for GLB
      if (result instanceof ArrayBuffer) {
        saveArrayBuffer(result, filename + '.glb')
      } else {
        // Assumed JSON GLTF
        const output = JSON.stringify(result, null, 2)
        saveString(output, filename + '.gltf')
      }
    },
    options
  )
}

export default exportGLTF
