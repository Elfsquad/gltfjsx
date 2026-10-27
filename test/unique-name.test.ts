import { test } from 'node:test'
import assert from 'node:assert/strict'
import createUniqueName from '../src/utils/uniqueName.ts'
import { rng } from './scenes.ts'

// The algorithm parser.js used up to f4fbfa2, kept verbatim as the reference: a scan over every
// name handed out so far, once per attempted suffix.
function referenceUniqueName() {
  const geometries: Record<number, { name: string }> = {}
  let key = 0
  function uniqueName(attempt: string, index = 0): string {
    const newAttempt = index > 0 ? attempt + index : attempt
    if (Object.values(geometries).find(({ name }) => name === newAttempt) === undefined) return newAttempt
    else return uniqueName(attempt, index + 1)
  }
  return (attempt: string) => {
    const name = uniqueName(attempt)
    geometries[key++] = { name }
    return name
  }
}

test('uniqueName hands out the same names as the reference scan', () => {
  // Bases that end in digits collide with other bases' suffixes ('A' + 11 === 'A1' + 1), the
  // case where resuming from a remembered suffix could go wrong.
  const bases = ['', '', '', 'A', 'A1', 'A11', 'B', 'Part', 'Part1', '1', '11']
  for (const seed of [1, 2, 3, 4, 5]) {
    const next = rng(seed)
    const fast = createUniqueName()
    const reference = referenceUniqueName()
    for (let i = 0; i < 400; i++) {
      const base = bases[Math.floor(next() * bases.length)]!
      assert.equal(fast(base), reference(base), `seed ${seed}, call ${i}, base '${base}'`)
    }
  }
})

test('uniqueName on 100k identical bases is linear (the old scan was cubic)', () => {
  const uniqueName = createUniqueName()
  const start = process.cpuUsage()
  for (let i = 0; i < 100_000; i++) assert.equal(uniqueName(''), i === 0 ? '' : String(i))
  const { user, system } = process.cpuUsage(start)
  // The reference needs about 5e14 comparisons here; the Set needs about 1e5 operations.
  assert.ok(user + system < 2_000_000, `took ${(user + system) / 1000} ms of CPU`)
})
