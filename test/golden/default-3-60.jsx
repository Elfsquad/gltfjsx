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
        <mesh geometry={nodes['12'].geometry} material={materials.Glass} position={[0.7, 0, 0]} />
        <mesh geometry={nodes.Part1.geometry} material={materials.Glass} position={[2.9, 0, 0]} />
        <mesh geometry={nodes.bolt_314.geometry} material={materials.Paint} position={[7.6, 0, 0]} />
      </group>
      <group position={[15, 0, 0]}>
        <mesh geometry={nodes.Foo.geometry} material={materials.Glass} position={[7.7, 0, 0]} />
        <mesh geometry={nodes['77'].geometry} material={materials.Paint} position={[7.7, 0, 0]} />
        <mesh geometry={nodes.a2.geometry} material={materials.Glass} position={[5.8, 0, 0]} />
        <mesh geometry={nodes.A18.geometry} material={materials.Glass} position={[6.3, 0, 0]} />
        <mesh geometry={nodes.bolt_319.geometry} material={materials.Paint} position={[6.3, 0, 0]} />
      </group>
      <group position={[20, 0, 0]}>
        <mesh geometry={nodes.A120.geometry} material={materials.Steel} position={[8.5, 0, 0]} />
        <mesh geometry={nodes.A121.geometry} material={materials.Paint} position={[6.7, 0, 0]} />
        <mesh geometry={nodes.a2.geometry} material={materials.Steel} position={[1.8, 0, 0]} />
        <mesh geometry={nodes.Foo.geometry} material={materials.Steel} position={[8.3, 0, 0]} />
        <mesh geometry={nodes['7724'].geometry} material={materials.Glass} position={[1.3, 0, 0]} />
      </group>
      <group position={[25, 0, 0]}>
        <mesh geometry={nodes.bolt_3.geometry} material={materials.Glass} position={[3.2, 0, 0]} />
        <mesh geometry={nodes.a226.geometry} material={materials.Steel} position={[3.8, 0, 0]} />
        <mesh geometry={nodes.Bolt127.geometry} material={materials.Paint} position={[6.7, 0, 0]} />
        <mesh geometry={nodes['28'].geometry} material={materials.Paint} position={[4.5, 0, 0]} />
        <mesh geometry={nodes['100229'].geometry} material={materials.Glass} position={[1.8, 0, 0]} />
      </group>
      <group position={[30, 0, 0]}>
        <mesh geometry={nodes[''].geometry} material={materials.Glass} position={[3.9, 0, 0]} />
        <mesh geometry={nodes.part31.geometry} material={materials.Paint} position={[1.3, 0, 0]} />
        <mesh geometry={nodes['1001'].geometry} material={materials.Steel} position={[4.6, 0, 0]} />
        <mesh geometry={nodes.A1.geometry} material={materials.Glass} position={[2.9, 0, 0]} />
        <mesh geometry={nodes.Part.geometry} material={materials.Steel} position={[0.1, 0, 0]} />
      </group>
      <group position={[35, 0, 0]}>
        <mesh geometry={nodes.a235.geometry} material={materials.Paint} position={[5.7, 0, 0]} />
        <mesh geometry={nodes.A36.geometry} material={materials.Paint} position={[9.8, 0, 0]} />
        <mesh geometry={nodes['100137'].geometry} material={materials.Steel} position={[6.8, 0, 0]} />
        <mesh geometry={nodes.bolt_3.geometry} material={materials.Paint} position={[6.3, 0, 0]} />
        <mesh geometry={nodes.bolt_339.geometry} material={materials.Glass} position={[5.8, 0, 0]} />
      </group>
      <group position={[40, 0, 0]}>
        <mesh geometry={nodes.Part40.geometry} material={materials.Paint} position={[5.5, 0, 0]} />
        <mesh geometry={nodes.A41.geometry} material={materials.Paint} position={[8.1, 0, 0]} />
        <mesh geometry={nodes.Part.geometry} material={materials.Steel} position={[7.3, 0, 0]} />
        <mesh geometry={nodes.Part2.geometry} material={materials.Glass} position={[4.5, 0, 0]} />
        <mesh geometry={nodes.Part2.geometry} material={materials.Glass} position={[2.3, 0, 0]} />
      </group>
      <group position={[45, 0, 0]}>
        <mesh geometry={nodes.Foo.geometry} material={materials.Paint} position={[8.8, 0, 0]} />
        <mesh geometry={nodes.Part46.geometry} material={materials.Paint} position={[2, 0, 0]} />
        <mesh geometry={nodes.a247.geometry} material={materials.Paint} position={[7.2, 0, 0]} />
        <mesh geometry={nodes.Part48.geometry} material={materials.Glass} position={[6.3, 0, 0]} />
        <mesh geometry={nodes['1002'].geometry} material={materials.Glass} position={[2.3, 0, 0]} />
      </group>
      <group position={[50, 0, 0]}>
        <mesh geometry={nodes.Foo1.geometry} material={materials.Glass} position={[4.1, 0, 0]} />
        <mesh geometry={nodes.bolt_3.geometry} material={materials.Steel} position={[5.3, 0, 0]} />
        <mesh geometry={nodes.A1.geometry} material={materials.Steel} position={[6.1, 0, 0]} />
        <mesh geometry={nodes.a2.geometry} material={materials.Glass} position={[8.4, 0, 0]} />
        <mesh geometry={nodes.Bolt154.geometry} material={materials.Paint} position={[5.8, 0, 0]} />
      </group>
      <group position={[55, 0, 0]}>
        <mesh geometry={nodes.Foo155.geometry} material={materials.Glass} position={[5.6, 0, 0]} />
        <mesh geometry={nodes['100256'].geometry} material={materials.Steel} position={[7.5, 0, 0]} />
        <mesh geometry={nodes.bolt_3.geometry} material={materials.Paint} position={[1.6, 0, 0]} />
        <mesh geometry={nodes['100158'].geometry} material={materials.Paint} position={[1.2, 0, 0]} />
        <mesh geometry={nodes['59'].geometry} material={materials.Paint} position={[7.3, 0, 0]} />
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
