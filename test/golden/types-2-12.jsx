/*
golden 
*/

import * as THREE from 'three'
import React from 'react'
import { useGLTF, Merged } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Part2: THREE.Mesh
    Bolt: THREE.Mesh
    Bolt1: THREE.Mesh
    Bolt: THREE.Mesh
    part4: THREE.Mesh
    Foo: THREE.Mesh
    Part: THREE.Mesh
    A7: THREE.Mesh
    bolt_38: THREE.Mesh
    A1: THREE.Mesh
    Foo1: THREE.Mesh
    Part: THREE.Mesh
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
      Bolt: nodes.Bolt,
      Bolt1: nodes.Bolt1,
      Bolt2: nodes.Bolt,
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
        <mesh geometry={nodes.Foo.geometry} material={materials.Paint} position={[2.3, 0, 0]} />
        <mesh geometry={nodes.Part.geometry} material={materials.Paint} position={[1, 0, 0]} />
        <instances.Bolt2 position={[9.8, 0, 0]} />
        <instances.Bolt2 position={[6.8, 0, 0]} />
        <instances.Bolt2 position={[4.5, 0, 0]} />
      </group>
      <group position={[10, 0, 0]}>
        <instances.Bolt1 position={[8.4, 0, 0]} />
        <instances.Bolt position={[8.4, 0, 0]} />
      </group>
      <mesh geometry={nodes.Part2.geometry} material={materials.Steel} position={[8.8, 0, 0]} />
      <instances.Bolt position={[1.1, 0, 0]} />
      <instances.Bolt1 position={[5.8, 0, 0]} />
      <instances.Bolt2 position={[0.4, 0, 0]} />
      <instances.Bolt1 position={[0.1, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/model.gltf')
