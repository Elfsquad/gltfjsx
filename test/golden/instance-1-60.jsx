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
        <instances.Part3 name="Part1" position={[5.5, 0, 0]} />
        <instances.Part3 name="Foo16" position={[7.7, 0, 0]} />
        <instances.A name="A7" position={[3.2, 0, 0]} />
        <mesh name="part" geometry={nodes.part.geometry} material={materials.Steel} position={[5.8, 0, 0]} />
        <instances.Part5 name="Part" position={[8.7, 0, 0]} />
      </group>
      <group name="g10" position={[10, 0, 0]}>
        <mesh name="Foo110" geometry={nodes.Foo110.geometry} material={materials.Glass} position={[3, 0, 0]} />
        <mesh name="a2" geometry={nodes.a2.geometry} material={materials.Glass} position={[9.2, 0, 0]} />
        <mesh name="part12" geometry={nodes.part12.geometry} material={materials.Glass} position={[8.7, 0, 0]} />
        <mesh name="bolt_3" geometry={nodes.bolt_3.geometry} material={materials.Glass} position={[7, 0, 0]} />
        <instances.A2 name="a214" position={[9.8, 0, 0]} />
      </group>
      <group name="g15" position={[15, 0, 0]}>
        <instances.Part1 name="part15" position={[3.2, 0, 0]} />
        <mesh name="bolt_316" geometry={nodes.bolt_316.geometry} material={materials.Paint} position={[8.1, 0, 0]} />
        <instances.Part7 name="part17" position={[8.9, 0, 0]} />
        <instances.Part2 name="Foo" position={[3.2, 0, 0]} />
        <instances.Part5 name="Part19" position={[6.8, 0, 0]} />
      </group>
      <group name="g20" position={[20, 0, 0]}>
        <instances.Bolt3 name="bolt_3" position={[2.1, 0, 0]} />
        <instances.Part3 name="a2" position={[8.7, 0, 0]} />
        <mesh name="Part" geometry={nodes.Part.geometry} material={materials.Steel} position={[3.3, 0, 0]} />
        <mesh name="part23" geometry={nodes.part23.geometry} material={materials.Glass} position={[8.7, 0, 0]} />
        <mesh name="Part124" geometry={nodes.Part124.geometry} material={materials.Glass} position={[1.5, 0, 0]} />
      </group>
      <group name="g25" position={[25, 0, 0]}>
        <mesh name="Part2" geometry={nodes.Part2.geometry} material={materials.Paint} position={[3.1, 0, 0]} />
        <mesh name="Foo" geometry={nodes.Foo.geometry} material={materials.Glass} position={[2.3, 0, 0]} />
        <instances.Part12 name="Part127" position={[9.3, 0, 0]} />
        <instances.A name="Part228" position={[0.4, 0, 0]} />
        <instances.Part13 name="Part129" position={[8.2, 0, 0]} />
      </group>
      <group name="g30" position={[30, 0, 0]}>
        <instances.Bolt4 name="bolt_330" position={[6.9, 0, 0]} />
        <mesh name="bolt_3" geometry={nodes.bolt_3.geometry} material={materials.Steel} position={[7.9, 0, 0]} />
        <instances.Foo3 name="Foo" position={[0.3, 0, 0]} />
        <mesh name="A1" geometry={nodes.A1.geometry} material={materials.Paint} position={[3.6, 0, 0]} />
        <mesh name="Part" geometry={nodes.Part.geometry} material={materials.Paint} position={[5.4, 0, 0]} />
      </group>
      <group name="g35" position={[35, 0, 0]}>
        <instances.Part15 name="part35" position={[8.1, 0, 0]} />
        <mesh name="Part2" geometry={nodes.Part2.geometry} material={materials.Glass} position={[2.9, 0, 0]} />
        <mesh name="Part37" geometry={nodes.Part37.geometry} material={materials.Glass} position={[1.7, 0, 0]} />
        <instances.Bolt3 name="bolt_338" position={[7.8, 0, 0]} />
        <instances.Part2 name="a2" position={[0.1, 0, 0]} />
      </group>
      <group name="g40" position={[40, 0, 0]}>
        <instances.Part7 name="Bolt" position={[5.2, 0, 0]} />
        <mesh name="part41" geometry={nodes.part41.geometry} material={materials.Glass} position={[9.7, 0, 0]} />
        <instances.Part19 name="Part42" position={[6.2, 0, 0]} />
        <mesh name="Foo" geometry={nodes.Foo.geometry} material={materials.Steel} position={[0.2, 0, 0]} />
        <instances.Foo3 name="Bolt" position={[6.5, 0, 0]} />
      </group>
      <group name="g45" position={[45, 0, 0]}>
        <instances.Part13 name="Foo1" position={[0.2, 0, 0]} />
        <mesh name="Part" geometry={nodes.Part.geometry} material={materials.Glass} position={[5.4, 0, 0]} />
        <instances.Part15 name="part47" position={[6.8, 0, 0]} />
        <instances.Part12 name="bolt_3" position={[6.9, 0, 0]} />
        <mesh name="A49" geometry={nodes.A49.geometry} material={materials.Paint} position={[4, 0, 0]} />
      </group>
      <group name="g50" position={[50, 0, 0]}>
        <mesh name="A1" geometry={nodes.A1.geometry} material={materials.Steel} position={[1, 0, 0]} />
        <instances.A2 name="Part" position={[9.6, 0, 0]} />
        <instances.Bolt4 name="A1" position={[4.7, 0, 0]} />
        <instances.Part15 name="Part153" position={[9.4, 0, 0]} />
        <instances.Bolt name="Foo" position={[1.6, 0, 0]} />
      </group>
      <group name="g55" position={[55, 0, 0]}>
        <instances.A2 name="Part255" position={[4.9, 0, 0]} />
        <instances.Bolt4 name="Foo56" />
        <instances.Bolt name="A" position={[1.8, 0, 0]} />
        <mesh name="Foo" geometry={nodes.Foo.geometry} material={materials.Glass} position={[4.1, 0, 0]} />
        <instances.Part19 name="A" position={[3.9, 0, 0]} />
      </group>
      <instances.Bolt name="bolt_3" position={[9.7, 0, 0]} />
      <mesh name="Foo11" geometry={nodes.Foo11.geometry} material={materials.Paint} position={[9.9, 0, 0]} />
      <mesh name="part2" geometry={nodes.part2.geometry} material={materials.Paint} position={[2.5, 0, 0]} />
      <instances.Part1 name="Part3" position={[7.7, 0, 0]} />
      <instances.Part2 name="Part4" position={[5.9, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/model.gltf')
