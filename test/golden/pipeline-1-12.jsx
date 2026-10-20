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
          <mesh name="Bolt1" castShadow receiveShadow geometry={nodes.Bolt1.geometry} material={materials.Steel} position={[9.7, 0, 0]} userData={{ id: '1000' }} />
          <mesh name="Foo11" castShadow receiveShadow geometry={nodes.Foo11.geometry} material={materials.Paint} position={[9.9, 0, 0]} userData={{ id: '1001' }} />
          <mesh name="772" castShadow receiveShadow geometry={nodes['772'].geometry} material={materials.Paint} position={[2.5, 0, 0]} userData={{ id: '1002' }} />
          <mesh name="10023" castShadow receiveShadow geometry={nodes['10023'].geometry} material={materials.Paint} position={[7.7, 0, 0]} userData={{ id: '1003' }} />
          <mesh name="10014" castShadow receiveShadow geometry={nodes['10014'].geometry} material={materials.Steel} position={[5.9, 0, 0]} userData={{ id: '1004' }} />
        </group>
        <group name="g5" position={[5, 0, 0]}>
          <mesh name="Part" castShadow receiveShadow geometry={nodes.Part.geometry} material={materials.Steel} position={[5.5, 0, 0]} userData={{ id: '1005' }} />
          <mesh name="Foo16" castShadow receiveShadow geometry={nodes.Foo16.geometry} material={materials.Steel} position={[7.7, 0, 0]} userData={{ id: '1006' }} />
          <mesh name="7" castShadow receiveShadow geometry={nodes['7'].geometry} material={materials.Steel} position={[3.2, 0, 0]} userData={{ id: '1007' }} />
          <mesh name="77" castShadow receiveShadow geometry={nodes['77'].geometry} material={materials.Steel} position={[5.8, 0, 0]} userData={{ id: '1008' }} />
          <mesh name="1001" castShadow receiveShadow geometry={nodes['1001'].geometry} material={materials.Steel} position={[8.7, 0, 0]} userData={{ id: '1009' }} />
        </group>
        <group name="g10" position={[10, 0, 0]}>
          <mesh name="Foo110" castShadow receiveShadow geometry={nodes.Foo110.geometry} material={materials.Glass} position={[3, 0, 0]} userData={{ id: '1010' }} />
          <mesh name="A1" castShadow receiveShadow geometry={nodes.A1.geometry} material={materials.Glass} position={[9.2, 0, 0]} userData={{ id: '1011' }} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/model.gltf')
