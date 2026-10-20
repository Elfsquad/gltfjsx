// G1: --url <url> is used verbatim in useGLTF() and useGLTF.preload().
import { test } from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import parse from '../src/utils/parser.js'
import { run, tempDir, writeModel } from './cli-helpers.js'
import { mixedScene } from './scenes.js'

const URL = 'https://example.invalid/gltfmodels/0f1e2d3c/model.gltf'

function convert(args) {
  const dir = tempDir()
  const out = path.join(dir, 'out.jsx')
  const r = run([writeModel(dir), '--output', out, ...args])
  return { ...r, jsx: r.code === 0 ? fs.readFileSync(out, 'utf8') : '' }
}

test('--help lists --url (convert-svf refuses a build without it)', () => {
  const r = run(['--help'])
  assert.equal(r.code, 0)
  assert.match(r.stdout, /--url/)
})

test('--url appears verbatim in useGLTF() and preload()', () => {
  const r = convert(['--url', URL, '--keepnames', '--keepgroups', '--meta', '--shadows'])
  assert.equal(r.code, 0, r.stderr)
  assert.equal(r.jsx.split(`useGLTF('${URL}')`).length - 1, 1)
  assert.equal(r.jsx.split(`useGLTF.preload('${URL}')`).length - 1, 1)
  assert.doesNotMatch(r.jsx, /'\/model\.gltf'/)
})

test('--url with a query string and a quote stays one valid string literal', () => {
  const url = "https://example.invalid/a b/it's.gltf?sv=1&sig=x%2F"
  const r = convert(['--url', url])
  assert.equal(r.code, 0, r.stderr)
  assert.ok(r.jsx.includes(`useGLTF(${JSON.stringify(url)})`), r.jsx)
  assert.ok(r.jsx.includes(`useGLTF.preload(${JSON.stringify(url)})`))
})

test('without --url the URL is still derived from the file name', () => {
  const r = convert([])
  assert.equal(r.code, 0, r.stderr)
  assert.match(r.jsx, /useGLTF\('\/model\.gltf'\)/)
})

test('an empty --url is a usage error (exit 2)', () => {
  const r = convert(['--url', ''])
  assert.equal(r.code, 2)
  assert.match(r.stderr, /--url must not be empty/)
})

test('parse() uses the url option in the Instances component too', async () => {
  const out = await parse(mixedScene(1, 12, { lettersOnly: true }), {
    fileName: 'model.gltf',
    url: URL,
    instanceall: true,
  })
  assert.equal(out.split(`useGLTF('${URL}')`).length - 1, 1) // Instances; Model reads the context
  assert.equal(out.split(`useGLTF.preload('${URL}')`).length - 1, 1)
  assert.doesNotMatch(out, /'\/model\.gltf'/)
})
