/*
golden 
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/model.gltf')
  return (
    <group {...props} dispose={null}>
      <group position={[5, 0, 0]}>
        <mesh geometry={nodes['5'].geometry} material={materials.Glass} position={[7.1, 0, 0]} />
        <mesh geometry={nodes.Foo16.geometry} material={materials.Paint} position={[0.1, 0, 0]} />
        <mesh geometry={nodes.bolt_3.geometry} material={materials.Glass} position={[7.9, 0, 0]} />
        <mesh geometry={nodes['10028'].geometry} material={materials.Paint} position={[5.3, 0, 0]} />
        <mesh geometry={nodes.Bolt9.geometry} material={materials.Paint} position={[5.7, 0, 0]} />
      </group>
      <group position={[10, 0, 0]}>
        <mesh geometry={nodes.Foo10.geometry} material={materials.Glass} position={[6.9, 0, 0]} />
        <mesh geometry={nodes.a2.geometry} material={materials.Paint} position={[7.1, 0, 0]} />
      </group>
      <mesh geometry={nodes.Bolt0.geometry} material={materials.Steel} position={[7.6, 0, 0]} />
      <mesh geometry={nodes['771'].geometry} material={materials.Paint} position={[5.5, 0, 0]} />
      <mesh geometry={nodes.Foo12.geometry} material={materials.Steel} position={[7.9, 0, 0]} />
      <mesh geometry={nodes.Foo13.geometry} material={materials.Steel} position={[6.7, 0, 0]} />
      <mesh geometry={nodes.Bolt14.geometry} material={materials.Glass} position={[8.8, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/model.gltf')
