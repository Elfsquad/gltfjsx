/*
golden 
*/

import * as THREE from 'three'
import React from 'react'
import { useGLTF, Merged } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Bolt10: THREE.Mesh
    part1: THREE.Mesh
    Foo12: THREE.Mesh
    Foo13: THREE.Mesh
    bolt_34: THREE.Mesh
    A5: THREE.Mesh
    Foo16: THREE.Mesh
    Foo: THREE.Mesh
    Part8: THREE.Mesh
    Bolt19: THREE.Mesh
    Foo10: THREE.Mesh
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
      A: nodes.A5,
      Part1: nodes.Part8,
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
        <instances.A position={[7.1, 0, 0]} />
        <mesh geometry={nodes.Foo16.geometry} material={materials.Paint} position={[0.1, 0, 0]} />
        <instances.A position={[7.9, 0, 0]} />
        <instances.Part1 position={[5.3, 0, 0]} />
        <mesh geometry={nodes.Bolt19.geometry} material={materials.Paint} position={[5.7, 0, 0]} />
      </group>
      <group position={[10, 0, 0]}>
        <mesh geometry={nodes.Foo10.geometry} material={materials.Glass} position={[6.9, 0, 0]} />
        <instances.Part1 position={[7.1, 0, 0]} />
      </group>
      <mesh geometry={nodes.Bolt10.geometry} material={materials.Steel} position={[7.6, 0, 0]} />
      <mesh geometry={nodes.part1.geometry} material={materials.Paint} position={[5.5, 0, 0]} />
      <mesh geometry={nodes.Foo12.geometry} material={materials.Steel} position={[7.9, 0, 0]} />
      <mesh geometry={nodes.Foo13.geometry} material={materials.Steel} position={[6.7, 0, 0]} />
      <mesh geometry={nodes.bolt_34.geometry} material={materials.Glass} position={[8.8, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/model.gltf')
