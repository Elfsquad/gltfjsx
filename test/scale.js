// Shared by the parse() scale tests: how much CPU parse() spends on `count` meshes that are all
// named by numeric dbIds. CPU time, not wall time, so a loaded machine or CI runner does not
// fail the budget; the old uniqueName() was cubic in CPU, which this still catches.
import parse from '../src/utils/parser.js'
import { numericScene } from './scenes.js'

// The options convert-svf passes (DESIGN.md §2.1 step 4).
export const PIPELINE_OPTIONS = { keepnames: true, keepgroups: true, meta: true, shadows: true, precision: 3 }

export async function parseCpuMs(count) {
  const scene = numericScene(count)
  const start = process.cpuUsage()
  const out = await parse(scene, { fileName: 'https://example.invalid/model.gltf', ...PIPELINE_OPTIONS })
  const { user, system } = process.cpuUsage(start)
  return { ms: (user + system) / 1000, out }
}
