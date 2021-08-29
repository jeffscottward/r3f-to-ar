// https://threejs.org/docs/#examples/en/exporters/GLTFExporter
// https://stackoverflow.com/a/66535506
import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter.js'
import { saveArrayBuffer, saveString } from '../utils'

function exportGLTF(mesh, filename, options) {
    const gltfExporter = new GLTFExporter()

    gltfExporter.parse(
        mesh,
        function onCompleted (result) {
            console.log({result})
            if (result instanceof ArrayBuffer) {
                saveArrayBuffer(result, filename + '.glb')
            } else {
                const output = JSON.stringify(result, null, 2)
                saveString(output, filename + '.gltf')
            }
        },
        options
    )
}

export default exportGLTF