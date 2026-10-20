// parse() must keep producing the bytes upstream f4fbfa2 produced for these synthetic scenes
// (test/golden, recorded by test/record-goldens.js before any change to the parser).
import { test } from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import parse from '../src/utils/parser.js'
import { mixedScene, OPTION_SETS, SEEDS, SIZES } from './scenes.js'

const dir = path.join(path.dirname(fileURLToPath(import.meta.url)), 'golden')

for (const [setName, { options, lettersOnly }] of Object.entries(OPTION_SETS))
  for (const seed of SEEDS)
    for (const size of SIZES) {
      const file = `${setName}-${seed}-${size}.jsx`
      test(`parse() output equals the upstream golden ${file}`, async () => {
        const out = await parse(mixedScene(seed, size, { lettersOnly }), { fileName: 'model.gltf', header: 'golden', ...options })
        assert.equal(out, fs.readFileSync(path.join(dir, file), 'utf8'))
      })
    }
