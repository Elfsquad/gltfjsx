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
      Part1: nodes.Part8,
      Bolt2: nodes.Bolt19,
      Foo3: nodes.Foo10,
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
        <instances.A position={[7.9, 0, 0]} />
        <instances.Part1 position={[5.3, 0, 0]} />
        <instances.Bolt2 position={[5.7, 0, 0]} />
      </group>
      <group position={[10, 0, 0]}>
        <instances.Foo3 position={[6.9, 0, 0]} />
        <instances.Part1 position={[7.1, 0, 0]} />
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
