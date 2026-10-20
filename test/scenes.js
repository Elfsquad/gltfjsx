// Deterministic synthetic scenes for parser tests. No customer data: every name and
// number is generated here from a fixed seed.
import * as THREE from 'three'

// Small seeded PRNG (mulberry32) so a scene is the same on every run.
export function rng(seed) {
  let a = seed >>> 0
  return () => {
    a = (a + 0x6d2b79f5) >>> 0
    let t = a
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

// Names that collide after parser.js strips every non-letter: numeric dbIds (empty base),
// letter names that already carry a digit suffix, case variants and the empty name.
const NAME_POOL = [
  '1001',
  '1002',
  '77',
  'Part',
  'part',
  'Part1',
  'Part2',
  'Bolt',
  'Bolt1',
  'bolt_3',
  'Foo',
  'Foo1',
  '',
  'A',
  'A1',
  'a2',
]
// Upstream prints `<instances.NAME>`, which is not valid JSX when NAME is empty or starts with a
// digit (a numeric-only mesh name), so the instancing goldens draw only from names with letters.
const LETTER_POOL = NAME_POOL.filter((name) => /^[a-zA-Z]/.test(name))

// A scene of `count` meshes in small groups. Some meshes share a geometry and material, so
// `instance`/`instanceall` have duplicates to print. userData carries an id like the SVF fork's extras.
export function mixedScene(seed, count, { lettersOnly = false } = {}) {
  const pool = lettersOnly ? LETTER_POOL : NAME_POOL
  const next = rng(seed)
  const pick = (list) => list[Math.floor(next() * list.length)]
  const materials = ['Steel', 'Paint', 'Glass'].map((name) => new THREE.MeshStandardMaterial({ name }))
  const geometries = Array.from({ length: Math.max(1, Math.floor(count / 3)) }, () => new THREE.BoxGeometry(1, 1, 1))
  const scene = new THREE.Group()
  let group = scene
  for (let i = 0; i < count; i++) {
    if (i % 5 === 0) {
      group = new THREE.Group()
      group.name = 'g' + i
      group.position.set(i, 0, 0)
      scene.add(group)
    }
    const mesh = new THREE.Mesh(pick(geometries), pick(materials))
    mesh.name = pick(pool) + (next() < 0.5 ? String(i) : '')
    mesh.userData = { id: String(1000 + i) }
    mesh.position.set(Math.round(next() * 100) / 10, 0, 0)
    group.add(mesh)
  }
  return scene
}

// `count` meshes, each with its own geometry, all named by a numeric dbId: the SVF shape that
// made uniqueName() cubic (every base name is the empty string).
export function numericScene(count) {
  const material = new THREE.MeshStandardMaterial({ name: 'm' })
  const scene = new THREE.Group()
  for (let i = 0; i < count; i++) {
    const mesh = new THREE.Mesh(new THREE.BufferGeometry(), material)
    mesh.name = String(100000 + i)
    mesh.userData = { id: String(100000 + i) }
    scene.add(mesh)
  }
  return scene
}

// Option sets exercised by the equivalence goldens. `pipeline` is what convert-svf passes.
// `lettersOnly` marks the sets that print instance names (see LETTER_POOL).
export const OPTION_SETS = {
  pipeline: { options: { keepnames: true, keepgroups: true, meta: true, shadows: true, precision: 3 } },
  default: { options: {} },
  instance: { options: { instance: true, keepnames: true, precision: 3 }, lettersOnly: true },
  instanceall: { options: { instanceall: true, precision: 3 }, lettersOnly: true },
  types: { options: { types: true, instance: true, precision: 3 }, lettersOnly: true },
}

export const SEEDS = [1, 2, 3]
export const SIZES = [12, 60]
