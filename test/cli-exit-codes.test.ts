// G3: the CLI fails with a non-zero exit code instead of exiting 0 or never settling, and a
// failed run leaves no output file behind.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import { run, tempDir, triangleGltf, writeModel } from './cli-helpers.ts'

test('a valid model exits 0 and writes the JSX', () => {
  const dir = tempDir()
  const out = path.join(dir, 'out.jsx')
  const r = run([writeModel(dir), '--output', out, '--keepnames', '--keepgroups', '--meta', '--shadows'])
  assert.equal(r.code, 0, r.stderr)
  assert.match(fs.readFileSync(out, 'utf8'), /userData=\{\{ name: '4712', id: '4712' \}\}/)
})

test('an unknown flag exits 2 and names the flag', () => {
  const dir = tempDir()
  const out = path.join(dir, 'out.jsx')
  const r = run([writeModel(dir), '--output', out, '--no-such-flag'])
  assert.equal(r.code, 2)
  assert.match(r.stderr, /no-such-flag/)
  assert.equal(fs.existsSync(out), false)
})

test('a missing input exits 1 and creates no output file', () => {
  const dir = tempDir()
  const out = path.join(dir, 'out.jsx')
  const r = run([path.join(dir, 'missing.gltf'), '--output', out])
  assert.equal(r.code, 1)
  assert.match(r.stderr, /missing\.gltf does not exist/)
  assert.equal(fs.existsSync(out), false)
})

test('unparsable glTF JSON exits 1 and creates no output file', () => {
  const dir = tempDir()
  const out = path.join(dir, 'out.jsx')
  const r = run([writeModel(dir, 'bad.gltf', '{not json'), '--output', out])
  assert.equal(r.code, 1)
  assert.match(r.stderr, /not valid glTF JSON/)
  assert.equal(fs.existsSync(out), false)
})

test('a missing external buffer exits 1', () => {
  const dir = tempDir()
  const out = path.join(dir, 'out.jsx')
  const r = run([writeModel(dir, 'model.gltf', triangleGltf({ bufferUri: 'missing.bin' })), '--output', out])
  assert.equal(r.code, 1)
  assert.match(r.stderr, /buffer "missing\.bin" does not exist/)
  assert.equal(fs.existsSync(out), false)
})

test('an external buffer that exists is accepted', () => {
  const dir = tempDir()
  fs.writeFileSync(path.join(dir, 'model 0.bin'), Buffer.from(new Float32Array([0, 0, 0, 1, 0, 0, 0, 1, 0]).buffer))
  const out = path.join(dir, 'out.jsx')
  const r = run([writeModel(dir, 'model.gltf', triangleGltf({ bufferUri: 'model%200.bin' })), '--output', out])
  assert.equal(r.code, 0, r.stderr)
  assert.ok(fs.statSync(out).size > 0)
})

test('a loader error (unsupported glTF version) exits 1 instead of never settling', () => {
  const dir = tempDir()
  const out = path.join(dir, 'out.jsx')
  const r = run([writeModel(dir, 'old.gltf', { ...triangleGltf(), asset: { version: '1.0' } }), '--output', out])
  assert.equal(r.signal, null, 'killed by the test timeout: the CLI hung')
  assert.equal(r.code, 1)
  assert.match(r.stderr, /versions >=2\.0 are supported/)
  assert.equal(fs.existsSync(out), false)
})

test('a corrupt GLB exits 1', () => {
  const dir = tempDir()
  const glb = path.join(dir, 'bad.glb')
  fs.writeFileSync(glb, Buffer.concat([Buffer.from('glTF'), Buffer.alloc(8)]))
  const r = run([glb, '--output', path.join(dir, 'out.jsx')])
  assert.equal(r.signal, null, 'killed by the test timeout: the CLI hung')
  assert.equal(r.code, 1)
})

test('an input without an extension and no --output exits 1 with a message', () => {
  const dir = tempDir()
  const r = run([writeModel(dir, 'model')], { cwd: dir })
  assert.equal(r.code, 1)
  assert.match(r.stderr, /pass --output/)
})

test('no input prints the help and exits 0', () => {
  const r = run([])
  assert.equal(r.code, 0)
  assert.match(r.stdout, /Usage/)
})

test('--debug prints the whole error, stack included', () => {
  const dir = tempDir()
  const r = run([path.join(dir, 'missing.gltf'), '--output', path.join(dir, 'out.jsx'), '--debug'])
  assert.equal(r.code, 1)
  assert.match(r.stderr, /Error: .*missing\.gltf does not exist\.\n\s+at /)
})

test('without --output the file is named after the input, .tsx with --types', () => {
  const dir = tempDir()
  assert.equal(run([writeModel(dir, 'my-model.gltf')], { cwd: dir }).code, 0)
  assert.ok(fs.existsSync(path.join(dir, 'My-model.jsx')))
  assert.equal(run([writeModel(dir, 'my-model.gltf'), '--types'], { cwd: dir }).code, 0)
  assert.ok(fs.existsSync(path.join(dir, 'My-model.tsx')))
})
