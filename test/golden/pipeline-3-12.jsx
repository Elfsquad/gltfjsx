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
          <mesh name="Bolt0" castShadow receiveShadow geometry={nodes.Bolt0.geometry} material={materials.Steel} position={[7.6, 0, 0]} userData={{ id: '1000' }} />
          <mesh name="771" castShadow receiveShadow geometry={nodes['771'].geometry} material={materials.Paint} position={[5.5, 0, 0]} userData={{ id: '1001' }} />
          <mesh name="Foo12" castShadow receiveShadow geometry={nodes.Foo12.geometry} material={materials.Steel} position={[7.9, 0, 0]} userData={{ id: '1002' }} />
          <mesh name="Foo13" castShadow receiveShadow geometry={nodes.Foo13.geometry} material={materials.Steel} position={[6.7, 0, 0]} userData={{ id: '1003' }} />
          <mesh name="Bolt14" castShadow receiveShadow geometry={nodes.Bolt14.geometry} material={materials.Glass} position={[8.8, 0, 0]} userData={{ id: '1004' }} />
        </group>
        <group name="g5" position={[5, 0, 0]}>
          <mesh name="5" castShadow receiveShadow geometry={nodes['5'].geometry} material={materials.Glass} position={[7.1, 0, 0]} userData={{ id: '1005' }} />
          <mesh name="Foo16" castShadow receiveShadow geometry={nodes.Foo16.geometry} material={materials.Paint} position={[0.1, 0, 0]} userData={{ id: '1006' }} />
          <mesh name="bolt_3" castShadow receiveShadow geometry={nodes.bolt_3.geometry} material={materials.Glass} position={[7.9, 0, 0]} userData={{ id: '1007' }} />
          <mesh name="10028" castShadow receiveShadow geometry={nodes['10028'].geometry} material={materials.Paint} position={[5.3, 0, 0]} userData={{ id: '1008' }} />
          <mesh name="Bolt9" castShadow receiveShadow geometry={nodes.Bolt9.geometry} material={materials.Paint} position={[5.7, 0, 0]} userData={{ id: '1009' }} />
        </group>
        <group name="g10" position={[10, 0, 0]}>
          <mesh name="Foo10" castShadow receiveShadow geometry={nodes.Foo10.geometry} material={materials.Glass} position={[6.9, 0, 0]} userData={{ id: '1010' }} />
          <mesh name="a2" castShadow receiveShadow geometry={nodes.a2.geometry} material={materials.Paint} position={[7.1, 0, 0]} userData={{ id: '1011' }} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/model.gltf')
