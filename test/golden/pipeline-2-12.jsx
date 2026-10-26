/*
golden 
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/model.gltf')
  return (
    <group {...props} dispose={null}>
      <group>
        <group name="g0">
          <mesh name="part" castShadow receiveShadow geometry={nodes.part.geometry} material={materials.Steel} position={[8.8, 0, 0]} userData={{ id: '1000' }} />
          <mesh name="Part1" castShadow receiveShadow geometry={nodes.Part1.geometry} material={materials.Paint} position={[1.1, 0, 0]} userData={{ id: '1001' }} />
          <mesh name="Part2" castShadow receiveShadow geometry={nodes.Part2.geometry} material={materials.Steel} position={[5.8, 0, 0]} userData={{ id: '1002' }} />
          <mesh name="Part1" castShadow receiveShadow geometry={nodes.Part1.geometry} material={materials.Glass} position={[0.4, 0, 0]} userData={{ id: '1003' }} />
          <mesh name="774" castShadow receiveShadow geometry={nodes['774'].geometry} material={materials.Steel} position={[0.1, 0, 0]} userData={{ id: '1004' }} />
        </group>
        <group name="g5" position={[5, 0, 0]}>
          <mesh name="Foo" castShadow receiveShadow geometry={nodes.Foo.geometry} material={materials.Paint} position={[2.3, 0, 0]} userData={{ id: '1005' }} />
          <mesh name="1001" castShadow receiveShadow geometry={nodes['1001'].geometry} material={materials.Paint} position={[1, 0, 0]} userData={{ id: '1006' }} />
          <mesh name="7" castShadow receiveShadow geometry={nodes['7'].geometry} material={materials.Glass} position={[9.8, 0, 0]} userData={{ id: '1007' }} />
          <mesh name="Bolt18" castShadow receiveShadow geometry={nodes.Bolt18.geometry} material={materials.Glass} position={[6.8, 0, 0]} userData={{ id: '1008' }} />
          <mesh name="A1" castShadow receiveShadow geometry={nodes.A1.geometry} material={materials.Glass} position={[4.5, 0, 0]} userData={{ id: '1009' }} />
        </group>
        <group name="g10" position={[10, 0, 0]}>
          <mesh name="Foo1" castShadow receiveShadow geometry={nodes.Foo1.geometry} material={materials.Steel} position={[8.4, 0, 0]} userData={{ id: '1010' }} />
          <mesh name="1001" castShadow receiveShadow geometry={nodes['1001'].geometry} material={materials.Paint} position={[8.4, 0, 0]} userData={{ id: '1011' }} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/model.gltf')
