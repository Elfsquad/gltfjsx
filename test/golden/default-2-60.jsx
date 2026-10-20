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
        <mesh geometry={nodes.A1.geometry} material={materials.Steel} position={[4.5, 0, 0]} />
        <mesh geometry={nodes.a213.geometry} material={materials.Steel} position={[4.4, 0, 0]} />
        <mesh geometry={nodes.A114.geometry} material={materials.Glass} position={[2.1, 0, 0]} />
      </group>
      <group position={[15, 0, 0]}>
        <mesh geometry={nodes.Foo1.geometry} material={materials.Paint} position={[2.1, 0, 0]} />
        <mesh geometry={nodes.Bolt116.geometry} material={materials.Paint} position={[2.9, 0, 0]} />
        <mesh geometry={nodes['17'].geometry} material={materials.Steel} position={[4.2, 0, 0]} />
        <mesh geometry={nodes.Bolt.geometry} material={materials.Glass} position={[2.6, 0, 0]} />
        <mesh geometry={nodes['1001'].geometry} material={materials.Glass} position={[7.8, 0, 0]} />
      </group>
      <group position={[20, 0, 0]}>
        <mesh geometry={nodes.Part1.geometry} material={materials.Steel} position={[1.1, 0, 0]} />
        <mesh geometry={nodes.a2.geometry} material={materials.Glass} position={[1.1, 0, 0]} />
        <mesh geometry={nodes['1001'].geometry} material={materials.Glass} position={[5.2, 0, 0]} />
        <mesh geometry={nodes.Part2.geometry} material={materials.Glass} position={[0.7, 0, 0]} />
        <mesh geometry={nodes.Part.geometry} material={materials.Paint} position={[4.6, 0, 0]} />
      </group>
      <group position={[25, 0, 0]}>
        <mesh geometry={nodes.part25.geometry} material={materials.Paint} position={[9.1, 0, 0]} />
        <mesh geometry={nodes.Part26.geometry} material={materials.Paint} position={[2.5, 0, 0]} />
        <mesh geometry={nodes.a227.geometry} material={materials.Steel} position={[8.2, 0, 0]} />
        <mesh geometry={nodes.Foo1.geometry} material={materials.Steel} position={[3.7, 0, 0]} />
        <mesh geometry={nodes.A129.geometry} material={materials.Glass} position={[4.3, 0, 0]} />
      </group>
      <group position={[30, 0, 0]}>
        <mesh geometry={nodes.Bolt1.geometry} material={materials.Glass} position={[1.4, 0, 0]} />
        <mesh geometry={nodes['7731'].geometry} material={materials.Steel} position={[9, 0, 0]} />
        <mesh geometry={nodes.A132.geometry} material={materials.Steel} position={[2.1, 0, 0]} />
        <mesh geometry={nodes.Foo.geometry} material={materials.Glass} position={[7.9, 0, 0]} />
        <mesh geometry={nodes['1001'].geometry} material={materials.Glass} position={[6.9, 0, 0]} />
      </group>
      <group position={[35, 0, 0]}>
        <mesh geometry={nodes.Bolt135.geometry} material={materials.Steel} position={[4, 0, 0]} />
        <mesh geometry={nodes.bolt_3.geometry} material={materials.Glass} position={[0.2, 0, 0]} />
        <mesh geometry={nodes.A137.geometry} material={materials.Steel} position={[2.6, 0, 0]} />
        <mesh geometry={nodes['1002'].geometry} material={materials.Glass} position={[5.3, 0, 0]} />
        <mesh geometry={nodes.Part1.geometry} material={materials.Steel} position={[9.2, 0, 0]} />
      </group>
      <group position={[40, 0, 0]}>
        <mesh geometry={nodes.bolt_340.geometry} material={materials.Paint} position={[0.5, 0, 0]} />
        <mesh geometry={nodes.Bolt1.geometry} material={materials.Glass} position={[6.4, 0, 0]} />
        <mesh geometry={nodes['100242'].geometry} material={materials.Glass} position={[1.6, 0, 0]} />
        <mesh geometry={nodes.Foo1.geometry} material={materials.Steel} position={[2.3, 0, 0]} />
        <mesh geometry={nodes.A144.geometry} material={materials.Paint} position={[4.3, 0, 0]} />
      </group>
      <group position={[45, 0, 0]}>
        <mesh geometry={nodes.Part245.geometry} material={materials.Glass} position={[5.7, 0, 0]} />
        <mesh geometry={nodes.Bolt.geometry} material={materials.Paint} position={[7.8, 0, 0]} />
        <mesh geometry={nodes.A147.geometry} material={materials.Glass} position={[3.7, 0, 0]} />
        <mesh geometry={nodes.Bolt.geometry} material={materials.Steel} position={[2.2, 0, 0]} />
        <mesh geometry={nodes['1001'].geometry} material={materials.Steel} position={[4.6, 0, 0]} />
      </group>
      <group position={[50, 0, 0]}>
        <mesh geometry={nodes.Part.geometry} material={materials.Glass} position={[8, 0, 0]} />
        <mesh geometry={nodes.bolt_3.geometry} material={materials.Steel} position={[0.8, 0, 0]} />
        <mesh geometry={nodes.A152.geometry} material={materials.Steel} position={[1.6, 0, 0]} />
        <mesh geometry={nodes.Part2.geometry} material={materials.Glass} position={[2.5, 0, 0]} />
        <mesh geometry={nodes.Bolt1.geometry} material={materials.Glass} position={[8.6, 0, 0]} />
      </group>
      <group position={[55, 0, 0]}>
        <mesh geometry={nodes['55'].geometry} material={materials.Glass} position={[3.7, 0, 0]} />
        <mesh geometry={nodes.Foo56.geometry} material={materials.Paint} position={[2.1, 0, 0]} />
        <mesh geometry={nodes.Part1.geometry} material={materials.Paint} position={[0.1, 0, 0]} />
        <mesh geometry={nodes.A1.geometry} material={materials.Steel} position={[9.7, 0, 0]} />
        <mesh geometry={nodes['77'].geometry} material={materials.Steel} position={[2.6, 0, 0]} />
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
