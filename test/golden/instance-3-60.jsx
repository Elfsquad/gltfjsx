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
        <instances.Foo2 name="Foo16" position={[0.1, 0, 0]} />
        <mesh name="Foo" geometry={nodes.Foo.geometry} material={materials.Glass} position={[7.9, 0, 0]} />
        <mesh name="Part8" geometry={nodes.Part8.geometry} material={materials.Paint} position={[5.3, 0, 0]} />
        <mesh name="Bolt19" geometry={nodes.Bolt19.geometry} material={materials.Paint} position={[5.7, 0, 0]} />
      </group>
      <group name="g10" position={[10, 0, 0]}>
        <mesh name="Foo10" geometry={nodes.Foo10.geometry} material={materials.Glass} position={[6.9, 0, 0]} />
        <instances.A1 name="a2" position={[7.1, 0, 0]} />
        <instances.A2 name="A12" position={[0.7, 0, 0]} />
        <instances.Bolt1 name="Bolt" position={[2.9, 0, 0]} />
        <instances.Part name="bolt_314" position={[7.6, 0, 0]} />
      </group>
      <group name="g15" position={[15, 0, 0]}>
        <mesh name="Foo" geometry={nodes.Foo.geometry} material={materials.Glass} position={[7.7, 0, 0]} />
        <instances.Part2 name="part" position={[7.7, 0, 0]} />
        <instances.A3 name="a2" position={[5.8, 0, 0]} />
        <instances.A4 name="A18" position={[6.3, 0, 0]} />
        <mesh name="Foo19" geometry={nodes.Foo19.geometry} material={materials.Paint} position={[6.3, 0, 0]} />
      </group>
      <group name="g20" position={[20, 0, 0]}>
        <instances.A5 name="A120" position={[8.5, 0, 0]} />
        <instances.Part2 name="A121" position={[6.7, 0, 0]} />
        <mesh name="a2" geometry={nodes.a2.geometry} material={materials.Steel} position={[1.8, 0, 0]} />
        <mesh name="Foo" geometry={nodes.Foo.geometry} material={materials.Steel} position={[8.3, 0, 0]} />
        <instances.A2 name="part24" position={[1.3, 0, 0]} />
      </group>
      <group name="g25" position={[25, 0, 0]}>
        <instances.A3 name="bolt_3" position={[3.2, 0, 0]} />
        <mesh name="a226" geometry={nodes.a226.geometry} material={materials.Steel} position={[3.8, 0, 0]} />
        <instances.Part name="bolt_327" position={[6.7, 0, 0]} />
        <instances.A8 name="A28" position={[4.5, 0, 0]} />
        <instances.Part3 name="Part29" position={[1.8, 0, 0]} />
      </group>
      <group name="g30" position={[30, 0, 0]}>
        <mesh name="A" geometry={nodes.A.geometry} material={materials.Glass} position={[3.9, 0, 0]} />
        <instances.Part2 name="Part231" position={[1.3, 0, 0]} />
        <mesh name="Part" geometry={nodes.Part.geometry} material={materials.Steel} position={[4.6, 0, 0]} />
        <instances.Part3 name="A1" position={[2.9, 0, 0]} />
        <instances.Part5 name="Part1" position={[0.1, 0, 0]} />
      </group>
      <group name="g35" position={[35, 0, 0]}>
        <instances.Foo2 name="a235" position={[5.7, 0, 0]} />
        <instances.Foo2 name="A36" position={[9.8, 0, 0]} />
        <instances.Part5 name="Part37" position={[6.8, 0, 0]} />
        <instances.Bolt3 name="bolt_3" position={[6.3, 0, 0]} />
        <instances.A4 name="Foo39" position={[5.8, 0, 0]} />
      </group>
      <group name="g40" position={[40, 0, 0]}>
        <mesh name="Part140" geometry={nodes.Part140.geometry} material={materials.Paint} position={[5.5, 0, 0]} />
        <mesh name="A141" geometry={nodes.A141.geometry} material={materials.Paint} position={[8.1, 0, 0]} />
        <mesh name="Part1" geometry={nodes.Part1.geometry} material={materials.Steel} position={[7.3, 0, 0]} />
        <mesh name="Bolt1" geometry={nodes.Bolt1.geometry} material={materials.Glass} position={[4.5, 0, 0]} />
        <instances.A name="Bolt" position={[2.3, 0, 0]} />
      </group>
      <group name="g45" position={[45, 0, 0]}>
        <mesh name="Foo1" geometry={nodes.Foo1.geometry} material={materials.Paint} position={[8.8, 0, 0]} />
        <instances.Bolt3 name="Part146" position={[2, 0, 0]} />
        <instances.A1 name="a247" position={[7.2, 0, 0]} />
        <mesh name="Part148" geometry={nodes.Part148.geometry} material={materials.Glass} position={[6.3, 0, 0]} />
        <instances.Part9 name="Part" position={[2.3, 0, 0]} />
      </group>
      <group name="g50" position={[50, 0, 0]}>
        <instances.A4 name="Foo1" position={[4.1, 0, 0]} />
        <mesh name="Foo" geometry={nodes.Foo.geometry} material={materials.Steel} position={[5.3, 0, 0]} />
        <mesh name="A1" geometry={nodes.A1.geometry} material={materials.Steel} position={[6.1, 0, 0]} />
        <instances.Part9 name="a2" position={[8.4, 0, 0]} />
        <instances.A8 name="bolt_354" position={[5.8, 0, 0]} />
      </group>
      <group name="g55" position={[55, 0, 0]}>
        <mesh name="Foo155" geometry={nodes.Foo155.geometry} material={materials.Glass} position={[5.6, 0, 0]} />
        <instances.A5 name="part56" position={[7.5, 0, 0]} />
        <instances.Foo11 name="Foo" position={[1.6, 0, 0]} />
        <instances.Part2 name="Part58" position={[1.2, 0, 0]} />
        <instances.Foo11 name="A59" position={[7.3, 0, 0]} />
      </group>
      <mesh name="Bolt10" geometry={nodes.Bolt10.geometry} material={materials.Steel} position={[7.6, 0, 0]} />
      <instances.Part name="part1" position={[5.5, 0, 0]} />
      <mesh name="Foo12" geometry={nodes.Foo12.geometry} material={materials.Steel} position={[7.9, 0, 0]} />
      <mesh name="Foo13" geometry={nodes.Foo13.geometry} material={materials.Steel} position={[6.7, 0, 0]} />
      <instances.Bolt1 name="bolt_34" position={[8.8, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/model.gltf')
