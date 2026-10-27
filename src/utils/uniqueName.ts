/**
 * Returns a `uniqueName(attempt)` that hands out `attempt`, `attempt1`, `attempt2`, … the first
 * candidate not handed out before, exactly as the old linear scan over `duplicates.geometries`
 * did, but in O(1) amortised time per call.
 *
 * The old scan was O(n) per candidate and probed every suffix from 0, so a model whose mesh
 * names all reduce to the same base (SVF dbIds are digits, and the caller strips non-letters,
 * leaving '') cost O(n^3) overall: 1,000 meshes took about a minute.
 *
 * Equivalence: names are never released, so every suffix below the one last handed out for a
 * base was taken when it was probed and is still taken; resuming from `next[base]` skips only
 * candidates the old scan would have rejected.
 */
export default function createUniqueName(): (attempt: string) => string {
  const used = new Set<string>()
  const next = new Map<string, number>()
  return function uniqueName(attempt: string): string {
    let index = next.get(attempt) ?? 0
    let candidate = index > 0 ? attempt + index : attempt
    while (used.has(candidate)) {
      index++
      candidate = attempt + index
    }
    used.add(candidate)
    next.set(attempt, index + 1)
    return candidate
  }
}
