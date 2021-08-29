import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { USDZExporter } from 'three/examples/jsm/exporters/USDZExporter.js'
import { saveArrayBuffer, save } from '../utils'

async function exportUSDZ(mesh, filename, options) {
    const gltfExporter = new GLTFExporter()
    const gltfLoader = new GLTFLoader();
    const usdzExporter = new USDZExporter();
    
    const exportGLTF = (meshObj) => {
        return new Promise((resolve) => {
            gltfExporter.parse(
                meshObj,
                (result) => resolve(result),
                options
            )
        })
    }

    const gltfData = await exportGLTF(mesh)
    const gltfBlob =  new Blob([JSON.stringify(gltfData, null, 2)], { type: 'text/plain' })
    const gltfBlobURL = URL.createObjectURL(gltfBlob)

    const usdzBlob = async (gltfBlobURL) => {
        return new Promise(async (resolve, reject) => {
            gltfLoader.load(
                gltfBlobURL,
                async function onCompleted ( gltf ) {
                    console.log('blobbyUSDZPREP', gltf)
                    const arraybuffer = await usdzExporter.parse(gltf.scene);
                    // https://spectrum.chat/react-three-fiber/general/loading-gltf-getting-the-typeerror-cannot-read-property-uuid-of-undefined~a9c6f555-96da-4bdb-b21d-f1b6be783e68?m=MTU4ODA2MTg5MTQ3NA==
                    console.log(arraybuffer)
                    const blob = new Blob([arraybuffer], { type: 'application/octet-stream' });
                    console.log(blob)
                    resolve(blob)               
                }
            );
        })
    }

    let usdz = await usdzBlob(gltfBlobURL)
    console.log(usdz)
}

export default exportUSDZ