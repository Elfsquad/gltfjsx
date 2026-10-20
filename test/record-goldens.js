// Records test/golden/*.jsx from the parser as it is now. Run it only on a parser whose output
// is the reference (it was run on upstream f4fbfa2 before the uniqueName change):
//   node test/record-goldens.js
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import parse from '../src/utils/parser.js'
import { mixedScene, OPTION_SETS, SEEDS, SIZES } from './scenes.js'

const dir = path.join(path.dirname(fileURLToPath(import.meta.url)), 'golden')
fs.mkdirSync(dir, { recursive: true })
for (const [setName, { options, lettersOnly }] of Object.entries(OPTION_SETS))
  for (const seed of SEEDS)
    for (const size of SIZES) {
      const out = await parse(mixedScene(seed, size, { lettersOnly }), { fileName: 'model.gltf', header: 'golden', ...options })
      fs.writeFileSync(path.join(dir, `${setName}-${seed}-${size}.jsx`), out)
    }
