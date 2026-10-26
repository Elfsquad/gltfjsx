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
      Bolt: nodes.Bolt10,
      Part: nodes.part1,
      Foo: nodes.Foo12,
      Foo1: nodes.Foo13,
      Bolt1: nodes.bolt_34,
      A: nodes.A5,
      Foo2: nodes.Foo16,
      Foo3: nodes.Foo,
      Part1: nodes.Part8,
      Bolt2: nodes.Bolt19,
      Foo4: nodes.Foo10,
      A1: nodes.a2,
      A2: nodes.A12,
      Foo5: nodes.Foo,
      Part2: nodes.part,
      A3: nodes.a2,
      A4: nodes.A18,
      Foo6: nodes.Foo19,
      A5: nodes.A120,
      A6: nodes.a2,
      Foo7: nodes.Foo,
      A7: nodes.a226,
      A8: nodes.A28,
      Part3: nodes.Part29,
      A9: nodes.A,
      Part4: nodes.Part,
      Part5: nodes.Part1,
      Bolt3: nodes.bolt_3,
      Part6: nodes.Part140,
      A10: nodes.A141,
      Part7: nodes.Part1,
      Bolt4: nodes.Bolt1,
      Foo8: nodes.Foo1,
      Part8: nodes.Part148,
      Part9: nodes.Part,
      Foo9: nodes.Foo,
      A11: nodes.A1,
      Foo10: nodes.Foo155,
      Foo11: nodes.Foo,
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
        <instances.A position={[7.1, 0, 0]} />
        <instances.Foo2 position={[0.1, 0, 0]} />
        <instances.Foo3 position={[7.9, 0, 0]} />
        <instances.Part1 position={[5.3, 0, 0]} />
        <instances.Bolt2 position={[5.7, 0, 0]} />
      </group>
      <group position={[10, 0, 0]}>
        <instances.Foo4 position={[6.9, 0, 0]} />
        <instances.A1 position={[7.1, 0, 0]} />
        <instances.A2 position={[0.7, 0, 0]} />
        <instances.Bolt1 position={[2.9, 0, 0]} />
        <instances.Part position={[7.6, 0, 0]} />
      </group>
      <group position={[15, 0, 0]}>
        <instances.Foo5 position={[7.7, 0, 0]} />
        <instances.Part2 position={[7.7, 0, 0]} />
        <instances.A3 position={[5.8, 0, 0]} />
        <instances.A4 position={[6.3, 0, 0]} />
        <instances.Foo6 position={[6.3, 0, 0]} />
      </group>
      <group position={[20, 0, 0]}>
        <instances.A5 position={[8.5, 0, 0]} />
        <instances.Part2 position={[6.7, 0, 0]} />
        <instances.A6 position={[1.8, 0, 0]} />
        <instances.Foo7 position={[8.3, 0, 0]} />
        <instances.A2 position={[1.3, 0, 0]} />
      </group>
      <group position={[25, 0, 0]}>
        <instances.A3 position={[3.2, 0, 0]} />
        <instances.A7 position={[3.8, 0, 0]} />
        <instances.Part position={[6.7, 0, 0]} />
        <instances.A8 position={[4.5, 0, 0]} />
        <instances.Part3 position={[1.8, 0, 0]} />
      </group>
      <group position={[30, 0, 0]}>
        <instances.A9 position={[3.9, 0, 0]} />
        <instances.Part2 position={[1.3, 0, 0]} />
        <instances.Part4 position={[4.6, 0, 0]} />
        <instances.Part3 position={[2.9, 0, 0]} />
        <instances.Part5 position={[0.1, 0, 0]} />
      </group>
      <group position={[35, 0, 0]}>
        <instances.Foo2 position={[5.7, 0, 0]} />
        <instances.Foo2 position={[9.8, 0, 0]} />
        <instances.Part5 position={[6.8, 0, 0]} />
        <instances.Bolt3 position={[6.3, 0, 0]} />
        <instances.A4 position={[5.8, 0, 0]} />
      </group>
      <group position={[40, 0, 0]}>
        <instances.Part6 position={[5.5, 0, 0]} />
        <instances.A10 position={[8.1, 0, 0]} />
        <instances.Part7 position={[7.3, 0, 0]} />
        <instances.Bolt4 position={[4.5, 0, 0]} />
        <instances.A position={[2.3, 0, 0]} />
      </group>
      <group position={[45, 0, 0]}>
        <instances.Foo8 position={[8.8, 0, 0]} />
        <instances.Bolt3 position={[2, 0, 0]} />
        <instances.A1 position={[7.2, 0, 0]} />
        <instances.Part8 position={[6.3, 0, 0]} />
        <instances.Part9 position={[2.3, 0, 0]} />
      </group>
      <group position={[50, 0, 0]}>
        <instances.A4 position={[4.1, 0, 0]} />
        <instances.Foo9 position={[5.3, 0, 0]} />
        <instances.A11 position={[6.1, 0, 0]} />
        <instances.Part9 position={[8.4, 0, 0]} />
        <instances.A8 position={[5.8, 0, 0]} />
      </group>
      <group position={[55, 0, 0]}>
        <instances.Foo10 position={[5.6, 0, 0]} />
        <instances.A5 position={[7.5, 0, 0]} />
        <instances.Foo11 position={[1.6, 0, 0]} />
        <instances.Part2 position={[1.2, 0, 0]} />
        <instances.Foo11 position={[7.3, 0, 0]} />
      </group>
      <instances.Bolt position={[7.6, 0, 0]} />
      <instances.Part position={[5.5, 0, 0]} />
      <instances.Foo position={[7.9, 0, 0]} />
      <instances.Foo1 position={[6.7, 0, 0]} />
      <instances.Bolt1 position={[8.8, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/model.gltf')
