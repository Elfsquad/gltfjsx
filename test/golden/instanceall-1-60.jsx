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
      Bolt: nodes.bolt_3,
      Foo: nodes.Foo11,
      Part: nodes.part2,
      Part1: nodes.Part3,
      Part2: nodes.Part4,
      Part3: nodes.Part1,
      A: nodes.A7,
      Part4: nodes.part,
      Part5: nodes.Part,
      Foo1: nodes.Foo110,
      A1: nodes.a2,
      Part6: nodes.part12,
      Bolt1: nodes.bolt_3,
      A2: nodes.a214,
      Bolt2: nodes.bolt_316,
      Part7: nodes.part17,
      Bolt3: nodes.bolt_3,
      Part8: nodes.Part,
      Part9: nodes.part23,
      Part10: nodes.Part124,
      Part11: nodes.Part2,
      Foo2: nodes.Foo,
      Part12: nodes.Part127,
      Part13: nodes.Part129,
      Bolt4: nodes.bolt_330,
      Bolt5: nodes.bolt_3,
      Foo3: nodes.Foo,
      A3: nodes.A1,
      Part14: nodes.Part,
      Part15: nodes.part35,
      Part16: nodes.Part2,
      Part17: nodes.Part37,
      Part18: nodes.part41,
      Part19: nodes.Part42,
      Foo4: nodes.Foo,
      Part20: nodes.Part,
      A4: nodes.A49,
      A5: nodes.A1,
      Foo5: nodes.Foo,
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
        <instances.Part3 position={[5.5, 0, 0]} />
        <instances.Part3 position={[7.7, 0, 0]} />
        <instances.A position={[3.2, 0, 0]} />
        <instances.Part4 position={[5.8, 0, 0]} />
        <instances.Part5 position={[8.7, 0, 0]} />
      </group>
      <group position={[10, 0, 0]}>
        <instances.Foo1 position={[3, 0, 0]} />
        <instances.A1 position={[9.2, 0, 0]} />
        <instances.Part6 position={[8.7, 0, 0]} />
        <instances.Bolt1 position={[7, 0, 0]} />
        <instances.A2 position={[9.8, 0, 0]} />
      </group>
      <group position={[15, 0, 0]}>
        <instances.Part1 position={[3.2, 0, 0]} />
        <instances.Bolt2 position={[8.1, 0, 0]} />
        <instances.Part7 position={[8.9, 0, 0]} />
        <instances.Part2 position={[3.2, 0, 0]} />
        <instances.Part5 position={[6.8, 0, 0]} />
      </group>
      <group position={[20, 0, 0]}>
        <instances.Bolt3 position={[2.1, 0, 0]} />
        <instances.Part3 position={[8.7, 0, 0]} />
        <instances.Part8 position={[3.3, 0, 0]} />
        <instances.Part9 position={[8.7, 0, 0]} />
        <instances.Part10 position={[1.5, 0, 0]} />
      </group>
      <group position={[25, 0, 0]}>
        <instances.Part11 position={[3.1, 0, 0]} />
        <instances.Foo2 position={[2.3, 0, 0]} />
        <instances.Part12 position={[9.3, 0, 0]} />
        <instances.A position={[0.4, 0, 0]} />
        <instances.Part13 position={[8.2, 0, 0]} />
      </group>
      <group position={[30, 0, 0]}>
        <instances.Bolt4 position={[6.9, 0, 0]} />
        <instances.Bolt5 position={[7.9, 0, 0]} />
        <instances.Foo3 position={[0.3, 0, 0]} />
        <instances.A3 position={[3.6, 0, 0]} />
        <instances.Part14 position={[5.4, 0, 0]} />
      </group>
      <group position={[35, 0, 0]}>
        <instances.Part15 position={[8.1, 0, 0]} />
        <instances.Part16 position={[2.9, 0, 0]} />
        <instances.Part17 position={[1.7, 0, 0]} />
        <instances.Bolt3 position={[7.8, 0, 0]} />
        <instances.Part2 position={[0.1, 0, 0]} />
      </group>
      <group position={[40, 0, 0]}>
        <instances.Part7 position={[5.2, 0, 0]} />
        <instances.Part18 position={[9.7, 0, 0]} />
        <instances.Part19 position={[6.2, 0, 0]} />
        <instances.Foo4 position={[0.2, 0, 0]} />
        <instances.Foo3 position={[6.5, 0, 0]} />
      </group>
      <group position={[45, 0, 0]}>
        <instances.Part13 position={[0.2, 0, 0]} />
        <instances.Part20 position={[5.4, 0, 0]} />
        <instances.Part15 position={[6.8, 0, 0]} />
        <instances.Part12 position={[6.9, 0, 0]} />
        <instances.A4 position={[4, 0, 0]} />
      </group>
      <group position={[50, 0, 0]}>
        <instances.A5 position={[1, 0, 0]} />
        <instances.A2 position={[9.6, 0, 0]} />
        <instances.Bolt4 position={[4.7, 0, 0]} />
        <instances.Part15 position={[9.4, 0, 0]} />
        <instances.Bolt position={[1.6, 0, 0]} />
      </group>
      <group position={[55, 0, 0]}>
        <instances.A2 position={[4.9, 0, 0]} />
        <instances.Bolt4 />
        <instances.Bolt position={[1.8, 0, 0]} />
        <instances.Foo5 position={[4.1, 0, 0]} />
        <instances.Part19 position={[3.9, 0, 0]} />
      </group>
      <instances.Bolt position={[9.7, 0, 0]} />
      <instances.Foo position={[9.9, 0, 0]} />
      <instances.Part position={[2.5, 0, 0]} />
      <instances.Part1 position={[7.7, 0, 0]} />
      <instances.Part2 position={[5.9, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/model.gltf')
