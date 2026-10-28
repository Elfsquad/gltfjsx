// G6: --formatlimit <chars> skips prettier when the unformatted JSX is longer than that. Prettier
// needs ~190 bytes of heap per byte of JSX: on a 133k-node model (31 MB of JSX) it peaked near
// 5.8 GB and was the whole run's peak; without it the run peaks at 1.6 GB.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import * as prettier from 'prettier'
import babelParser from 'prettier/parser-babel.js'
import parse from '../src/utils/parser.ts'
import { run, tempDir, writeModel } from './cli-helpers.ts'
import { mixedScene } from './scenes.ts'

const URL = 'https://example.invalid/gltfmodels/0f1e2d3c/model.gltf'
const PIPELINE = [
  '--keepnames',
  '--keepgroups',
  '--meta',
  '--shadows',
  '--precision',
  '3',
  '--url',
  URL,
  '--header',
  'H',
]
// The options parse() formats with (src/utils/parser.js).
const PRETTIER = {
  semi: false,
  printWidth: 1000,
  singleQuote: true,
  jsxBracketSameLine: true,
  parser: 'babel-ts',
  plugins: [babelParser],
}

function convert(args: string[]) {
  const dir = tempDir()
  const out = path.join(dir, 'out.jsx')
  const r = run([writeModel(dir), '--output', out, ...args])
  return { ...r, jsx: r.code === 0 ? fs.readFileSync(out, 'utf8') : '' }
}

test('--help lists --formatlimit (convert-svf refuses a build without it)', () => {
  const r = run(['--help'])
  assert.equal(r.code, 0)
  assert.match(r.stdout, /--formatlimit/)
})

test('at or under the limit the output is exactly the formatted output', () => {
  const formatted = convert(PIPELINE)
  assert.equal(formatted.code, 0, formatted.stderr)
  const under = convert([...PIPELINE, '--formatlimit', '100000000'])
  assert.equal(under.code, 0, under.stderr)
  assert.equal(under.jsx, formatted.jsx)
})

test('over the limit the JSX is left unformatted, and prettier turns it into the formatted bytes', async () => {
  const formatted = convert(PIPELINE)
  const raw = convert([...PIPELINE, '--formatlimit', '0'])
  assert.equal(raw.code, 0, raw.stderr)
  assert.notEqual(raw.jsx, formatted.jsx)
  assert.ok(raw.jsx.endsWith('\n'))
  assert.equal(await prettier.format(raw.jsx, PRETTIER), formatted.jsx)
})

test('the unformatted JSX loads and preloads the URL single-quoted, as the formatted one does', () => {
  const raw = convert([...PIPELINE, '--formatlimit', '0'])
  assert.equal(raw.jsx.split(`useGLTF('${URL}')`).length - 1, 1)
  assert.equal(raw.jsx.split(`useGLTF.preload('${URL}')`).length - 1, 1)
})

test('a URL with quotes and backslashes stays one valid literal in the unformatted JSX', async () => {
  const url = `https://example.invalid/it's/"a"\\b.gltf`
  const out = await parse(mixedScene(1, 12, { lettersOnly: true }), { fileName: 'model.gltf', url, formatlimit: 0 })
  const literal = out.match(/useGLTF\.preload\(('(?:[^'\\]|\\.)*')\)/)![1]
  assert.equal(new Function(`return ${literal}`)(), url)
})

test('parse() formats a larger scene only under the limit', async () => {
  const scene = () => mixedScene(2, 60, { lettersOnly: true })
  const options = { fileName: 'model.gltf', url: URL, keepnames: true, keepgroups: true, meta: true }
  const formatted = await parse(scene(), options)
  assert.equal(await parse(scene(), { ...options, formatlimit: 10_000_000 }), formatted)
  const raw = await parse(scene(), { ...options, formatlimit: 1000 })
  assert.equal(await prettier.format(raw, PRETTIER), formatted)
})

test('a --formatlimit that is not a non-negative integer is a usage error (exit 2)', () => {
  for (const value of ['-1', '1.5', 'many']) {
    const r = convert([...PIPELINE, '--formatlimit', value])
    assert.equal(r.code, 2, value)
    assert.match(r.stderr, /--formatlimit must be a non-negative integer/)
  }
})
