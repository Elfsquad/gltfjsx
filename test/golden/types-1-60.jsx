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
    part12: THREE.Mesh
    bolt_3: THREE.Mesh
    a214: THREE.Mesh
    part15: THREE.Mesh
    bolt_316: THREE.Mesh
    part17: THREE.Mesh
    Foo: THREE.Mesh
    Part19: THREE.Mesh
    bolt_3: THREE.Mesh
    a2: THREE.Mesh
    Part: THREE.Mesh
    part23: THREE.Mesh
    Part124: THREE.Mesh
    Part2: THREE.Mesh
    Foo: THREE.Mesh
    Part127: THREE.Mesh
    Part228: THREE.Mesh
    Part129: THREE.Mesh
    bolt_330: THREE.Mesh
    bolt_3: THREE.Mesh
    Foo: THREE.Mesh
    A1: THREE.Mesh
    Part: THREE.Mesh
    part35: THREE.Mesh
    Part2: THREE.Mesh
    Part37: THREE.Mesh
    bolt_338: THREE.Mesh
    a2: THREE.Mesh
    Bolt: THREE.Mesh
    part41: THREE.Mesh
    Part42: THREE.Mesh
    Foo: THREE.Mesh
    Bolt: THREE.Mesh
    Foo1: THREE.Mesh
    Part: THREE.Mesh
    part47: THREE.Mesh
    bolt_3: THREE.Mesh
    A49: THREE.Mesh
    A1: THREE.Mesh
    Part: THREE.Mesh
    A1: THREE.Mesh
    Part153: THREE.Mesh
    Foo: THREE.Mesh
    Part255: THREE.Mesh
    Foo56: THREE.Mesh
    A: THREE.Mesh
    Foo: THREE.Mesh
    A: THREE.Mesh
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
      Bolt: nodes.bolt_3,
      Part1: nodes.Part3,
      Part2: nodes.Part4,
      Part3: nodes.Part1,
      A: nodes.A7,
      Part5: nodes.Part,
      A2: nodes.a214,
      Part7: nodes.part17,
      Bolt3: nodes.bolt_3,
      Part12: nodes.Part127,
      Part13: nodes.Part129,
      Bolt4: nodes.bolt_330,
      Foo3: nodes.Foo,
      Part15: nodes.part35,
      Part19: nodes.Part42,
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
        <instances.Part3 position={[5.5, 0, 0]} />
        <instances.Part3 position={[7.7, 0, 0]} />
        <instances.A position={[3.2, 0, 0]} />
        <mesh geometry={nodes.part.geometry} material={materials.Steel} position={[5.8, 0, 0]} />
        <instances.Part5 position={[8.7, 0, 0]} />
      </group>
      <group position={[10, 0, 0]}>
        <mesh geometry={nodes.Foo110.geometry} material={materials.Glass} position={[3, 0, 0]} />
        <mesh geometry={nodes.a2.geometry} material={materials.Glass} position={[9.2, 0, 0]} />
        <mesh geometry={nodes.part12.geometry} material={materials.Glass} position={[8.7, 0, 0]} />
        <mesh geometry={nodes.bolt_3.geometry} material={materials.Glass} position={[7, 0, 0]} />
        <instances.A2 position={[9.8, 0, 0]} />
      </group>
      <group position={[15, 0, 0]}>
        <instances.Part1 position={[3.2, 0, 0]} />
        <mesh geometry={nodes.bolt_316.geometry} material={materials.Paint} position={[8.1, 0, 0]} />
        <instances.Part7 position={[8.9, 0, 0]} />
        <instances.Part2 position={[3.2, 0, 0]} />
        <instances.Part5 position={[6.8, 0, 0]} />
      </group>
      <group position={[20, 0, 0]}>
        <instances.Bolt3 position={[2.1, 0, 0]} />
        <instances.Part3 position={[8.7, 0, 0]} />
        <mesh geometry={nodes.Part.geometry} material={materials.Steel} position={[3.3, 0, 0]} />
        <mesh geometry={nodes.part23.geometry} material={materials.Glass} position={[8.7, 0, 0]} />
        <mesh geometry={nodes.Part124.geometry} material={materials.Glass} position={[1.5, 0, 0]} />
      </group>
      <group position={[25, 0, 0]}>
        <mesh geometry={nodes.Part2.geometry} material={materials.Paint} position={[3.1, 0, 0]} />
        <mesh geometry={nodes.Foo.geometry} material={materials.Glass} position={[2.3, 0, 0]} />
        <instances.Part12 position={[9.3, 0, 0]} />
        <instances.A position={[0.4, 0, 0]} />
        <instances.Part13 position={[8.2, 0, 0]} />
      </group>
      <group position={[30, 0, 0]}>
        <instances.Bolt4 position={[6.9, 0, 0]} />
        <mesh geometry={nodes.bolt_3.geometry} material={materials.Steel} position={[7.9, 0, 0]} />
        <instances.Foo3 position={[0.3, 0, 0]} />
        <mesh geometry={nodes.A1.geometry} material={materials.Paint} position={[3.6, 0, 0]} />
        <mesh geometry={nodes.Part.geometry} material={materials.Paint} position={[5.4, 0, 0]} />
      </group>
      <group position={[35, 0, 0]}>
        <instances.Part15 position={[8.1, 0, 0]} />
        <mesh geometry={nodes.Part2.geometry} material={materials.Glass} position={[2.9, 0, 0]} />
        <mesh geometry={nodes.Part37.geometry} material={materials.Glass} position={[1.7, 0, 0]} />
        <instances.Bolt3 position={[7.8, 0, 0]} />
        <instances.Part2 position={[0.1, 0, 0]} />
      </group>
      <group position={[40, 0, 0]}>
        <instances.Part7 position={[5.2, 0, 0]} />
        <mesh geometry={nodes.part41.geometry} material={materials.Glass} position={[9.7, 0, 0]} />
        <instances.Part19 position={[6.2, 0, 0]} />
        <mesh geometry={nodes.Foo.geometry} material={materials.Steel} position={[0.2, 0, 0]} />
        <instances.Foo3 position={[6.5, 0, 0]} />
      </group>
      <group position={[45, 0, 0]}>
        <instances.Part13 position={[0.2, 0, 0]} />
        <mesh geometry={nodes.Part.geometry} material={materials.Glass} position={[5.4, 0, 0]} />
        <instances.Part15 position={[6.8, 0, 0]} />
        <instances.Part12 position={[6.9, 0, 0]} />
        <mesh geometry={nodes.A49.geometry} material={materials.Paint} position={[4, 0, 0]} />
      </group>
      <group position={[50, 0, 0]}>
        <mesh geometry={nodes.A1.geometry} material={materials.Steel} position={[1, 0, 0]} />
        <instances.A2 position={[9.6, 0, 0]} />
        <instances.Bolt4 position={[4.7, 0, 0]} />
        <instances.Part15 position={[9.4, 0, 0]} />
        <instances.Bolt position={[1.6, 0, 0]} />
      </group>
      <group position={[55, 0, 0]}>
        <instances.A2 position={[4.9, 0, 0]} />
        <instances.Bolt4 />
        <instances.Bolt position={[1.8, 0, 0]} />
        <mesh geometry={nodes.Foo.geometry} material={materials.Glass} position={[4.1, 0, 0]} />
        <instances.Part19 position={[3.9, 0, 0]} />
      </group>
      <instances.Bolt position={[9.7, 0, 0]} />
      <mesh geometry={nodes.Foo11.geometry} material={materials.Paint} position={[9.9, 0, 0]} />
      <mesh geometry={nodes.part2.geometry} material={materials.Paint} position={[2.5, 0, 0]} />
      <instances.Part1 position={[7.7, 0, 0]} />
      <instances.Part2 position={[5.9, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/model.gltf')
