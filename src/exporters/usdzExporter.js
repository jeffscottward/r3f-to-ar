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
                    const arraybuffer = await usdzExporter.parse(gltf.scene);
                    const blob = new Blob([arraybuffer], { type: 'application/octet-stream' });
                    resolve(blob)               
                }
            );
        })
    }

    let usdz = await usdzBlob(gltfBlobURL)
    save(usdz, filename+'.usdz')
}

export default exportUSDZ