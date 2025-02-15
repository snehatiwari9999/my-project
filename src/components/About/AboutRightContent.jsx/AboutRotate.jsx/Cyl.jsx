import React, { useRef } from 'react'
import * as THREE from "three"
import {  useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import image from './image.png'


const Cyl = () => {
  let tex = useTexture(image);
    let cyl = useRef(null)
  useFrame((state,delta)=>{
cyl.current.rotation.y += delta

  });
  return (
    <group rotation={[0,1.4,.5]}>
       <mesh ref={cyl} >
     <cylinderGeometry args={[1,1,1,30,30,true]}/>
      <meshStandardMaterial map={tex}  transparent side={THREE.DoubleSide} />
      </mesh>
      </group>
  )
}

export default Cyl


