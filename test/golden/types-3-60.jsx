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
    A12: THREE.Mesh
    Bolt: THREE.Mesh
    bolt_314: THREE.Mesh
    Foo: THREE.Mesh
    part: THREE.Mesh
    a2: THREE.Mesh
    A18: THREE.Mesh
    Foo19: THREE.Mesh
    A120: THREE.Mesh
    A121: THREE.Mesh
    a2: THREE.Mesh
    Foo: THREE.Mesh
    part24: THREE.Mesh
    bolt_3: THREE.Mesh
    a226: THREE.Mesh
    bolt_327: THREE.Mesh
    A28: THREE.Mesh
    Part29: THREE.Mesh
    A: THREE.Mesh
    Part231: THREE.Mesh
    Part: THREE.Mesh
    A1: THREE.Mesh
    Part1: THREE.Mesh
    a235: THREE.Mesh
    A36: THREE.Mesh
    Part37: THREE.Mesh
    bolt_3: THREE.Mesh
    Foo39: THREE.Mesh
    Part140: THREE.Mesh
    A141: THREE.Mesh
    Part1: THREE.Mesh
    Bolt1: THREE.Mesh
    Bolt: THREE.Mesh
    Foo1: THREE.Mesh
    Part146: THREE.Mesh
    a247: THREE.Mesh
    Part148: THREE.Mesh
    Part: THREE.Mesh
    Foo1: THREE.Mesh
    Foo: THREE.Mesh
    A1: THREE.Mesh
    a2: THREE.Mesh
    bolt_354: THREE.Mesh
    Foo155: THREE.Mesh
    part56: THREE.Mesh
    Foo: THREE.Mesh
    Part58: THREE.Mesh
    A59: THREE.Mesh
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
      Part: nodes.part1,
      Bolt1: nodes.bolt_34,
      A: nodes.A5,
      Foo2: nodes.Foo16,
      A1: nodes.a2,
      A2: nodes.A12,
      Part2: nodes.part,
      A3: nodes.a2,
      A4: nodes.A18,
      A5: nodes.A120,
      A8: nodes.A28,
      Part3: nodes.Part29,
      Part5: nodes.Part1,
      Bolt3: nodes.bolt_3,
      Part9: nodes.Part,
      Foo11: nodes.Foo,
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
        <instances.Foo2 position={[0.1, 0, 0]} />
        <mesh geometry={nodes.Foo.geometry} material={materials.Glass} position={[7.9, 0, 0]} />
        <mesh geometry={nodes.Part8.geometry} material={materials.Paint} position={[5.3, 0, 0]} />
        <mesh geometry={nodes.Bolt19.geometry} material={materials.Paint} position={[5.7, 0, 0]} />
      </group>
      <group position={[10, 0, 0]}>
        <mesh geometry={nodes.Foo10.geometry} material={materials.Glass} position={[6.9, 0, 0]} />
        <instances.A1 position={[7.1, 0, 0]} />
        <instances.A2 position={[0.7, 0, 0]} />
        <instances.Bolt1 position={[2.9, 0, 0]} />
        <instances.Part position={[7.6, 0, 0]} />
      </group>
      <group position={[15, 0, 0]}>
        <mesh geometry={nodes.Foo.geometry} material={materials.Glass} position={[7.7, 0, 0]} />
        <instances.Part2 position={[7.7, 0, 0]} />
        <instances.A3 position={[5.8, 0, 0]} />
        <instances.A4 position={[6.3, 0, 0]} />
        <mesh geometry={nodes.Foo19.geometry} material={materials.Paint} position={[6.3, 0, 0]} />
      </group>
      <group position={[20, 0, 0]}>
        <instances.A5 position={[8.5, 0, 0]} />
        <instances.Part2 position={[6.7, 0, 0]} />
        <mesh geometry={nodes.a2.geometry} material={materials.Steel} position={[1.8, 0, 0]} />
        <mesh geometry={nodes.Foo.geometry} material={materials.Steel} position={[8.3, 0, 0]} />
        <instances.A2 position={[1.3, 0, 0]} />
      </group>
      <group position={[25, 0, 0]}>
        <instances.A3 position={[3.2, 0, 0]} />
        <mesh geometry={nodes.a226.geometry} material={materials.Steel} position={[3.8, 0, 0]} />
        <instances.Part position={[6.7, 0, 0]} />
        <instances.A8 position={[4.5, 0, 0]} />
        <instances.Part3 position={[1.8, 0, 0]} />
      </group>
      <group position={[30, 0, 0]}>
        <mesh geometry={nodes.A.geometry} material={materials.Glass} position={[3.9, 0, 0]} />
        <instances.Part2 position={[1.3, 0, 0]} />
        <mesh geometry={nodes.Part.geometry} material={materials.Steel} position={[4.6, 0, 0]} />
        <instances.Part3 position={[2.9, 0, 0]} />
        <instances.Part5 position={[0.1, 0, 0]} />
      </group>
      <group position={[35, 0, 0]}>
        <instances.Foo2 position={[5.7, 0, 0]} />
        <instances.Foo2 position={[9.8, 0, 0]} />
        <instances.Part5 position={[6.8, 0, 0]} />
        <instances.Bolt3 position={[6.3, 0, 0]} />
        <instances.A4 position={[5.8, 0, 0]} />
      </group>
      <group position={[40, 0, 0]}>
        <mesh geometry={nodes.Part140.geometry} material={materials.Paint} position={[5.5, 0, 0]} />
        <mesh geometry={nodes.A141.geometry} material={materials.Paint} position={[8.1, 0, 0]} />
        <mesh geometry={nodes.Part1.geometry} material={materials.Steel} position={[7.3, 0, 0]} />
        <mesh geometry={nodes.Bolt1.geometry} material={materials.Glass} position={[4.5, 0, 0]} />
        <instances.A position={[2.3, 0, 0]} />
      </group>
      <group position={[45, 0, 0]}>
        <mesh geometry={nodes.Foo1.geometry} material={materials.Paint} position={[8.8, 0, 0]} />
        <instances.Bolt3 position={[2, 0, 0]} />
        <instances.A1 position={[7.2, 0, 0]} />
        <mesh geometry={nodes.Part148.geometry} material={materials.Glass} position={[6.3, 0, 0]} />
        <instances.Part9 position={[2.3, 0, 0]} />
      </group>
      <group position={[50, 0, 0]}>
        <instances.A4 position={[4.1, 0, 0]} />
        <mesh geometry={nodes.Foo.geometry} material={materials.Steel} position={[5.3, 0, 0]} />
        <mesh geometry={nodes.A1.geometry} material={materials.Steel} position={[6.1, 0, 0]} />
        <instances.Part9 position={[8.4, 0, 0]} />
        <instances.A8 position={[5.8, 0, 0]} />
      </group>
      <group position={[55, 0, 0]}>
        <mesh geometry={nodes.Foo155.geometry} material={materials.Glass} position={[5.6, 0, 0]} />
        <instances.A5 position={[7.5, 0, 0]} />
        <instances.Foo11 position={[1.6, 0, 0]} />
        <instances.Part2 position={[1.2, 0, 0]} />
        <instances.Foo11 position={[7.3, 0, 0]} />
      </group>
      <mesh geometry={nodes.Bolt10.geometry} material={materials.Steel} position={[7.6, 0, 0]} />
      <instances.Part position={[5.5, 0, 0]} />
      <mesh geometry={nodes.Foo12.geometry} material={materials.Steel} position={[7.9, 0, 0]} />
      <mesh geometry={nodes.Foo13.geometry} material={materials.Steel} position={[6.7, 0, 0]} />
      <instances.Bolt1 position={[8.8, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/model.gltf')
