/*
golden 
*/

import * as THREE from 'three'
import React from 'react'
import { useGLTF, Merged } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    bolt_3: THREE.Mesh
    Foo11: THREE.Mesh
    part2: THREE.Mesh
    Part3: THREE.Mesh
    Part4: THREE.Mesh
    Part1: THREE.Mesh
    Foo16: THREE.Mesh
    A7: THREE.Mesh
    part: THREE.Mesh
    Part: THREE.Mesh
    Foo110: THREE.Mesh
    a2: THREE.Mesh
  }
  materials: {
    Steel: THREE.MeshStandardMaterial
    Paint: THREE.MeshStandardMaterial
    Glass: THREE.MeshStandardMaterial
  }
  animations: GLTFAction[]
}

type ContextType = Record<string, React.ForwardRefExoticComponent<JSX.IntrinsicElements['mesh']>>

const context = React.createContext({} as ContextType)

export function Instances({ children, ...props }: JSX.IntrinsicElements['group']) {
  const { nodes } = useGLTF('/model.gltf') as GLTFResult
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
      {(instances: ContextType) => <context.Provider value={instances} children={children} />}
    </Merged>
  )
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const instances = React.useContext(context)
  const { nodes, materials } = useGLTF('/model.gltf') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group position={[5, 0, 0]}>
        <instances.Part2 position={[5.5, 0, 0]} />
        <instances.Part2 position={[7.7, 0, 0]} />
        <instances.Part2 position={[3.2, 0, 0]} />
        <instances.Part1 position={[5.8, 0, 0]} />
        <mesh geometry={nodes.Part.geometry} material={materials.Steel} position={[8.7, 0, 0]} />
      </group>
      <group position={[10, 0, 0]}>
        <mesh geometry={nodes.Foo110.geometry} material={materials.Glass} position={[3, 0, 0]} />
        <mesh geometry={nodes.a2.geometry} material={materials.Glass} position={[9.2, 0, 0]} />
      </group>
      <mesh geometry={nodes.bolt_3.geometry} material={materials.Steel} position={[9.7, 0, 0]} />
      <instances.Foo position={[9.9, 0, 0]} />
      <instances.Foo position={[2.5, 0, 0]} />
      <mesh geometry={nodes.Part3.geometry} material={materials.Paint} position={[7.7, 0, 0]} />
      <instances.Part1 position={[5.9, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/model.gltf')
