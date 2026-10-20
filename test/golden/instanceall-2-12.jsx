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
      Foo: nodes.Foo,
      Part1: nodes.Part,
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
        <instances.Part1 position={[1, 0, 0]} />
        <instances.Bolt2 position={[9.8, 0, 0]} />
        <instances.Bolt2 position={[6.8, 0, 0]} />
        <instances.Bolt2 position={[4.5, 0, 0]} />
      </group>
      <group position={[10, 0, 0]}>
        <instances.Bolt1 position={[8.4, 0, 0]} />
        <instances.Bolt position={[8.4, 0, 0]} />
      </group>
      <instances.Part position={[8.8, 0, 0]} />
      <instances.Bolt position={[1.1, 0, 0]} />
      <instances.Bolt1 position={[5.8, 0, 0]} />
      <instances.Bolt2 position={[0.4, 0, 0]} />
      <instances.Bolt1 position={[0.1, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/model.gltf')
