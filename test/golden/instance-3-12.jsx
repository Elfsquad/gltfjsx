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
      A: nodes.A5,
      Part1: nodes.Part8,
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
        <instances.A name="A5" position={[7.1, 0, 0]} />
        <mesh name="Foo16" geometry={nodes.Foo16.geometry} material={materials.Paint} position={[0.1, 0, 0]} />
        <instances.A name="Foo" position={[7.9, 0, 0]} />
        <instances.Part1 name="Part8" position={[5.3, 0, 0]} />
        <mesh name="Bolt19" geometry={nodes.Bolt19.geometry} material={materials.Paint} position={[5.7, 0, 0]} />
      </group>
      <group name="g10" position={[10, 0, 0]}>
        <mesh name="Foo10" geometry={nodes.Foo10.geometry} material={materials.Glass} position={[6.9, 0, 0]} />
        <instances.Part1 name="a2" position={[7.1, 0, 0]} />
      </group>
      <mesh name="Bolt10" geometry={nodes.Bolt10.geometry} material={materials.Steel} position={[7.6, 0, 0]} />
      <mesh name="part1" geometry={nodes.part1.geometry} material={materials.Paint} position={[5.5, 0, 0]} />
      <mesh name="Foo12" geometry={nodes.Foo12.geometry} material={materials.Steel} position={[7.9, 0, 0]} />
      <mesh name="Foo13" geometry={nodes.Foo13.geometry} material={materials.Steel} position={[6.7, 0, 0]} />
      <mesh name="bolt_34" geometry={nodes.bolt_34.geometry} material={materials.Glass} position={[8.8, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/model.gltf')
