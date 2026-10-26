/*
golden 
*/

import React from 'react'
import { useGLTF, Merged } from '@react-three/drei'

const context = React.createContext()

export function Instances({ children, ...props }) {
  const { nodes } = useGLTF('/model.gltf')
  const instances = React.useMemo(
    () => ({
      Bolt: nodes.Bolt,
      Bolt1: nodes.Bolt1,
      Bolt2: nodes.Bolt,
      Part1: nodes.part4,
      A: nodes.A7,
      A1: nodes.A1,
      A2: nodes.a213,
      Bolt3: nodes.bolt_316,
      A4: nodes.A17,
      Bolt4: nodes.Bolt1,
      Part6: nodes.Part225,
      Bolt6: nodes.bolt_3,
      A8: nodes.A137,
      Foo1: nodes.Foo40,
      Bolt8: nodes.bolt_3,
    }),
    [nodes],
  )
  return (
    <Merged meshes={instances} {...props}>
      {(instances) => <context.Provider value={instances} children={children} />}
    </Merged>
  )
}

export function Model(props) {
  const instances = React.useContext(context)
  const { nodes, materials } = useGLTF('/model.gltf')
  return (
    <group {...props} dispose={null}>
      <group name="g5" position={[5, 0, 0]}>
        <mesh name="Foo" geometry={nodes.Foo.geometry} material={materials.Paint} position={[2.3, 0, 0]} />
        <mesh name="Part" geometry={nodes.Part.geometry} material={materials.Paint} position={[1, 0, 0]} />
        <instances.A name="A7" position={[9.8, 0, 0]} />
        <instances.A name="bolt_38" position={[6.8, 0, 0]} />
        <instances.A name="A1" position={[4.5, 0, 0]} />
      </group>
      <group name="g10" position={[10, 0, 0]}>
        <instances.Part1 name="Foo1" position={[8.4, 0, 0]} />
        <instances.Bolt name="Part" position={[8.4, 0, 0]} />
        <instances.A1 name="A1" position={[4.5, 0, 0]} />
        <instances.A2 name="a213" position={[4.4, 0, 0]} />
        <mesh name="a214" geometry={nodes.a214.geometry} material={materials.Glass} position={[2.1, 0, 0]} />
      </group>
      <group name="g15" position={[15, 0, 0]}>
        <instances.Bolt name="Foo1" position={[2.1, 0, 0]} />
        <instances.Bolt3 name="bolt_316" position={[2.9, 0, 0]} />
        <instances.A4 name="A17" position={[4.2, 0, 0]} />
        <instances.Bolt4 name="Bolt1" position={[2.6, 0, 0]} />
        <instances.A name="Part" position={[7.8, 0, 0]} />
      </group>
      <group name="g20" position={[20, 0, 0]}>
        <mesh name="Part2" geometry={nodes.Part2.geometry} material={materials.Steel} position={[1.1, 0, 0]} />
        <mesh name="a2" geometry={nodes.a2.geometry} material={materials.Glass} position={[1.1, 0, 0]} />
        <mesh name="Part" geometry={nodes.Part.geometry} material={materials.Glass} position={[5.2, 0, 0]} />
        <mesh name="Bolt1" geometry={nodes.Bolt1.geometry} material={materials.Glass} position={[0.7, 0, 0]} />
        <mesh name="Part1" geometry={nodes.Part1.geometry} material={materials.Paint} position={[4.6, 0, 0]} />
      </group>
      <group name="g25" position={[25, 0, 0]}>
        <instances.Part6 name="Part225" position={[9.1, 0, 0]} />
        <instances.Part6 name="Part126" position={[2.5, 0, 0]} />
        <instances.A4 name="a227" position={[8.2, 0, 0]} />
        <instances.A2 name="Foo1" position={[3.7, 0, 0]} />
        <mesh name="A129" geometry={nodes.A129.geometry} material={materials.Glass} position={[4.3, 0, 0]} />
      </group>
      <group name="g30" position={[30, 0, 0]}>
        <instances.Bolt6 name="bolt_3" position={[1.4, 0, 0]} />
        <mesh name="part31" geometry={nodes.part31.geometry} material={materials.Steel} position={[9, 0, 0]} />
        <mesh name="A132" geometry={nodes.A132.geometry} material={materials.Steel} position={[2.1, 0, 0]} />
        <instances.A name="Foo1" position={[7.9, 0, 0]} />
        <instances.Bolt4 name="Part" position={[6.9, 0, 0]} />
      </group>
      <group name="g35" position={[35, 0, 0]}>
        <mesh name="bolt_335" geometry={nodes.bolt_335.geometry} material={materials.Steel} position={[4, 0, 0]} />
        <instances.Bolt4 name="Foo" position={[0.2, 0, 0]} />
        <instances.A8 name="A137" position={[2.6, 0, 0]} />
        <instances.Bolt2 name="part" position={[5.3, 0, 0]} />
        <instances.A1 name="Bolt" position={[9.2, 0, 0]} />
      </group>
      <group name="g40" position={[40, 0, 0]}>
        <instances.Foo1 name="Foo40" position={[0.5, 0, 0]} />
        <instances.Bolt8 name="bolt_3" position={[6.4, 0, 0]} />
        <instances.Bolt8 name="part42" position={[1.6, 0, 0]} />
        <instances.A8 name="Foo1" position={[2.3, 0, 0]} />
        <mesh name="a244" geometry={nodes.a244.geometry} material={materials.Paint} position={[4.3, 0, 0]} />
      </group>
      <group name="g45" position={[45, 0, 0]}>
        <mesh name="Bolt145" geometry={nodes.Bolt145.geometry} material={materials.Glass} position={[5.7, 0, 0]} />
        <mesh name="Bolt1" geometry={nodes.Bolt1.geometry} material={materials.Paint} position={[7.8, 0, 0]} />
        <instances.A name="A147" position={[3.7, 0, 0]} />
        <mesh name="Bolt1" geometry={nodes.Bolt1.geometry} material={materials.Steel} position={[2.2, 0, 0]} />
        <mesh name="Part" geometry={nodes.Part.geometry} material={materials.Steel} position={[4.6, 0, 0]} />
      </group>
      <group name="g50" position={[50, 0, 0]}>
        <instances.Bolt8 name="Part1" position={[8, 0, 0]} />
        <instances.Bolt1 name="Foo" position={[0.8, 0, 0]} />
        <mesh name="a252" geometry={nodes.a252.geometry} material={materials.Steel} position={[1.6, 0, 0]} />
        <instances.Bolt6 name="Bolt1" position={[2.5, 0, 0]} />
        <instances.A name="bolt_3" position={[8.6, 0, 0]} />
      </group>
      <group name="g55" position={[55, 0, 0]}>
        <instances.A name="A55" position={[3.7, 0, 0]} />
        <instances.Bolt3 name="Foo156" position={[2.1, 0, 0]} />
        <instances.Foo1 name="Bolt" position={[0.1, 0, 0]} />
        <mesh name="A1" geometry={nodes.A1.geometry} material={materials.Steel} position={[9.7, 0, 0]} />
        <mesh name="part" geometry={nodes.part.geometry} material={materials.Steel} position={[2.6, 0, 0]} />
      </group>
      <mesh name="Part2" geometry={nodes.Part2.geometry} material={materials.Steel} position={[8.8, 0, 0]} />
      <instances.Bolt name="Bolt" position={[1.1, 0, 0]} />
      <instances.Bolt1 name="Bolt1" position={[5.8, 0, 0]} />
      <instances.Bolt2 name="Bolt" position={[0.4, 0, 0]} />
      <instances.Part1 name="part4" position={[0.1, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/model.gltf')
