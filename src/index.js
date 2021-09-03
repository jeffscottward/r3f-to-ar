import ReactDOM from 'react-dom'
import React, { useRef, useEffect } from 'react'
import { Canvas, extend, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import './styles.css'
import Scene from './scene'
import * as THREE from 'three'

extend({ OrbitControls })

const Controls = () => {
  const { camera, gl, invalidate } = useThree()
  const ref = useRef()
  useFrame(() => ref.current.update())
  useEffect(() => void ref.current.addEventListener('change', invalidate), [])
  return <orbitControls ref={ref} args={[camera, gl.domElement]} />
}
const lookAtPosition = new THREE.Vector3(0, 2, 0);
function App() {
  return (
    <Canvas 
      invalidateFrameloop={true}
      shadows
      gl={{ preserveDrawingBuffer: true }}
      dpr={[1, 1.5]}
      // https://github.com/pmndrs/react-three-fiber/issues/67
      // camera={{ position: [0, 0.5, 0.5], fov: 55, near: 0.1, far: 100 }}
      onCreated={({ camera }) => {
        // do things here
        camera.position.x = 0.2;
        camera.position.y = 0.4;
        camera.position.z = 0.4;
        camera.lookAt(lookAtPosition);
        camera.updateProjectionMatrix();
        // camera.fov =
      }}
      >
      <Controls />
      <Scene/>
      <ambientLight/>
    </Canvas>
  ) 
}


ReactDOM.render(<App />, document.getElementById('root'))
