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
        <mesh geometry={nodes.Part.geometry} material={materials.Steel} position={[5.5, 0, 0]} />
        <mesh geometry={nodes.Foo16.geometry} material={materials.Steel} position={[7.7, 0, 0]} />
        <mesh geometry={nodes['7'].geometry} material={materials.Steel} position={[3.2, 0, 0]} />
        <mesh geometry={nodes['77'].geometry} material={materials.Steel} position={[5.8, 0, 0]} />
        <mesh geometry={nodes['1001'].geometry} material={materials.Steel} position={[8.7, 0, 0]} />
      </group>
      <group position={[10, 0, 0]}>
        <mesh geometry={nodes.Foo110.geometry} material={materials.Glass} position={[3, 0, 0]} />
        <mesh geometry={nodes.A1.geometry} material={materials.Glass} position={[9.2, 0, 0]} />
      </group>
      <mesh geometry={nodes.Bolt1.geometry} material={materials.Steel} position={[9.7, 0, 0]} />
      <mesh geometry={nodes.Foo11.geometry} material={materials.Paint} position={[9.9, 0, 0]} />
      <mesh geometry={nodes['772'].geometry} material={materials.Paint} position={[2.5, 0, 0]} />
      <mesh geometry={nodes['10023'].geometry} material={materials.Paint} position={[7.7, 0, 0]} />
      <mesh geometry={nodes['10014'].geometry} material={materials.Steel} position={[5.9, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/model.gltf')
