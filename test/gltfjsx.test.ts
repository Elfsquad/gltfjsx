// gltfjsx() in-process: output naming, --root, --transform and how each failure rejects.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import gltfjsx from '../src/gltfjsx.ts'
import { GLTFLoader } from '../src/bin/GLTFLoader.js'
import { DRACOLoader } from '../src/bin/DRACOLoader.js'
import { tempDir, triangleGltf, writeModel } from './cli-helpers.ts'

// gltfjsx() logs the header (and gltf-transform its warnings) to stderr, --console the JSX to stdout.
async function captured(fn: () => Promise<unknown>) {
  const { log, error, warn } = console
  const stdout: string[] = []
  const stderr: string[] = []
  console.log = (...args) => stdout.push(args.join(' '))
  console.error = console.warn = (...args) => stderr.push(args.join(' '))
  try {
    await fn()
    return { stdout: stdout.join('\n'), stderr: stderr.join('\n') }
  } finally {
    Object.assign(console, { log, error, warn })
  }
}

test('the Draco decoder module is stubbed out: the structure loader never decodes', () => {
  assert.equal(DRACOLoader.getDecoderModule(), undefined)
})

test('--console prints the JSX and writes no file', async () => {
  const dir = tempDir()
  const { stdout } = await captured(() => gltfjsx(writeModel(dir), undefined, { console: true }))
  assert.match(stdout, /useGLTF\('\/model\.gltf'\)/)
  assert.deepEqual(fs.readdirSync(dir), ['model.gltf'])
})

test('a .tsx output turns on types', async () => {
  const dir = tempDir()
  const out = path.join(dir, 'Model.tsx')
  await captured(() => gltfjsx(writeModel(dir), out, {}))
  assert.match(fs.readFileSync(out, 'utf8'), /type GLTFResult/)
})

test('--root sets the directory the URL is relative to', async () => {
  const dir = tempDir()
  fs.mkdirSync(path.join(dir, 'models'))
  const file = writeModel(path.join(dir, 'models'))
  const out = path.join(dir, 'out.jsx')
  await captured(() => gltfjsx(file, out, { root: dir }))
  assert.match(fs.readFileSync(out, 'utf8'), /useGLTF\('\/models\/model\.gltf'\)/)
  // A root equal to the file leaves an empty relative path.
  await captured(() => gltfjsx(file, out, { root: file }))
  assert.match(fs.readFileSync(out, 'utf8'), /useGLTF\('\/'\)/)
})

test('on Windows the URL uses forward slashes', async (t) => {
  t.mock.property(process, 'platform', 'win32')
  const dir = tempDir()
  fs.mkdirSync(path.join(dir, 'models'))
  const out = path.join(dir, 'out.jsx')
  await captured(() => gltfjsx(writeModel(path.join(dir, 'models')), out, { root: dir }))
  assert.match(fs.readFileSync(out, 'utf8'), /useGLTF\('\/models\/model\.gltf'\)/)
})

test('a glTF without buffers is accepted', async () => {
  const dir = tempDir()
  const out = path.join(dir, 'out.jsx')
  const json = { asset: { version: '2.0' }, scenes: [{ nodes: [0] }], nodes: [{ name: 'Empty' }] }
  await captured(() => gltfjsx(writeModel(dir, 'model.gltf', json), out, {}))
  assert.match(fs.readFileSync(out, 'utf8'), /export function Model/)
})

test('a parser error rejects and writes no file', async () => {
  const dir = tempDir()
  const out = path.join(dir, 'out.jsx')
  // toFixed() throws a RangeError for more than 100 digits.
  await assert.rejects(
    captured(() => gltfjsx(writeModel(dir), out, { precision: 200 })),
    /Error while parsing glTF: toFixed\(\) digits/
  )
  assert.equal(fs.existsSync(out), false)
})

test('a loader failure that is not an Error still rejects with an Error', async (t) => {
  t.mock.method(GLTFLoader.prototype, 'parse', (...[, , , onError]: Parameters<GLTFLoader['parse']>) =>
    onError!('broken')
  )
  const dir = tempDir()
  await assert.rejects(gltfjsx(writeModel(dir), path.join(dir, 'out.jsx'), {}), (e) => {
    assert.ok(e instanceof Error)
    assert.equal(e.message, 'broken')
    return true
  })
})

// A glTF whose file is over 1 MB (an unreferenced 800 KB buffer, which prune() drops), so the
// size line reports megabytes for the original.
function largeGltf() {
  const json = triangleGltf()
  const padding = Buffer.alloc(800_000)
  json.buffers.push({ uri: 'data:application/octet-stream;base64,' + padding.toString('base64'), byteLength: 800_000 })
  return json
}

test('--transform writes <name>-transformed.glb next to the output and reports both sizes', async () => {
  const dir = tempDir()
  const file = writeModel(dir, 'model.gltf', largeGltf())
  const out = path.join(dir, 'out.jsx')
  const { stderr } = await captured(() => gltfjsx(file, out, { transform: true, keepnames: true }))
  const transformed = path.join(dir, 'model-transformed.glb')
  assert.ok(fs.existsSync(transformed))
  assert.match(stderr, /Files: .*model\.gltf \[1\.\d+MB\] > .*model-transformed\.glb \[[\d.]+KB\] \(\d+%\)/)
  assert.match(fs.readFileSync(out, 'utf8'), /useGLTF\('\/model-transformed\.glb'\)/)
})

test('--instance transforms too; without an output it writes next to the input', async () => {
  const dir = tempDir()
  const file = writeModel(dir)
  const { stdout } = await captured(() => gltfjsx(file, undefined, { instance: true, console: true }))
  assert.ok(fs.existsSync(path.join(dir, 'model-transformed.glb')))
  assert.match(stdout, /useGLTF\('\/model-transformed\.glb'\)/)
})

test('--instanceall transforms with every option of the pipeline', async () => {
  const dir = tempDir()
  // Letter names: upstream prints <instances.NAME>, invalid JSX for a numeric name.
  const json = triangleGltf()
  json.nodes.forEach((node, i) => (node.name = 'Part' + 'ABC'[i]))
  const file = writeModel(dir, 'model.gltf', json)
  const out = path.join(dir, 'out.jsx')
  await captured(() =>
    gltfjsx(file, out, {
      instanceall: true,
      keepmaterials: true,
      keepmeshes: true,
      simplify: true,
      degrade: 'Steel',
      format: 'webp',
    })
  )
  assert.ok(fs.existsSync(path.join(dir, 'model-transformed.glb')))
  assert.match(fs.readFileSync(out, 'utf8'), /export function Instances/)
})

test('a failing transform rejects', async () => {
  const dir = tempDir()
  const file = writeModel(dir, 'model.gltf', { asset: { version: '1.0' } })
  await assert.rejects(
    captured(() => gltfjsx(file, path.join(dir, 'out.jsx'), { transform: true })),
    (e) => e instanceof Error
  )
})
