import ReactDOM from 'react-dom'
import React, { useRef, useEffect } from 'react'
import { Canvas, extend, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import './styles.css'
import Scene from './scene'

extend({ OrbitControls })

const Controls = () => {
  const { camera, gl, invalidate } = useThree()
  const ref = useRef()
  useFrame(() => ref.current.update())
  useEffect(() => void ref.current.addEventListener('change', invalidate), [])
  return <orbitControls ref={ref} args={[camera, gl.domElement]} />
}

function App() {
  return (
    <>
      <Canvas invalidateFrameloop={true}>
        <Controls />
        <Scene/>
        <ambientLight/>
      </Canvas>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
