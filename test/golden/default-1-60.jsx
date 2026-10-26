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
        <mesh geometry={nodes['100212'].geometry} material={materials.Glass} position={[8.7, 0, 0]} />
        <mesh geometry={nodes.Bolt1.geometry} material={materials.Glass} position={[7, 0, 0]} />
        <mesh geometry={nodes.a214.geometry} material={materials.Glass} position={[9.8, 0, 0]} />
      </group>
      <group position={[15, 0, 0]}>
        <mesh geometry={nodes['100215'].geometry} material={materials.Paint} position={[3.2, 0, 0]} />
        <mesh geometry={nodes.Bolt116.geometry} material={materials.Paint} position={[8.1, 0, 0]} />
        <mesh geometry={nodes['7717'].geometry} material={materials.Steel} position={[8.9, 0, 0]} />
        <mesh geometry={nodes.Foo.geometry} material={materials.Steel} position={[3.2, 0, 0]} />
        <mesh geometry={nodes['100219'].geometry} material={materials.Steel} position={[6.8, 0, 0]} />
      </group>
      <group position={[20, 0, 0]}>
        <mesh geometry={nodes.Bolt1.geometry} material={materials.Steel} position={[2.1, 0, 0]} />
        <mesh geometry={nodes.a2.geometry} material={materials.Steel} position={[8.7, 0, 0]} />
        <mesh geometry={nodes['1001'].geometry} material={materials.Steel} position={[3.3, 0, 0]} />
        <mesh geometry={nodes['100223'].geometry} material={materials.Glass} position={[8.7, 0, 0]} />
        <mesh geometry={nodes.Part24.geometry} material={materials.Glass} position={[1.5, 0, 0]} />
      </group>
      <group position={[25, 0, 0]}>
        <mesh geometry={nodes.part.geometry} material={materials.Paint} position={[3.1, 0, 0]} />
        <mesh geometry={nodes.Foo.geometry} material={materials.Glass} position={[2.3, 0, 0]} />
        <mesh geometry={nodes.Part27.geometry} material={materials.Steel} position={[9.3, 0, 0]} />
        <mesh geometry={nodes.Part128.geometry} material={materials.Steel} position={[0.4, 0, 0]} />
        <mesh geometry={nodes.Part29.geometry} material={materials.Paint} position={[8.2, 0, 0]} />
      </group>
      <group position={[30, 0, 0]}>
        <mesh geometry={nodes.Bolt130.geometry} material={materials.Glass} position={[6.9, 0, 0]} />
        <mesh geometry={nodes.Bolt1.geometry} material={materials.Steel} position={[7.9, 0, 0]} />
        <mesh geometry={nodes.Foo.geometry} material={materials.Steel} position={[0.3, 0, 0]} />
        <mesh geometry={nodes.A.geometry} material={materials.Paint} position={[3.6, 0, 0]} />
        <mesh geometry={nodes['1001'].geometry} material={materials.Paint} position={[5.4, 0, 0]} />
      </group>
      <group position={[35, 0, 0]}>
        <mesh geometry={nodes['100235'].geometry} material={materials.Paint} position={[8.1, 0, 0]} />
        <mesh geometry={nodes.part.geometry} material={materials.Glass} position={[2.9, 0, 0]} />
        <mesh geometry={nodes['100237'].geometry} material={materials.Glass} position={[1.7, 0, 0]} />
        <mesh geometry={nodes.Bolt138.geometry} material={materials.Steel} position={[7.8, 0, 0]} />
        <mesh geometry={nodes.a2.geometry} material={materials.Steel} position={[0.1, 0, 0]} />
      </group>
      <group position={[40, 0, 0]}>
        <mesh geometry={nodes.Part2.geometry} material={materials.Steel} position={[5.2, 0, 0]} />
        <mesh geometry={nodes['7741'].geometry} material={materials.Glass} position={[9.7, 0, 0]} />
        <mesh geometry={nodes['100142'].geometry} material={materials.Paint} position={[6.2, 0, 0]} />
        <mesh geometry={nodes.Foo.geometry} material={materials.Steel} position={[0.2, 0, 0]} />
        <mesh geometry={nodes.Part2.geometry} material={materials.Steel} position={[6.5, 0, 0]} />
      </group>
      <group position={[45, 0, 0]}>
        <mesh geometry={nodes.Foo.geometry} material={materials.Paint} position={[0.2, 0, 0]} />
        <mesh geometry={nodes['1001'].geometry} material={materials.Glass} position={[5.4, 0, 0]} />
        <mesh geometry={nodes['100247'].geometry} material={materials.Paint} position={[6.8, 0, 0]} />
        <mesh geometry={nodes.Bolt1.geometry} material={materials.Steel} position={[6.9, 0, 0]} />
        <mesh geometry={nodes['49'].geometry} material={materials.Paint} position={[4, 0, 0]} />
      </group>
      <group position={[50, 0, 0]}>
        <mesh geometry={nodes.A.geometry} material={materials.Steel} position={[1, 0, 0]} />
        <mesh geometry={nodes['1001'].geometry} material={materials.Glass} position={[9.6, 0, 0]} />
        <mesh geometry={nodes.A.geometry} material={materials.Glass} position={[4.7, 0, 0]} />
        <mesh geometry={nodes.Part53.geometry} material={materials.Paint} position={[9.4, 0, 0]} />
        <mesh geometry={nodes.bolt_3.geometry} material={materials.Steel} position={[1.6, 0, 0]} />
      </group>
      <group position={[55, 0, 0]}>
        <mesh geometry={nodes.part55.geometry} material={materials.Glass} position={[4.9, 0, 0]} />
        <mesh geometry={nodes.Foo56.geometry} material={materials.Glass} />
        <mesh geometry={nodes[''].geometry} material={materials.Steel} position={[1.8, 0, 0]} />
        <mesh geometry={nodes.bolt_3.geometry} material={materials.Glass} position={[4.1, 0, 0]} />
        <mesh geometry={nodes[''].geometry} material={materials.Paint} position={[3.9, 0, 0]} />
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
