/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 modelDraco.gltf --transform
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/modelDraco-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Cube001.geometry} material={materials['Material.002']} position={[-0.01, 1, 0]} />
    </group>
  )
}

useGLTF.preload('/modelDraco-transformed.glb')
