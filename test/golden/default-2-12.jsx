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
        <mesh geometry={nodes.Foo.geometry} material={materials.Paint} position={[2.3, 0, 0]} />
        <mesh geometry={nodes['1001'].geometry} material={materials.Paint} position={[1, 0, 0]} />
        <mesh geometry={nodes['7'].geometry} material={materials.Glass} position={[9.8, 0, 0]} />
        <mesh geometry={nodes.Bolt18.geometry} material={materials.Glass} position={[6.8, 0, 0]} />
        <mesh geometry={nodes.A1.geometry} material={materials.Glass} position={[4.5, 0, 0]} />
      </group>
      <group position={[10, 0, 0]}>
        <mesh geometry={nodes.Foo1.geometry} material={materials.Steel} position={[8.4, 0, 0]} />
        <mesh geometry={nodes['1001'].geometry} material={materials.Paint} position={[8.4, 0, 0]} />
      </group>
      <mesh geometry={nodes.part.geometry} material={materials.Steel} position={[8.8, 0, 0]} />
      <mesh geometry={nodes.Part1.geometry} material={materials.Paint} position={[1.1, 0, 0]} />
      <mesh geometry={nodes.Part2.geometry} material={materials.Steel} position={[5.8, 0, 0]} />
      <mesh geometry={nodes.Part1.geometry} material={materials.Glass} position={[0.4, 0, 0]} />
      <mesh geometry={nodes['774'].geometry} material={materials.Steel} position={[0.1, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/model.gltf')
