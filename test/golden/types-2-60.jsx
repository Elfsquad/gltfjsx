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
    A1: THREE.Mesh
    a213: THREE.Mesh
    a214: THREE.Mesh
    Foo1: THREE.Mesh
    bolt_316: THREE.Mesh
    A17: THREE.Mesh
    Bolt1: THREE.Mesh
    Part: THREE.Mesh
    Part2: THREE.Mesh
    a2: THREE.Mesh
    Part: THREE.Mesh
    Bolt1: THREE.Mesh
    Part1: THREE.Mesh
    Part225: THREE.Mesh
    Part126: THREE.Mesh
    a227: THREE.Mesh
    Foo1: THREE.Mesh
    A129: THREE.Mesh
    bolt_3: THREE.Mesh
    part31: THREE.Mesh
    A132: THREE.Mesh
    Foo1: THREE.Mesh
    Part: THREE.Mesh
    bolt_335: THREE.Mesh
    Foo: THREE.Mesh
    A137: THREE.Mesh
    part: THREE.Mesh
    Bolt: THREE.Mesh
    Foo40: THREE.Mesh
    bolt_3: THREE.Mesh
    part42: THREE.Mesh
    Foo1: THREE.Mesh
    a244: THREE.Mesh
    Bolt145: THREE.Mesh
    Bolt1: THREE.Mesh
    A147: THREE.Mesh
    Bolt1: THREE.Mesh
    Part: THREE.Mesh
    Part1: THREE.Mesh
    Foo: THREE.Mesh
    a252: THREE.Mesh
    Bolt1: THREE.Mesh
    bolt_3: THREE.Mesh
    A55: THREE.Mesh
    Foo156: THREE.Mesh
    Bolt: THREE.Mesh
    A1: THREE.Mesh
    part: THREE.Mesh
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
      Part1: nodes.part4,
      A: nodes.A7,
      A1: nodes.A1,
      A2: nodes.a213,
      Bolt3: nodes.bolt_316,
      A4: nodes.A17,
      Bolt4: nodes.Bolt1,
      Part6: nodes.Part225,
      Bolt6: nodes.bolt_3,
      A8: nodes.A137,
      Foo1: nodes.Foo40,
      Bolt8: nodes.bolt_3,
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
        <instances.A position={[9.8, 0, 0]} />
        <instances.A position={[6.8, 0, 0]} />
        <instances.A position={[4.5, 0, 0]} />
      </group>
      <group position={[10, 0, 0]}>
        <instances.Part1 position={[8.4, 0, 0]} />
        <instances.Bolt position={[8.4, 0, 0]} />
        <instances.A1 position={[4.5, 0, 0]} />
        <instances.A2 position={[4.4, 0, 0]} />
        <mesh geometry={nodes.a214.geometry} material={materials.Glass} position={[2.1, 0, 0]} />
      </group>
      <group position={[15, 0, 0]}>
        <instances.Bolt position={[2.1, 0, 0]} />
        <instances.Bolt3 position={[2.9, 0, 0]} />
        <instances.A4 position={[4.2, 0, 0]} />
        <instances.Bolt4 position={[2.6, 0, 0]} />
        <instances.A position={[7.8, 0, 0]} />
      </group>
      <group position={[20, 0, 0]}>
        <mesh geometry={nodes.Part2.geometry} material={materials.Steel} position={[1.1, 0, 0]} />
        <mesh geometry={nodes.a2.geometry} material={materials.Glass} position={[1.1, 0, 0]} />
        <mesh geometry={nodes.Part.geometry} material={materials.Glass} position={[5.2, 0, 0]} />
        <mesh geometry={nodes.Bolt1.geometry} material={materials.Glass} position={[0.7, 0, 0]} />
        <mesh geometry={nodes.Part1.geometry} material={materials.Paint} position={[4.6, 0, 0]} />
      </group>
      <group position={[25, 0, 0]}>
        <instances.Part6 position={[9.1, 0, 0]} />
        <instances.Part6 position={[2.5, 0, 0]} />
        <instances.A4 position={[8.2, 0, 0]} />
        <instances.A2 position={[3.7, 0, 0]} />
        <mesh geometry={nodes.A129.geometry} material={materials.Glass} position={[4.3, 0, 0]} />
      </group>
      <group position={[30, 0, 0]}>
        <instances.Bolt6 position={[1.4, 0, 0]} />
        <mesh geometry={nodes.part31.geometry} material={materials.Steel} position={[9, 0, 0]} />
        <mesh geometry={nodes.A132.geometry} material={materials.Steel} position={[2.1, 0, 0]} />
        <instances.A position={[7.9, 0, 0]} />
        <instances.Bolt4 position={[6.9, 0, 0]} />
      </group>
      <group position={[35, 0, 0]}>
        <mesh geometry={nodes.bolt_335.geometry} material={materials.Steel} position={[4, 0, 0]} />
        <instances.Bolt4 position={[0.2, 0, 0]} />
        <instances.A8 position={[2.6, 0, 0]} />
        <instances.Bolt2 position={[5.3, 0, 0]} />
        <instances.A1 position={[9.2, 0, 0]} />
      </group>
      <group position={[40, 0, 0]}>
        <instances.Foo1 position={[0.5, 0, 0]} />
        <instances.Bolt8 position={[6.4, 0, 0]} />
        <instances.Bolt8 position={[1.6, 0, 0]} />
        <instances.A8 position={[2.3, 0, 0]} />
        <mesh geometry={nodes.a244.geometry} material={materials.Paint} position={[4.3, 0, 0]} />
      </group>
      <group position={[45, 0, 0]}>
        <mesh geometry={nodes.Bolt145.geometry} material={materials.Glass} position={[5.7, 0, 0]} />
        <mesh geometry={nodes.Bolt1.geometry} material={materials.Paint} position={[7.8, 0, 0]} />
        <instances.A position={[3.7, 0, 0]} />
        <mesh geometry={nodes.Bolt1.geometry} material={materials.Steel} position={[2.2, 0, 0]} />
        <mesh geometry={nodes.Part.geometry} material={materials.Steel} position={[4.6, 0, 0]} />
      </group>
      <group position={[50, 0, 0]}>
        <instances.Bolt8 position={[8, 0, 0]} />
        <instances.Bolt1 position={[0.8, 0, 0]} />
        <mesh geometry={nodes.a252.geometry} material={materials.Steel} position={[1.6, 0, 0]} />
        <instances.Bolt6 position={[2.5, 0, 0]} />
        <instances.A position={[8.6, 0, 0]} />
      </group>
      <group position={[55, 0, 0]}>
        <instances.A position={[3.7, 0, 0]} />
        <instances.Bolt3 position={[2.1, 0, 0]} />
        <instances.Foo1 position={[0.1, 0, 0]} />
        <mesh geometry={nodes.A1.geometry} material={materials.Steel} position={[9.7, 0, 0]} />
        <mesh geometry={nodes.part.geometry} material={materials.Steel} position={[2.6, 0, 0]} />
      </group>
      <mesh geometry={nodes.Part2.geometry} material={materials.Steel} position={[8.8, 0, 0]} />
      <instances.Bolt position={[1.1, 0, 0]} />
      <instances.Bolt1 position={[5.8, 0, 0]} />
      <instances.Bolt2 position={[0.4, 0, 0]} />
      <instances.Part1 position={[0.1, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/model.gltf')
