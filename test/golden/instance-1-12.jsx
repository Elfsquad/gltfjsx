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
      Foo: nodes.Foo11,
      Part1: nodes.Part4,
      Part2: nodes.Part1,
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
        <instances.Part2 name="Part1" position={[5.5, 0, 0]} />
        <instances.Part2 name="Foo16" position={[7.7, 0, 0]} />
        <instances.Part2 name="A7" position={[3.2, 0, 0]} />
        <instances.Part1 name="part" position={[5.8, 0, 0]} />
        <mesh name="Part" geometry={nodes.Part.geometry} material={materials.Steel} position={[8.7, 0, 0]} />
      </group>
      <group name="g10" position={[10, 0, 0]}>
        <mesh name="Foo110" geometry={nodes.Foo110.geometry} material={materials.Glass} position={[3, 0, 0]} />
        <mesh name="a2" geometry={nodes.a2.geometry} material={materials.Glass} position={[9.2, 0, 0]} />
      </group>
      <mesh name="bolt_3" geometry={nodes.bolt_3.geometry} material={materials.Steel} position={[9.7, 0, 0]} />
      <instances.Foo name="Foo11" position={[9.9, 0, 0]} />
      <instances.Foo name="part2" position={[2.5, 0, 0]} />
      <mesh name="Part3" geometry={nodes.Part3.geometry} material={materials.Paint} position={[7.7, 0, 0]} />
      <instances.Part1 name="Part4" position={[5.9, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/model.gltf')
