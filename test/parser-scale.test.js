import { test } from 'node:test'
import assert from 'node:assert/strict'
import { parseCpuMs } from './scale.js'

// Runs in `npm test`. Before the uniqueName fix, 500 such meshes took 24 s and 5,000 would take
// hours; now 5,000 take about 1 s of CPU.
test('parse() on 5,000 numeric-named meshes stays within 30 s of CPU', async () => {
  const { ms, out } = await parseCpuMs(5_000)
  assert.ok(ms < 30_000, `took ${ms} ms of CPU`)
  assert.match(out, /name="104999"/)
})
