// https://threejs.org/docs/#examples/en/exporters/GLTFExporter
// https://stackoverflow.com/a/66535506

import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter.js'

const link = document.createElement('a')
      link.style.display = 'none'
      document.body.appendChild(link)

function save(blob, filename) {
    link.href = URL.createObjectURL(blob)
    link.download = filename
    link.click()
    // URL.revokeObjectURL( url ); breaks Firefox...
  }

function saveArrayBuffer(buffer, filename) {
    save(new Blob([buffer], { type: 'application/octet-stream' }), filename)
}
function saveString(text, filename) {
    save(new Blob([text], { type: 'text/plain' }), filename)
}

function exportGLTF(input, filename, options) {
    const gltfExporter = new GLTFExporter()

    gltfExporter.parse(
        input,
        function (result) {
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