// parse() on small hand-built scenes, one per printing rule, so every branch of parser.js runs.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import * as THREE from 'three'
import parse from '../src/utils/parser.js'

const box = () => new THREE.BoxGeometry(1, 1, 1)
const mat = (name) => new THREE.MeshStandardMaterial({ name })

function mesh(name, { geometry = box(), material = mat('Steel') } = {}) {
  const m = new THREE.Mesh(geometry, material)
  m.name = name
  return m
}

function group(name, ...children) {
  const g = new THREE.Group()
  g.name = name
  children.forEach((child) => g.add(child))
  return g
}

// parse() echoes the header to stderr unless --console: keep test output readable.
async function quiet(fn) {
  const error = console.error
  const lines = []
  console.error = (...args) => lines.push(args.join(' '))
  try {
    return { out: await fn(), stderr: lines.join('\n') }
  } finally {
    console.error = error
  }
}

const run = (scene, options = {}) => quiet(() => parse(scene, { header: 'test', ...options })).then((r) => r.out)

test('a remote fileName is used as the URL as is', async () => {
  const out = await run(mesh('Box'), { fileName: 'https://example.invalid/model.glb' })
  assert.match(out, /useGLTF\('https:\/\/example\.invalid\/model\.glb'\)/)
})

test('a glTF structure with animations, extras and a draco path prints useAnimations', async () => {
  const scene = group('Root', mesh('Box'))
  const clip = new THREE.AnimationClip('Spin', 1, [])
  const out = await run(
    { scene, animations: [clip], parser: { json: { asset: { extras: { author: 'someone' } } } } },
    { types: true, draco: '/draco/', size: 'model.glb [1KB]' }
  )
  assert.match(out, /Author: someone/)
  assert.match(out, /Files: model\.glb \[1KB\]/)
  assert.match(out, /type ActionName = 'Spin'/)
  assert.match(out, /const group = React\.useRef<THREE\.Group>\(\)/)
  assert.match(out, /const \{ nodes, materials, animations \} = useGLTF\('\/model', '\/draco\/'\) as GLTFResult/)
  assert.match(out, /const \{ actions \} = useAnimations\(animations, group\)/)
  assert.match(out, /<group ref=\{group\} \{\.\.\.props\} dispose=\{null\}>/)
  // Animated scenes keep their groups and names.
  assert.match(out, /<group name="Root">/)
})

test('animations without types use an untyped ref', async () => {
  const scene = group('Root', mesh('Box'))
  const out = await run({ scene, animations: [new THREE.AnimationClip('a', 1, [])], parser: { json: {} } })
  assert.match(out, /const group = React\.useRef\(\)/)
})

test('cameras print their non-default props and are imported from drei', async () => {
  const perspective = new THREE.PerspectiveCamera(60, 1, 1, 100)
  perspective.name = 'Persp'
  perspective.zoom = 2
  const orthographic = new THREE.OrthographicCamera()
  orthographic.name = 'Ortho'
  const defaults = new THREE.PerspectiveCamera()
  defaults.name = 'Defaults'
  const out = await run(group('Root', perspective, orthographic, defaults))
  assert.match(out, /import \{ useGLTF, PerspectiveCamera, OrthographicCamera \} from '@react-three\/drei'/)
  assert.match(out, /<PerspectiveCamera makeDefault=\{false\} zoom=\{2\} far=\{100\} near=\{1\} fov=\{60\}/)
  assert.match(out, /<OrthographicCamera makeDefault=\{false\} \/>/)
  assert.match(out, /<PerspectiveCamera makeDefault=\{false\} \/>/)
})

test('mesh props: shadows, visibility, morph targets, up and unnamed materials', async () => {
  const hidden = mesh('Hidden')
  hidden.visible = false
  hidden.castShadow = true
  hidden.receiveShadow = true
  hidden.up.set(0, 0, 1)
  const morph = mesh('Morph', { material: new THREE.MeshStandardMaterial() })
  morph.morphTargetDictionary = { smile: 0 }
  morph.morphTargetInfluences = [0]
  const out = await run(group('Root', hidden, morph), { shadows: true })
  assert.match(out, /visible=\{false\} castShadow receiveShadow up=\{\[0, 0, 1\]\}/)
  assert.match(out, /<mesh\s+name="Morph"[^>]*material=\{nodes\.Morph\.material\}/)
  assert.match(out, /morphTargetDictionary=\{nodes\.Morph\.morphTargetDictionary\}/)
  assert.match(out, /morphTargetInfluences=\{nodes\.Morph\.morphTargetInfluences\}/)
})

test('lights print intensity, angle, penumbra, decay, distance and colour', async () => {
  const spot = new THREE.SpotLight(0xff0000, 2, 10, Math.PI / 4, 0.5, 2)
  spot.name = 'Spot'
  const dim = new THREE.PointLight(0xffffff, 0.0001, 0, 1)
  dim.name = 'Dim'
  const plain = new THREE.SpotLight(0xffffff, 1, 0, Math.PI / 3, 0, 1)
  plain.name = 'Plain'
  plain.remove(plain.target)
  const out = await run(group('Root', spot, dim, plain), { keepnames: true })
  assert.match(
    out,
    /<spotLight name="Spot" intensity=\{2\} angle=\{Math\.PI \/ 4\} penumbra=\{0\.5\} decay=\{2\} distance=\{10\} color="#ff0000"/
  )
  assert.match(out, /<pointLight name="Dim" \/>/)
  assert.match(out, /<spotLight name="Plain" intensity=\{1\} position=\{\[0, 1, 0\]\} \/>/)
})

test('a light whose target is its first child prints the target as a primitive', async () => {
  const light = new THREE.DirectionalLight()
  light.name = 'Sun'
  light.add(light.target)
  light.target.position.set(0, 0, -5)
  const out = await run(group('Root', light))
  assert.match(out, /<directionalLight intensity=\{1\} position=\{\[0, 1, 0\]\} target=\{nodes\.Sun\.target\}>/)
  assert.match(out, /<primitive object=\{nodes\.Sun\.target\} position=\{\[0, 0, -5\]\} \/>/)
})

test('rotations print as multiples and fractions of PI, scales as one number when uniform', async () => {
  const a = mesh('A')
  a.rotation.set(-Math.PI / 2, Math.PI * 2, 0.3)
  a.scale.set(2, 2, 2)
  const b = mesh('B')
  b.rotation.set(Math.PI, -Math.PI * 3, 0)
  b.scale.set(1, 2, 3)
  const out = await run(group('Root', a, b))
  assert.match(out, /rotation=\{\[-Math\.PI \/ 2, Math\.PI \* 2, 0\.3\]\} scale=\{2\}/)
  assert.match(out, /rotation=\{\[Math\.PI, -Math\.PI \* 3, 0\]\} scale=\{\[1, 2, 3\]\}/)
})

test('--meta prints userData only when there is some', async () => {
  const tagged = mesh('Tagged')
  tagged.userData = { id: 7 }
  const out = await run(group('Root', tagged, mesh('Bare')), { meta: true })
  assert.match(out, /userData=\{\{ id: 7 \}\}/)
  assert.equal(out.match(/userData/g).length, 1)
})

test('instanced meshes print args, matrix and colour', async () => {
  const named = new THREE.InstancedMesh(box(), mat('Steel'), 3)
  named.name = 'Named'
  named.setColorAt(0, new THREE.Color(1, 0, 0))
  const unnamed = new THREE.InstancedMesh(box(), new THREE.MeshStandardMaterial(), 0)
  unnamed.name = 'Unnamed'
  const out = await run(group('Root', named, unnamed))
  assert.match(out, /<instancedMesh\s+args=\{\[nodes\.Named\.geometry, materials\.Steel, 3\]\}/)
  assert.match(out, /instanceMatrix=\{nodes\.Named\.instanceMatrix\}/)
  assert.match(out, /instanceColor=\{nodes\.Named\.instanceColor\}/)
  assert.match(out, /args=\{\[nodes\.Unnamed\.geometry, nodes\.Unnamed\.material, nodes\.Unnamed\.count\]\}/)
})

function skinned() {
  const root = new THREE.Bone()
  root.name = 'Hip'
  const child = new THREE.Bone()
  child.name = 'Knee'
  root.add(child)
  const skin = new THREE.SkinnedMesh(box(), mat('Skin'))
  skin.name = 'Body'
  skin.bind(new THREE.Skeleton([root, child]))
  return group('Armature', root, skin)
}

test('bones print as primitives and pull in SkeletonUtils and useGraph', async () => {
  const out = await run(skinned(), { types: true })
  assert.match(out, /import \{ useGraph \} from '@react-three\/fiber'/)
  assert.match(out, /import \{ GLTF, SkeletonUtils \} from 'three-stdlib'/)
  assert.match(out, /const \{ scene \} = useGLTF\('\/model'\)/)
  assert.match(out, /const \{ nodes, materials \} = useGraph\(clone\) as GLTFResult/)
  assert.match(out, /<primitive object=\{nodes\.Hip\} \/>/)
  assert.match(out, /skeleton=\{nodes\.Body\.skeleton\}/)
  // Only root bones are typed: Knee's parent is a bone.
  assert.match(out, /Hip: THREE\.Bone/)
  assert.doesNotMatch(out, /Knee: THREE\.Bone/)
})

test('--bones lays the skeleton out as nested primitives', async () => {
  const out = await run(skinned(), { bones: true })
  assert.match(out, /<primitive object=\{nodes\.Hip\}>\s*<primitive object=\{nodes\.Knee\} \/>\s*<\/primitive>/)
  assert.match(out, /useGraph\(clone\)\s/)
  assert.doesNotMatch(out, /as GLTFResult/)
})

test('types quote names that are not identifiers', async () => {
  const a = mesh('my mesh', { material: mat('my mat') })
  const bone = new THREE.Bone()
  bone.name = 'my bone'
  const out = await run(group('Root', a, bone), { types: true })
  assert.match(out, /\['my mesh'\]: THREE\.Mesh/)
  assert.match(out, /\['my bone'\]: THREE\.Bone/)
  assert.match(out, /\['my mat'\]: THREE\.MeshStandardMaterial/)
})

test('--instance with types prints a typed Instances context; meshes without material are not instanced', async () => {
  const geometry = box()
  const material = mat('Steel')
  const loose = new THREE.Mesh(box())
  loose.material = null
  loose.name = 'Loose'
  const scene = group('Root', mesh('Bolt', { geometry, material }), mesh('Bolt2', { geometry, material }), loose)
  const out = await run(scene, { instance: true, types: true, draco: '/draco/' })
  assert.match(
    out,
    /type ContextType = Record<\s*string,\s*React\.ForwardRefExoticComponent<JSX\.IntrinsicElements\['mesh'\]>/
  )
  assert.match(out, /const context = React\.createContext\(\{\} as ContextType\)/)
  assert.match(out, /export function Instances\(\{ children, \.\.\.props \}: JSX\.IntrinsicElements\['group'\]\)/)
  assert.match(out, /useGLTF\('\/model', '\/draco\/'\) as GLTFResult/)
  assert.match(out, /\(instances: ContextType\) =>/)
  assert.equal(out.match(/<instances\.Bolt /g).length, 2)
  assert.match(out, /<mesh geometry=\{nodes\.Loose\.geometry\}/)
})

test('--exportdefault exports the model as default', async () => {
  assert.match(await run(mesh('Box'), { exportdefault: true }), /export default function Model/)
})

test('a group around a THREE.Scene root is pruned like a group', async () => {
  const scene = new THREE.Scene()
  scene.add(mesh('Box'))
  const out = await run(scene)
  assert.match(out, /<group \{\.\.\.props\} dispose=\{null\}>\s*<mesh/)
})

test('pruning: double negative rotation', async () => {
  // Two children, so the inner group cannot pass its rotation down and is pruned with the outer one.
  const inner = group('Inner', mesh('Box'), mesh('Box2'))
  inner.rotation.set(Math.PI / 2, 0, 0)
  const outer = group('Outer', inner)
  outer.rotation.set(-Math.PI / 2, 0, 0)
  const { out, stderr } = await quiet(() => parse(group('Root', outer, mesh('Other')), { debug: true }))
  assert.match(stderr, /group Outer removed \(aggressive: double negative rotation\)/)
  assert.doesNotMatch(out, /rotation/)
})

test('pruning: double negative rotation on the y and z axes', async () => {
  const inner = group('Inner', mesh('Box'), mesh('Box2'))
  inner.rotation.set(0, Math.PI / 2, -Math.PI / 4)
  const outer = group('Outer', inner)
  outer.rotation.set(0, -Math.PI / 2, Math.PI / 4)
  const out = await run(group('Root', outer, mesh('Other')))
  assert.doesNotMatch(out, /rotation/)
})

test('pruning: double negative rotation with props keeps the child props', async () => {
  const inner = group('Inner', mesh('Box'), mesh('Box2'))
  inner.rotation.set(Math.PI / 2, 0, 0)
  inner.scale.set(0.01, 0.01, 0.01)
  const outer = group('Outer', inner)
  outer.rotation.set(-Math.PI / 2, 0, 0)
  const { out, stderr } = await quiet(() => parse(group('Root', outer, mesh('Other')), { debug: true }))
  assert.match(stderr, /group Outer removed \(aggressive: double negative rotation w\/ props\)/)
  assert.match(out, /<group scale=\{0\.01\}>/)
  assert.doesNotMatch(out, /rotation/)
})

test('pruning: a transform-only group moves its transform onto the child', async () => {
  const outer = group('Outer', mesh('Box'))
  outer.position.set(10, 0, 0)
  const { out, stderr } = await quiet(() => parse(group('Root', outer, mesh('Other')), { debug: true }))
  assert.match(stderr, /group Outer removed \(aggressive: position overlap\)/)
  assert.match(out, /<mesh geometry=\{nodes\.Box\.geometry\} material=\{materials\.Steel\} position=\{\[10, 0, 0\]\}/)
})

test('pruning: a subtree of groups without content is dropped', async () => {
  const a = group('A')
  a.position.set(1, 0, 0)
  const b = group('B')
  b.position.set(2, 0, 0)
  const outer = group('Outer', a, b)
  outer.position.set(3, 0, 0)
  const { out, stderr } = await quiet(() => parse(group('Root', outer, mesh('Other')), { debug: true }))
  assert.match(stderr, /group A removed \(empty\)/)
  assert.match(stderr, /group Outer removed \(aggressive: lack of content\)/)
  assert.doesNotMatch(out, /position/)
})

test('pruning: a group that holds other props is kept', async () => {
  const outer = group('Outer', mesh('Box'), mesh('Box2'))
  outer.position.set(1, 0, 0)
  outer.userData = { id: 1 }
  const out = await run(group('Root', outer, mesh('Other')), { meta: true })
  assert.match(out, /<group position=\{\[1, 0, 0\]\} userData=\{\{ id: 1 \}\}>/)
})

test('pruning: children of removed groups move to the nearest kept ancestor', async () => {
  const deep = group('Deep', group('Deeper', mesh('Box')), mesh('Box2'))
  const scene = group('Root', group('Middle', deep), mesh('Other'))
  const out = await run(scene)
  assert.equal(out.match(/<group/g).length, 1)
  assert.equal(out.match(/<mesh/g).length, 3)
})

test('pruning: a removed root hands its children to the scene', async () => {
  const root = group('Root', mesh('Box'))
  const scene = group('Scene', root)
  root.__removed = true
  root.removeFromParent()
  const out = await run({ scene: root, animations: [], parser: { json: {} } })
  assert.match(out, /<mesh/)
  assert.equal(scene.children.length, 0)
})

test('silent pruning prints no debug lines for nested removals', async () => {
  // The inner group is printed again (silently) when its parent is pruned.
  const inner = group('Inner', mesh('Box'))
  inner.rotation.set(Math.PI / 2, 0, 0)
  const outer = group('Outer', inner)
  outer.rotation.set(-Math.PI / 2, 0, 0)
  outer.scale.set(2, 2, 2)
  const { stderr } = await quiet(() => parse(group('Root', outer, mesh('Other')), { debug: true }))
  assert.match(stderr, / Group Root pos:/)
})

test('--keepgroups keeps every group', async () => {
  const out = await run(group('Root', group('Empty'), mesh('Box')), { keepgroups: true })
  assert.match(out, /<group>\s*<group \/>/)
})

test('an error while printing is wrapped with its cause', async () => {
  const broken = new THREE.InstancedMesh(box(), null, 1)
  broken.material = undefined
  await assert.rejects(run(broken), (e) => {
    assert.match(e.message, /^Error while parsing glTF: /)
    assert.ok(e.cause instanceof TypeError)
    return true
  })
})

test('--console does not echo the header to stderr', async () => {
  const { stderr } = await quiet(() => parse(mesh('Box'), { console: true }))
  assert.equal(stderr, '')
})
