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
      Part: nodes.Part2,
      Bolt: nodes.Bolt,
      Bolt1: nodes.Bolt1,
      Bolt2: nodes.Bolt,
      Part1: nodes.part4,
      Foo: nodes.Foo,
      Part2: nodes.Part,
      A: nodes.A7,
      A1: nodes.A1,
      A2: nodes.a213,
      A3: nodes.a214,
      Bolt3: nodes.bolt_316,
      A4: nodes.A17,
      Bolt4: nodes.Bolt1,
      Part3: nodes.Part2,
      A5: nodes.a2,
      Part4: nodes.Part,
      Bolt5: nodes.Bolt1,
      Part5: nodes.Part1,
      Part6: nodes.Part225,
      A6: nodes.A129,
      Bolt6: nodes.bolt_3,
      Part7: nodes.part31,
      A7: nodes.A132,
      Bolt7: nodes.bolt_335,
      A8: nodes.A137,
      Foo1: nodes.Foo40,
      Bolt8: nodes.bolt_3,
      A9: nodes.a244,
      Bolt9: nodes.Bolt145,
      Bolt10: nodes.Bolt1,
      Bolt11: nodes.Bolt1,
      Part8: nodes.Part,
      A10: nodes.a252,
      A11: nodes.A1,
      Part9: nodes.part,
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
  return (
    <group {...props} dispose={null}>
      <group position={[5, 0, 0]}>
        <instances.Foo position={[2.3, 0, 0]} />
        <instances.Part2 position={[1, 0, 0]} />
        <instances.A position={[9.8, 0, 0]} />
        <instances.A position={[6.8, 0, 0]} />
        <instances.A position={[4.5, 0, 0]} />
      </group>
      <group position={[10, 0, 0]}>
        <instances.Part1 position={[8.4, 0, 0]} />
        <instances.Bolt position={[8.4, 0, 0]} />
        <instances.A1 position={[4.5, 0, 0]} />
        <instances.A2 position={[4.4, 0, 0]} />
        <instances.A3 position={[2.1, 0, 0]} />
      </group>
      <group position={[15, 0, 0]}>
        <instances.Bolt position={[2.1, 0, 0]} />
        <instances.Bolt3 position={[2.9, 0, 0]} />
        <instances.A4 position={[4.2, 0, 0]} />
        <instances.Bolt4 position={[2.6, 0, 0]} />
        <instances.A position={[7.8, 0, 0]} />
      </group>
      <group position={[20, 0, 0]}>
        <instances.Part3 position={[1.1, 0, 0]} />
        <instances.A5 position={[1.1, 0, 0]} />
        <instances.Part4 position={[5.2, 0, 0]} />
        <instances.Bolt5 position={[0.7, 0, 0]} />
        <instances.Part5 position={[4.6, 0, 0]} />
      </group>
      <group position={[25, 0, 0]}>
        <instances.Part6 position={[9.1, 0, 0]} />
        <instances.Part6 position={[2.5, 0, 0]} />
        <instances.A4 position={[8.2, 0, 0]} />
        <instances.A2 position={[3.7, 0, 0]} />
        <instances.A6 position={[4.3, 0, 0]} />
      </group>
      <group position={[30, 0, 0]}>
        <instances.Bolt6 position={[1.4, 0, 0]} />
        <instances.Part7 position={[9, 0, 0]} />
        <instances.A7 position={[2.1, 0, 0]} />
        <instances.A position={[7.9, 0, 0]} />
        <instances.Bolt4 position={[6.9, 0, 0]} />
      </group>
      <group position={[35, 0, 0]}>
        <instances.Bolt7 position={[4, 0, 0]} />
        <instances.Bolt4 position={[0.2, 0, 0]} />
        <instances.A8 position={[2.6, 0, 0]} />
        <instances.Bolt2 position={[5.3, 0, 0]} />
        <instances.A1 position={[9.2, 0, 0]} />
      </group>
      <group position={[40, 0, 0]}>
        <instances.Foo1 position={[0.5, 0, 0]} />
        <instances.Bolt8 position={[6.4, 0, 0]} />
        <instances.Bolt8 position={[1.6, 0, 0]} />
        <instances.A8 position={[2.3, 0, 0]} />
        <instances.A9 position={[4.3, 0, 0]} />
      </group>
      <group position={[45, 0, 0]}>
        <instances.Bolt9 position={[5.7, 0, 0]} />
        <instances.Bolt10 position={[7.8, 0, 0]} />
        <instances.A position={[3.7, 0, 0]} />
        <instances.Bolt11 position={[2.2, 0, 0]} />
        <instances.Part8 position={[4.6, 0, 0]} />
      </group>
      <group position={[50, 0, 0]}>
        <instances.Bolt8 position={[8, 0, 0]} />
        <instances.Bolt1 position={[0.8, 0, 0]} />
        <instances.A10 position={[1.6, 0, 0]} />
        <instances.Bolt6 position={[2.5, 0, 0]} />
        <instances.A position={[8.6, 0, 0]} />
      </group>
      <group position={[55, 0, 0]}>
        <instances.A position={[3.7, 0, 0]} />
        <instances.Bolt3 position={[2.1, 0, 0]} />
        <instances.Foo1 position={[0.1, 0, 0]} />
        <instances.A11 position={[9.7, 0, 0]} />
        <instances.Part9 position={[2.6, 0, 0]} />
      </group>
      <instances.Part position={[8.8, 0, 0]} />
      <instances.Bolt position={[1.1, 0, 0]} />
      <instances.Bolt1 position={[5.8, 0, 0]} />
      <instances.Bolt2 position={[0.4, 0, 0]} />
      <instances.Part1 position={[0.1, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/model.gltf')
