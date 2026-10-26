/*
golden 
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/model.gltf')
  return (
    <group {...props} dispose={null}>
      <group>
        <group name="g0">
          <mesh name="part" castShadow receiveShadow geometry={nodes.part.geometry} material={materials.Steel} position={[8.8, 0, 0]} userData={{ id: '1000' }} />
          <mesh name="Part1" castShadow receiveShadow geometry={nodes.Part1.geometry} material={materials.Paint} position={[1.1, 0, 0]} userData={{ id: '1001' }} />
          <mesh name="Part2" castShadow receiveShadow geometry={nodes.Part2.geometry} material={materials.Steel} position={[5.8, 0, 0]} userData={{ id: '1002' }} />
          <mesh name="Part1" castShadow receiveShadow geometry={nodes.Part1.geometry} material={materials.Glass} position={[0.4, 0, 0]} userData={{ id: '1003' }} />
          <mesh name="774" castShadow receiveShadow geometry={nodes['774'].geometry} material={materials.Steel} position={[0.1, 0, 0]} userData={{ id: '1004' }} />
        </group>
        <group name="g5" position={[5, 0, 0]}>
          <mesh name="Foo" castShadow receiveShadow geometry={nodes.Foo.geometry} material={materials.Paint} position={[2.3, 0, 0]} userData={{ id: '1005' }} />
          <mesh name="1001" castShadow receiveShadow geometry={nodes['1001'].geometry} material={materials.Paint} position={[1, 0, 0]} userData={{ id: '1006' }} />
          <mesh name="7" castShadow receiveShadow geometry={nodes['7'].geometry} material={materials.Glass} position={[9.8, 0, 0]} userData={{ id: '1007' }} />
          <mesh name="Bolt18" castShadow receiveShadow geometry={nodes.Bolt18.geometry} material={materials.Glass} position={[6.8, 0, 0]} userData={{ id: '1008' }} />
          <mesh name="A1" castShadow receiveShadow geometry={nodes.A1.geometry} material={materials.Glass} position={[4.5, 0, 0]} userData={{ id: '1009' }} />
        </group>
        <group name="g10" position={[10, 0, 0]}>
          <mesh name="Foo1" castShadow receiveShadow geometry={nodes.Foo1.geometry} material={materials.Steel} position={[8.4, 0, 0]} userData={{ id: '1010' }} />
          <mesh name="1001" castShadow receiveShadow geometry={nodes['1001'].geometry} material={materials.Paint} position={[8.4, 0, 0]} userData={{ id: '1011' }} />
          <mesh name="A1" castShadow receiveShadow geometry={nodes.A1.geometry} material={materials.Steel} position={[4.5, 0, 0]} userData={{ id: '1012' }} />
          <mesh name="a213" castShadow receiveShadow geometry={nodes.a213.geometry} material={materials.Steel} position={[4.4, 0, 0]} userData={{ id: '1013' }} />
          <mesh name="A114" castShadow receiveShadow geometry={nodes.A114.geometry} material={materials.Glass} position={[2.1, 0, 0]} userData={{ id: '1014' }} />
        </group>
        <group name="g15" position={[15, 0, 0]}>
          <mesh name="Foo1" castShadow receiveShadow geometry={nodes.Foo1.geometry} material={materials.Paint} position={[2.1, 0, 0]} userData={{ id: '1015' }} />
          <mesh name="Bolt116" castShadow receiveShadow geometry={nodes.Bolt116.geometry} material={materials.Paint} position={[2.9, 0, 0]} userData={{ id: '1016' }} />
          <mesh name="17" castShadow receiveShadow geometry={nodes['17'].geometry} material={materials.Steel} position={[4.2, 0, 0]} userData={{ id: '1017' }} />
          <mesh name="Bolt" castShadow receiveShadow geometry={nodes.Bolt.geometry} material={materials.Glass} position={[2.6, 0, 0]} userData={{ id: '1018' }} />
          <mesh name="1001" castShadow receiveShadow geometry={nodes['1001'].geometry} material={materials.Glass} position={[7.8, 0, 0]} userData={{ id: '1019' }} />
        </group>
        <group name="g20" position={[20, 0, 0]}>
          <mesh name="Part1" castShadow receiveShadow geometry={nodes.Part1.geometry} material={materials.Steel} position={[1.1, 0, 0]} userData={{ id: '1020' }} />
          <mesh name="a2" castShadow receiveShadow geometry={nodes.a2.geometry} material={materials.Glass} position={[1.1, 0, 0]} userData={{ id: '1021' }} />
          <mesh name="1001" castShadow receiveShadow geometry={nodes['1001'].geometry} material={materials.Glass} position={[5.2, 0, 0]} userData={{ id: '1022' }} />
          <mesh name="Part2" castShadow receiveShadow geometry={nodes.Part2.geometry} material={materials.Glass} position={[0.7, 0, 0]} userData={{ id: '1023' }} />
          <mesh name="Part" castShadow receiveShadow geometry={nodes.Part.geometry} material={materials.Paint} position={[4.6, 0, 0]} userData={{ id: '1024' }} />
        </group>
        <group name="g25" position={[25, 0, 0]}>
          <mesh name="part25" castShadow receiveShadow geometry={nodes.part25.geometry} material={materials.Paint} position={[9.1, 0, 0]} userData={{ id: '1025' }} />
          <mesh name="Part26" castShadow receiveShadow geometry={nodes.Part26.geometry} material={materials.Paint} position={[2.5, 0, 0]} userData={{ id: '1026' }} />
          <mesh name="a227" castShadow receiveShadow geometry={nodes.a227.geometry} material={materials.Steel} position={[8.2, 0, 0]} userData={{ id: '1027' }} />
          <mesh name="Foo1" castShadow receiveShadow geometry={nodes.Foo1.geometry} material={materials.Steel} position={[3.7, 0, 0]} userData={{ id: '1028' }} />
          <mesh name="A129" castShadow receiveShadow geometry={nodes.A129.geometry} material={materials.Glass} position={[4.3, 0, 0]} userData={{ id: '1029' }} />
        </group>
        <group name="g30" position={[30, 0, 0]}>
          <mesh name="Bolt1" castShadow receiveShadow geometry={nodes.Bolt1.geometry} material={materials.Glass} position={[1.4, 0, 0]} userData={{ id: '1030' }} />
          <mesh name="7731" castShadow receiveShadow geometry={nodes['7731'].geometry} material={materials.Steel} position={[9, 0, 0]} userData={{ id: '1031' }} />
          <mesh name="A132" castShadow receiveShadow geometry={nodes.A132.geometry} material={materials.Steel} position={[2.1, 0, 0]} userData={{ id: '1032' }} />
          <mesh name="Foo" castShadow receiveShadow geometry={nodes.Foo.geometry} material={materials.Glass} position={[7.9, 0, 0]} userData={{ id: '1033' }} />
          <mesh name="1001" castShadow receiveShadow geometry={nodes['1001'].geometry} material={materials.Glass} position={[6.9, 0, 0]} userData={{ id: '1034' }} />
        </group>
        <group name="g35" position={[35, 0, 0]}>
          <mesh name="Bolt135" castShadow receiveShadow geometry={nodes.Bolt135.geometry} material={materials.Steel} position={[4, 0, 0]} userData={{ id: '1035' }} />
          <mesh name="bolt_3" castShadow receiveShadow geometry={nodes.bolt_3.geometry} material={materials.Glass} position={[0.2, 0, 0]} userData={{ id: '1036' }} />
          <mesh name="A137" castShadow receiveShadow geometry={nodes.A137.geometry} material={materials.Steel} position={[2.6, 0, 0]} userData={{ id: '1037' }} />
          <mesh name="1002" castShadow receiveShadow geometry={nodes['1002'].geometry} material={materials.Glass} position={[5.3, 0, 0]} userData={{ id: '1038' }} />
          <mesh name="Part1" castShadow receiveShadow geometry={nodes.Part1.geometry} material={materials.Steel} position={[9.2, 0, 0]} userData={{ id: '1039' }} />
        </group>
        <group name="g40" position={[40, 0, 0]}>
          <mesh name="bolt_340" castShadow receiveShadow geometry={nodes.bolt_340.geometry} material={materials.Paint} position={[0.5, 0, 0]} userData={{ id: '1040' }} />
          <mesh name="Bolt1" castShadow receiveShadow geometry={nodes.Bolt1.geometry} material={materials.Glass} position={[6.4, 0, 0]} userData={{ id: '1041' }} />
          <mesh name="100242" castShadow receiveShadow geometry={nodes['100242'].geometry} material={materials.Glass} position={[1.6, 0, 0]} userData={{ id: '1042' }} />
          <mesh name="Foo1" castShadow receiveShadow geometry={nodes.Foo1.geometry} material={materials.Steel} position={[2.3, 0, 0]} userData={{ id: '1043' }} />
          <mesh name="A144" castShadow receiveShadow geometry={nodes.A144.geometry} material={materials.Paint} position={[4.3, 0, 0]} userData={{ id: '1044' }} />
        </group>
        <group name="g45" position={[45, 0, 0]}>
          <mesh name="Part245" castShadow receiveShadow geometry={nodes.Part245.geometry} material={materials.Glass} position={[5.7, 0, 0]} userData={{ id: '1045' }} />
          <mesh name="Bolt" castShadow receiveShadow geometry={nodes.Bolt.geometry} material={materials.Paint} position={[7.8, 0, 0]} userData={{ id: '1046' }} />
          <mesh name="A147" castShadow receiveShadow geometry={nodes.A147.geometry} material={materials.Glass} position={[3.7, 0, 0]} userData={{ id: '1047' }} />
          <mesh name="Bolt" castShadow receiveShadow geometry={nodes.Bolt.geometry} material={materials.Steel} position={[2.2, 0, 0]} userData={{ id: '1048' }} />
          <mesh name="1001" castShadow receiveShadow geometry={nodes['1001'].geometry} material={materials.Steel} position={[4.6, 0, 0]} userData={{ id: '1049' }} />
        </group>
        <group name="g50" position={[50, 0, 0]}>
          <mesh name="Part" castShadow receiveShadow geometry={nodes.Part.geometry} material={materials.Glass} position={[8, 0, 0]} userData={{ id: '1050' }} />
          <mesh name="bolt_3" castShadow receiveShadow geometry={nodes.bolt_3.geometry} material={materials.Steel} position={[0.8, 0, 0]} userData={{ id: '1051' }} />
          <mesh name="A152" castShadow receiveShadow geometry={nodes.A152.geometry} material={materials.Steel} position={[1.6, 0, 0]} userData={{ id: '1052' }} />
          <mesh name="Part2" castShadow receiveShadow geometry={nodes.Part2.geometry} material={materials.Glass} position={[2.5, 0, 0]} userData={{ id: '1053' }} />
          <mesh name="Bolt1" castShadow receiveShadow geometry={nodes.Bolt1.geometry} material={materials.Glass} position={[8.6, 0, 0]} userData={{ id: '1054' }} />
        </group>
        <group name="g55" position={[55, 0, 0]}>
          <mesh name="55" castShadow receiveShadow geometry={nodes['55'].geometry} material={materials.Glass} position={[3.7, 0, 0]} userData={{ id: '1055' }} />
          <mesh name="Foo56" castShadow receiveShadow geometry={nodes.Foo56.geometry} material={materials.Paint} position={[2.1, 0, 0]} userData={{ id: '1056' }} />
          <mesh name="Part1" castShadow receiveShadow geometry={nodes.Part1.geometry} material={materials.Paint} position={[0.1, 0, 0]} userData={{ id: '1057' }} />
          <mesh name="A1" castShadow receiveShadow geometry={nodes.A1.geometry} material={materials.Steel} position={[9.7, 0, 0]} userData={{ id: '1058' }} />
          <mesh name="77" castShadow receiveShadow geometry={nodes['77'].geometry} material={materials.Steel} position={[2.6, 0, 0]} userData={{ id: '1059' }} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/model.gltf')
