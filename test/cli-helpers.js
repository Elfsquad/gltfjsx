// Runs cli.js as a child process on small hand-made glTF files in a fresh temp directory.
import { spawnSync } from 'node:child_process'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const cli = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'cli.js')

// One triangle, its buffer inline as a data: URI. Node names are numeric dbIds, as the SVF fork
// writes them, with extras.id carried into userData by --meta.
const positions = Buffer.from(new Float32Array([0, 0, 0, 1, 0, 0, 0, 1, 0]).buffer)
export function triangleGltf({
  bufferUri = 'data:application/octet-stream;base64,' + positions.toString('base64'),
} = {}) {
  return {
    asset: { version: '2.0' },
    scenes: [{ nodes: [0] }],
    nodes: [
      { name: '4711', children: [1, 2], extras: { id: '4711' } },
      { name: '4712', mesh: 0, extras: { id: '4712' } },
      { name: '4713', mesh: 0, translation: [1, 0, 0], extras: { id: '4713' } },
    ],
    meshes: [{ primitives: [{ attributes: { POSITION: 0 }, material: 0 }] }],
    materials: [{ name: 'Steel' }],
    accessors: [{ bufferView: 0, componentType: 5126, count: 3, type: 'VEC3', min: [0, 0, 0], max: [1, 1, 0] }],
    bufferViews: [{ buffer: 0, byteLength: 36 }],
    buffers: [{ uri: bufferUri, byteLength: 36 }],
  }
}

export function tempDir() {
  return fs.mkdtempSync(path.join(os.tmpdir(), 'gltfjsx-test-'))
}

export function writeModel(dir, name = 'model.gltf', json = triangleGltf()) {
  const file = path.join(dir, name)
  fs.writeFileSync(file, typeof json === 'string' ? json : JSON.stringify(json))
  return file
}

// Every run has a hard timeout so a CLI that never settles fails the test instead of hanging it.
export function run(args, { cwd } = {}) {
  const result = spawnSync(process.execPath, [cli, ...args], { cwd, encoding: 'utf8', timeout: 60_000 })
  return { code: result.status, signal: result.signal, stdout: result.stdout, stderr: result.stderr }
}
