// The large-model gate (DESIGN.md §5.2 (c)): 100,000 numeric-named meshes through parse() with
// the pipeline's options, within the 120 s budget the design proposes for the CI runner.
// Not part of `npm test` (it needs about a minute of CPU and 2 GB of memory):
//   npm run test:scale
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { parseCpuMs } from '../scale.ts'

test('parse() on 100,000 numeric-named meshes stays within 120 s of CPU', async () => {
  const { ms, out } = await parseCpuMs(100_000)
  console.error(`parse() on 100,000 meshes: ${Math.round(ms)} ms of CPU`)
  assert.ok(ms < 120_000, `took ${ms} ms of CPU`)
  assert.match(out, /name="199999"/)
  assert.match(out, /userData=\{\{ id: '199999' \}\}/)
})
