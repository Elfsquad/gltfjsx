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
      Part: nodes.Part3,
      Part1: nodes.Part4,
      Part2: nodes.Part1,
      Part3: nodes.Part,
      Foo1: nodes.Foo110,
      A: nodes.a2,
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
        <instances.Part2 position={[5.5, 0, 0]} />
        <instances.Part2 position={[7.7, 0, 0]} />
        <instances.Part2 position={[3.2, 0, 0]} />
        <instances.Part1 position={[5.8, 0, 0]} />
        <instances.Part3 position={[8.7, 0, 0]} />
      </group>
      <group position={[10, 0, 0]}>
        <instances.Foo1 position={[3, 0, 0]} />
        <instances.A position={[9.2, 0, 0]} />
      </group>
      <instances.Bolt position={[9.7, 0, 0]} />
      <instances.Foo position={[9.9, 0, 0]} />
      <instances.Foo position={[2.5, 0, 0]} />
      <instances.Part position={[7.7, 0, 0]} />
      <instances.Part1 position={[5.9, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/model.gltf')
