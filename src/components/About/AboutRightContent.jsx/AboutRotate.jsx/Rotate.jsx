import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Bloom, EffectComposer, ToneMapping } from '@react-three/postprocessing'
import React from 'react'
import Cyl from './Cyl'

const Rotate = () => {
  return (
      <Canvas flat camera={{fov:35}}>
    <OrbitControls/>
    <ambientLight/>
    <Cyl/>
    <EffectComposer>

<Bloom
    mipmapBlur
    intensity={7} // The bloom intensity.
    luminanceThreshold={0} // luminance threshold. Raise this value to mask out darker elements in the scene.
    luminanceSmoothing={0.7} // smoothness of the luminance threshold. Range is [0, 1]
  />
  <ToneMapping adaptive/>
  </EffectComposer>
    
   </Canvas>
  )
}

export default Rotate

