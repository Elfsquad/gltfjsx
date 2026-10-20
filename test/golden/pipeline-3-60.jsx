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
          <mesh name="Bolt0" castShadow receiveShadow geometry={nodes.Bolt0.geometry} material={materials.Steel} position={[7.6, 0, 0]} userData={{ id: '1000' }} />
          <mesh name="771" castShadow receiveShadow geometry={nodes['771'].geometry} material={materials.Paint} position={[5.5, 0, 0]} userData={{ id: '1001' }} />
          <mesh name="Foo12" castShadow receiveShadow geometry={nodes.Foo12.geometry} material={materials.Steel} position={[7.9, 0, 0]} userData={{ id: '1002' }} />
          <mesh name="Foo13" castShadow receiveShadow geometry={nodes.Foo13.geometry} material={materials.Steel} position={[6.7, 0, 0]} userData={{ id: '1003' }} />
          <mesh name="Bolt14" castShadow receiveShadow geometry={nodes.Bolt14.geometry} material={materials.Glass} position={[8.8, 0, 0]} userData={{ id: '1004' }} />
        </group>
        <group name="g5" position={[5, 0, 0]}>
          <mesh name="5" castShadow receiveShadow geometry={nodes['5'].geometry} material={materials.Glass} position={[7.1, 0, 0]} userData={{ id: '1005' }} />
          <mesh name="Foo16" castShadow receiveShadow geometry={nodes.Foo16.geometry} material={materials.Paint} position={[0.1, 0, 0]} userData={{ id: '1006' }} />
          <mesh name="bolt_3" castShadow receiveShadow geometry={nodes.bolt_3.geometry} material={materials.Glass} position={[7.9, 0, 0]} userData={{ id: '1007' }} />
          <mesh name="10028" castShadow receiveShadow geometry={nodes['10028'].geometry} material={materials.Paint} position={[5.3, 0, 0]} userData={{ id: '1008' }} />
          <mesh name="Bolt9" castShadow receiveShadow geometry={nodes.Bolt9.geometry} material={materials.Paint} position={[5.7, 0, 0]} userData={{ id: '1009' }} />
        </group>
        <group name="g10" position={[10, 0, 0]}>
          <mesh name="Foo10" castShadow receiveShadow geometry={nodes.Foo10.geometry} material={materials.Glass} position={[6.9, 0, 0]} userData={{ id: '1010' }} />
          <mesh name="a2" castShadow receiveShadow geometry={nodes.a2.geometry} material={materials.Paint} position={[7.1, 0, 0]} userData={{ id: '1011' }} />
          <mesh name="12" castShadow receiveShadow geometry={nodes['12'].geometry} material={materials.Glass} position={[0.7, 0, 0]} userData={{ id: '1012' }} />
          <mesh name="Part1" castShadow receiveShadow geometry={nodes.Part1.geometry} material={materials.Glass} position={[2.9, 0, 0]} userData={{ id: '1013' }} />
          <mesh name="bolt_314" castShadow receiveShadow geometry={nodes.bolt_314.geometry} material={materials.Paint} position={[7.6, 0, 0]} userData={{ id: '1014' }} />
        </group>
        <group name="g15" position={[15, 0, 0]}>
          <mesh name="Foo" castShadow receiveShadow geometry={nodes.Foo.geometry} material={materials.Glass} position={[7.7, 0, 0]} userData={{ id: '1015' }} />
          <mesh name="77" castShadow receiveShadow geometry={nodes['77'].geometry} material={materials.Paint} position={[7.7, 0, 0]} userData={{ id: '1016' }} />
          <mesh name="a2" castShadow receiveShadow geometry={nodes.a2.geometry} material={materials.Glass} position={[5.8, 0, 0]} userData={{ id: '1017' }} />
          <mesh name="A18" castShadow receiveShadow geometry={nodes.A18.geometry} material={materials.Glass} position={[6.3, 0, 0]} userData={{ id: '1018' }} />
          <mesh name="bolt_319" castShadow receiveShadow geometry={nodes.bolt_319.geometry} material={materials.Paint} position={[6.3, 0, 0]} userData={{ id: '1019' }} />
        </group>
        <group name="g20" position={[20, 0, 0]}>
          <mesh name="A120" castShadow receiveShadow geometry={nodes.A120.geometry} material={materials.Steel} position={[8.5, 0, 0]} userData={{ id: '1020' }} />
          <mesh name="A121" castShadow receiveShadow geometry={nodes.A121.geometry} material={materials.Paint} position={[6.7, 0, 0]} userData={{ id: '1021' }} />
          <mesh name="a2" castShadow receiveShadow geometry={nodes.a2.geometry} material={materials.Steel} position={[1.8, 0, 0]} userData={{ id: '1022' }} />
          <mesh name="Foo" castShadow receiveShadow geometry={nodes.Foo.geometry} material={materials.Steel} position={[8.3, 0, 0]} userData={{ id: '1023' }} />
          <mesh name="7724" castShadow receiveShadow geometry={nodes['7724'].geometry} material={materials.Glass} position={[1.3, 0, 0]} userData={{ id: '1024' }} />
        </group>
        <group name="g25" position={[25, 0, 0]}>
          <mesh name="bolt_3" castShadow receiveShadow geometry={nodes.bolt_3.geometry} material={materials.Glass} position={[3.2, 0, 0]} userData={{ id: '1025' }} />
          <mesh name="a226" castShadow receiveShadow geometry={nodes.a226.geometry} material={materials.Steel} position={[3.8, 0, 0]} userData={{ id: '1026' }} />
          <mesh name="Bolt127" castShadow receiveShadow geometry={nodes.Bolt127.geometry} material={materials.Paint} position={[6.7, 0, 0]} userData={{ id: '1027' }} />
          <mesh name="28" castShadow receiveShadow geometry={nodes['28'].geometry} material={materials.Paint} position={[4.5, 0, 0]} userData={{ id: '1028' }} />
          <mesh name="100229" castShadow receiveShadow geometry={nodes['100229'].geometry} material={materials.Glass} position={[1.8, 0, 0]} userData={{ id: '1029' }} />
        </group>
        <group name="g30" position={[30, 0, 0]}>
          <mesh castShadow receiveShadow geometry={nodes[''].geometry} material={materials.Glass} position={[3.9, 0, 0]} userData={{ id: '1030' }} />
          <mesh name="part31" castShadow receiveShadow geometry={nodes.part31.geometry} material={materials.Paint} position={[1.3, 0, 0]} userData={{ id: '1031' }} />
          <mesh name="1001" castShadow receiveShadow geometry={nodes['1001'].geometry} material={materials.Steel} position={[4.6, 0, 0]} userData={{ id: '1032' }} />
          <mesh name="A1" castShadow receiveShadow geometry={nodes.A1.geometry} material={materials.Glass} position={[2.9, 0, 0]} userData={{ id: '1033' }} />
          <mesh name="Part" castShadow receiveShadow geometry={nodes.Part.geometry} material={materials.Steel} position={[0.1, 0, 0]} userData={{ id: '1034' }} />
        </group>
        <group name="g35" position={[35, 0, 0]}>
          <mesh name="a235" castShadow receiveShadow geometry={nodes.a235.geometry} material={materials.Paint} position={[5.7, 0, 0]} userData={{ id: '1035' }} />
          <mesh name="A36" castShadow receiveShadow geometry={nodes.A36.geometry} material={materials.Paint} position={[9.8, 0, 0]} userData={{ id: '1036' }} />
          <mesh name="100137" castShadow receiveShadow geometry={nodes['100137'].geometry} material={materials.Steel} position={[6.8, 0, 0]} userData={{ id: '1037' }} />
          <mesh name="bolt_3" castShadow receiveShadow geometry={nodes.bolt_3.geometry} material={materials.Paint} position={[6.3, 0, 0]} userData={{ id: '1038' }} />
          <mesh name="bolt_339" castShadow receiveShadow geometry={nodes.bolt_339.geometry} material={materials.Glass} position={[5.8, 0, 0]} userData={{ id: '1039' }} />
        </group>
        <group name="g40" position={[40, 0, 0]}>
          <mesh name="Part40" castShadow receiveShadow geometry={nodes.Part40.geometry} material={materials.Paint} position={[5.5, 0, 0]} userData={{ id: '1040' }} />
          <mesh name="A41" castShadow receiveShadow geometry={nodes.A41.geometry} material={materials.Paint} position={[8.1, 0, 0]} userData={{ id: '1041' }} />
          <mesh name="Part" castShadow receiveShadow geometry={nodes.Part.geometry} material={materials.Steel} position={[7.3, 0, 0]} userData={{ id: '1042' }} />
          <mesh name="Part2" castShadow receiveShadow geometry={nodes.Part2.geometry} material={materials.Glass} position={[4.5, 0, 0]} userData={{ id: '1043' }} />
          <mesh name="Part2" castShadow receiveShadow geometry={nodes.Part2.geometry} material={materials.Glass} position={[2.3, 0, 0]} userData={{ id: '1044' }} />
        </group>
        <group name="g45" position={[45, 0, 0]}>
          <mesh name="Foo" castShadow receiveShadow geometry={nodes.Foo.geometry} material={materials.Paint} position={[8.8, 0, 0]} userData={{ id: '1045' }} />
          <mesh name="Part46" castShadow receiveShadow geometry={nodes.Part46.geometry} material={materials.Paint} position={[2, 0, 0]} userData={{ id: '1046' }} />
          <mesh name="a247" castShadow receiveShadow geometry={nodes.a247.geometry} material={materials.Paint} position={[7.2, 0, 0]} userData={{ id: '1047' }} />
          <mesh name="Part48" castShadow receiveShadow geometry={nodes.Part48.geometry} material={materials.Glass} position={[6.3, 0, 0]} userData={{ id: '1048' }} />
          <mesh name="1002" castShadow receiveShadow geometry={nodes['1002'].geometry} material={materials.Glass} position={[2.3, 0, 0]} userData={{ id: '1049' }} />
        </group>
        <group name="g50" position={[50, 0, 0]}>
          <mesh name="Foo1" castShadow receiveShadow geometry={nodes.Foo1.geometry} material={materials.Glass} position={[4.1, 0, 0]} userData={{ id: '1050' }} />
          <mesh name="bolt_3" castShadow receiveShadow geometry={nodes.bolt_3.geometry} material={materials.Steel} position={[5.3, 0, 0]} userData={{ id: '1051' }} />
          <mesh name="A1" castShadow receiveShadow geometry={nodes.A1.geometry} material={materials.Steel} position={[6.1, 0, 0]} userData={{ id: '1052' }} />
          <mesh name="a2" castShadow receiveShadow geometry={nodes.a2.geometry} material={materials.Glass} position={[8.4, 0, 0]} userData={{ id: '1053' }} />
          <mesh name="Bolt154" castShadow receiveShadow geometry={nodes.Bolt154.geometry} material={materials.Paint} position={[5.8, 0, 0]} userData={{ id: '1054' }} />
        </group>
        <group name="g55" position={[55, 0, 0]}>
          <mesh name="Foo155" castShadow receiveShadow geometry={nodes.Foo155.geometry} material={materials.Glass} position={[5.6, 0, 0]} userData={{ id: '1055' }} />
          <mesh name="100256" castShadow receiveShadow geometry={nodes['100256'].geometry} material={materials.Steel} position={[7.5, 0, 0]} userData={{ id: '1056' }} />
          <mesh name="bolt_3" castShadow receiveShadow geometry={nodes.bolt_3.geometry} material={materials.Paint} position={[1.6, 0, 0]} userData={{ id: '1057' }} />
          <mesh name="100158" castShadow receiveShadow geometry={nodes['100158'].geometry} material={materials.Paint} position={[1.2, 0, 0]} userData={{ id: '1058' }} />
          <mesh name="59" castShadow receiveShadow geometry={nodes['59'].geometry} material={materials.Paint} position={[7.3, 0, 0]} userData={{ id: '1059' }} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/model.gltf')
