/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 csharp.gltf --transform
Author: AnshiNoWara (https://sketchfab.com/AnshiNoWara)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/c-e3a5d3e564a64fb0ab39665f44632520
Title: C#
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/csharp-transformed.glb");
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh
          geometry={nodes["C#_C#_0"].geometry}
          material={materials.material}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={10}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/csharp-transformed.glb");
