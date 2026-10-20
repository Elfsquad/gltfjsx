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
          <mesh name="Bolt1" castShadow receiveShadow geometry={nodes.Bolt1.geometry} material={materials.Steel} position={[9.7, 0, 0]} userData={{ id: '1000' }} />
          <mesh name="Foo11" castShadow receiveShadow geometry={nodes.Foo11.geometry} material={materials.Paint} position={[9.9, 0, 0]} userData={{ id: '1001' }} />
          <mesh name="772" castShadow receiveShadow geometry={nodes['772'].geometry} material={materials.Paint} position={[2.5, 0, 0]} userData={{ id: '1002' }} />
          <mesh name="10023" castShadow receiveShadow geometry={nodes['10023'].geometry} material={materials.Paint} position={[7.7, 0, 0]} userData={{ id: '1003' }} />
          <mesh name="10014" castShadow receiveShadow geometry={nodes['10014'].geometry} material={materials.Steel} position={[5.9, 0, 0]} userData={{ id: '1004' }} />
        </group>
        <group name="g5" position={[5, 0, 0]}>
          <mesh name="Part" castShadow receiveShadow geometry={nodes.Part.geometry} material={materials.Steel} position={[5.5, 0, 0]} userData={{ id: '1005' }} />
          <mesh name="Foo16" castShadow receiveShadow geometry={nodes.Foo16.geometry} material={materials.Steel} position={[7.7, 0, 0]} userData={{ id: '1006' }} />
          <mesh name="7" castShadow receiveShadow geometry={nodes['7'].geometry} material={materials.Steel} position={[3.2, 0, 0]} userData={{ id: '1007' }} />
          <mesh name="77" castShadow receiveShadow geometry={nodes['77'].geometry} material={materials.Steel} position={[5.8, 0, 0]} userData={{ id: '1008' }} />
          <mesh name="1001" castShadow receiveShadow geometry={nodes['1001'].geometry} material={materials.Steel} position={[8.7, 0, 0]} userData={{ id: '1009' }} />
        </group>
        <group name="g10" position={[10, 0, 0]}>
          <mesh name="Foo110" castShadow receiveShadow geometry={nodes.Foo110.geometry} material={materials.Glass} position={[3, 0, 0]} userData={{ id: '1010' }} />
          <mesh name="A1" castShadow receiveShadow geometry={nodes.A1.geometry} material={materials.Glass} position={[9.2, 0, 0]} userData={{ id: '1011' }} />
          <mesh name="100212" castShadow receiveShadow geometry={nodes['100212'].geometry} material={materials.Glass} position={[8.7, 0, 0]} userData={{ id: '1012' }} />
          <mesh name="Bolt1" castShadow receiveShadow geometry={nodes.Bolt1.geometry} material={materials.Glass} position={[7, 0, 0]} userData={{ id: '1013' }} />
          <mesh name="a214" castShadow receiveShadow geometry={nodes.a214.geometry} material={materials.Glass} position={[9.8, 0, 0]} userData={{ id: '1014' }} />
        </group>
        <group name="g15" position={[15, 0, 0]}>
          <mesh name="100215" castShadow receiveShadow geometry={nodes['100215'].geometry} material={materials.Paint} position={[3.2, 0, 0]} userData={{ id: '1015' }} />
          <mesh name="Bolt116" castShadow receiveShadow geometry={nodes.Bolt116.geometry} material={materials.Paint} position={[8.1, 0, 0]} userData={{ id: '1016' }} />
          <mesh name="7717" castShadow receiveShadow geometry={nodes['7717'].geometry} material={materials.Steel} position={[8.9, 0, 0]} userData={{ id: '1017' }} />
          <mesh name="Foo" castShadow receiveShadow geometry={nodes.Foo.geometry} material={materials.Steel} position={[3.2, 0, 0]} userData={{ id: '1018' }} />
          <mesh name="100219" castShadow receiveShadow geometry={nodes['100219'].geometry} material={materials.Steel} position={[6.8, 0, 0]} userData={{ id: '1019' }} />
        </group>
        <group name="g20" position={[20, 0, 0]}>
          <mesh name="Bolt1" castShadow receiveShadow geometry={nodes.Bolt1.geometry} material={materials.Steel} position={[2.1, 0, 0]} userData={{ id: '1020' }} />
          <mesh name="a2" castShadow receiveShadow geometry={nodes.a2.geometry} material={materials.Steel} position={[8.7, 0, 0]} userData={{ id: '1021' }} />
          <mesh name="1001" castShadow receiveShadow geometry={nodes['1001'].geometry} material={materials.Steel} position={[3.3, 0, 0]} userData={{ id: '1022' }} />
          <mesh name="100223" castShadow receiveShadow geometry={nodes['100223'].geometry} material={materials.Glass} position={[8.7, 0, 0]} userData={{ id: '1023' }} />
          <mesh name="Part24" castShadow receiveShadow geometry={nodes.Part24.geometry} material={materials.Glass} position={[1.5, 0, 0]} userData={{ id: '1024' }} />
        </group>
        <group name="g25" position={[25, 0, 0]}>
          <mesh name="part" castShadow receiveShadow geometry={nodes.part.geometry} material={materials.Paint} position={[3.1, 0, 0]} userData={{ id: '1025' }} />
          <mesh name="Foo" castShadow receiveShadow geometry={nodes.Foo.geometry} material={materials.Glass} position={[2.3, 0, 0]} userData={{ id: '1026' }} />
          <mesh name="Part27" castShadow receiveShadow geometry={nodes.Part27.geometry} material={materials.Steel} position={[9.3, 0, 0]} userData={{ id: '1027' }} />
          <mesh name="Part128" castShadow receiveShadow geometry={nodes.Part128.geometry} material={materials.Steel} position={[0.4, 0, 0]} userData={{ id: '1028' }} />
          <mesh name="Part29" castShadow receiveShadow geometry={nodes.Part29.geometry} material={materials.Paint} position={[8.2, 0, 0]} userData={{ id: '1029' }} />
        </group>
        <group name="g30" position={[30, 0, 0]}>
          <mesh name="Bolt130" castShadow receiveShadow geometry={nodes.Bolt130.geometry} material={materials.Glass} position={[6.9, 0, 0]} userData={{ id: '1030' }} />
          <mesh name="Bolt1" castShadow receiveShadow geometry={nodes.Bolt1.geometry} material={materials.Steel} position={[7.9, 0, 0]} userData={{ id: '1031' }} />
          <mesh name="Foo" castShadow receiveShadow geometry={nodes.Foo.geometry} material={materials.Steel} position={[0.3, 0, 0]} userData={{ id: '1032' }} />
          <mesh name="A" castShadow receiveShadow geometry={nodes.A.geometry} material={materials.Paint} position={[3.6, 0, 0]} userData={{ id: '1033' }} />
          <mesh name="1001" castShadow receiveShadow geometry={nodes['1001'].geometry} material={materials.Paint} position={[5.4, 0, 0]} userData={{ id: '1034' }} />
        </group>
        <group name="g35" position={[35, 0, 0]}>
          <mesh name="100235" castShadow receiveShadow geometry={nodes['100235'].geometry} material={materials.Paint} position={[8.1, 0, 0]} userData={{ id: '1035' }} />
          <mesh name="part" castShadow receiveShadow geometry={nodes.part.geometry} material={materials.Glass} position={[2.9, 0, 0]} userData={{ id: '1036' }} />
          <mesh name="100237" castShadow receiveShadow geometry={nodes['100237'].geometry} material={materials.Glass} position={[1.7, 0, 0]} userData={{ id: '1037' }} />
          <mesh name="Bolt138" castShadow receiveShadow geometry={nodes.Bolt138.geometry} material={materials.Steel} position={[7.8, 0, 0]} userData={{ id: '1038' }} />
          <mesh name="a2" castShadow receiveShadow geometry={nodes.a2.geometry} material={materials.Steel} position={[0.1, 0, 0]} userData={{ id: '1039' }} />
        </group>
        <group name="g40" position={[40, 0, 0]}>
          <mesh name="Part2" castShadow receiveShadow geometry={nodes.Part2.geometry} material={materials.Steel} position={[5.2, 0, 0]} userData={{ id: '1040' }} />
          <mesh name="7741" castShadow receiveShadow geometry={nodes['7741'].geometry} material={materials.Glass} position={[9.7, 0, 0]} userData={{ id: '1041' }} />
          <mesh name="100142" castShadow receiveShadow geometry={nodes['100142'].geometry} material={materials.Paint} position={[6.2, 0, 0]} userData={{ id: '1042' }} />
          <mesh name="Foo" castShadow receiveShadow geometry={nodes.Foo.geometry} material={materials.Steel} position={[0.2, 0, 0]} userData={{ id: '1043' }} />
          <mesh name="Part2" castShadow receiveShadow geometry={nodes.Part2.geometry} material={materials.Steel} position={[6.5, 0, 0]} userData={{ id: '1044' }} />
        </group>
        <group name="g45" position={[45, 0, 0]}>
          <mesh name="Foo" castShadow receiveShadow geometry={nodes.Foo.geometry} material={materials.Paint} position={[0.2, 0, 0]} userData={{ id: '1045' }} />
          <mesh name="1001" castShadow receiveShadow geometry={nodes['1001'].geometry} material={materials.Glass} position={[5.4, 0, 0]} userData={{ id: '1046' }} />
          <mesh name="100247" castShadow receiveShadow geometry={nodes['100247'].geometry} material={materials.Paint} position={[6.8, 0, 0]} userData={{ id: '1047' }} />
          <mesh name="Bolt1" castShadow receiveShadow geometry={nodes.Bolt1.geometry} material={materials.Steel} position={[6.9, 0, 0]} userData={{ id: '1048' }} />
          <mesh name="49" castShadow receiveShadow geometry={nodes['49'].geometry} material={materials.Paint} position={[4, 0, 0]} userData={{ id: '1049' }} />
        </group>
        <group name="g50" position={[50, 0, 0]}>
          <mesh name="A" castShadow receiveShadow geometry={nodes.A.geometry} material={materials.Steel} position={[1, 0, 0]} userData={{ id: '1050' }} />
          <mesh name="1001" castShadow receiveShadow geometry={nodes['1001'].geometry} material={materials.Glass} position={[9.6, 0, 0]} userData={{ id: '1051' }} />
          <mesh name="A" castShadow receiveShadow geometry={nodes.A.geometry} material={materials.Glass} position={[4.7, 0, 0]} userData={{ id: '1052' }} />
          <mesh name="Part53" castShadow receiveShadow geometry={nodes.Part53.geometry} material={materials.Paint} position={[9.4, 0, 0]} userData={{ id: '1053' }} />
          <mesh name="bolt_3" castShadow receiveShadow geometry={nodes.bolt_3.geometry} material={materials.Steel} position={[1.6, 0, 0]} userData={{ id: '1054' }} />
        </group>
        <group name="g55" position={[55, 0, 0]}>
          <mesh name="part55" castShadow receiveShadow geometry={nodes.part55.geometry} material={materials.Glass} position={[4.9, 0, 0]} userData={{ id: '1055' }} />
          <mesh name="Foo56" castShadow receiveShadow geometry={nodes.Foo56.geometry} material={materials.Glass} userData={{ id: '1056' }} />
          <mesh castShadow receiveShadow geometry={nodes[''].geometry} material={materials.Steel} position={[1.8, 0, 0]} userData={{ id: '1057' }} />
          <mesh name="bolt_3" castShadow receiveShadow geometry={nodes.bolt_3.geometry} material={materials.Glass} position={[4.1, 0, 0]} userData={{ id: '1058' }} />
          <mesh castShadow receiveShadow geometry={nodes[''].geometry} material={materials.Paint} position={[3.9, 0, 0]} userData={{ id: '1059' }} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/model.gltf')
