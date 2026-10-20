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
        <instances.Bolt2 name="A7" position={[9.8, 0, 0]} />
        <instances.Bolt2 name="bolt_38" position={[6.8, 0, 0]} />
        <instances.Bolt2 name="A1" position={[4.5, 0, 0]} />
      </group>
      <group name="g10" position={[10, 0, 0]}>
        <instances.Bolt1 name="Foo1" position={[8.4, 0, 0]} />
        <instances.Bolt name="Part" position={[8.4, 0, 0]} />
      </group>
      <mesh name="Part2" geometry={nodes.Part2.geometry} material={materials.Steel} position={[8.8, 0, 0]} />
      <instances.Bolt name="Bolt" position={[1.1, 0, 0]} />
      <instances.Bolt1 name="Bolt1" position={[5.8, 0, 0]} />
      <instances.Bolt2 name="Bolt" position={[0.4, 0, 0]} />
      <instances.Bolt1 name="part4" position={[0.1, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/model.gltf')
