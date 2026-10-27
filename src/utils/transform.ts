import { Logger, NodeIO, type Transform } from '@gltf-transform/core'
import {
  simplify,
  flatten,
  dequantize,
  reorder,
  join,
  weld,
  sparse,
  dedup,
  resample,
  prune,
  textureCompress,
  draco,
  palette,
  unpartition,
} from '@gltf-transform/functions'
import { ALL_EXTENSIONS } from '@gltf-transform/extensions'
import { MeshoptDecoder, MeshoptEncoder, MeshoptSimplifier } from 'meshoptimizer'
import { ready as resampleReady, resample as resampleWASM } from 'keyframe-resample'
import draco3d from 'draco3dgltf'

export interface TransformOptions {
  console?: boolean | undefined
  resolution?: number | undefined
  degrade?: string | undefined
  degraderesolution?: number | undefined
  keepmaterials?: boolean | undefined
  keepmeshes?: boolean | undefined
  simplify?: boolean | undefined
  ratio?: number | undefined
  error?: number | undefined
  format?: string | undefined
}

type TextureFormat = 'webp' | 'avif' | 'png' | 'jpeg'

async function transform(file: string, output: string, config: TransformOptions = {}): Promise<void> {
  // Imported here, not at the top: sharp is an optional dependency, and a missing one must only
  // break --transform, not every run.
  const { default: sharp } = await import('sharp')
  await MeshoptDecoder.ready
  await MeshoptEncoder.ready
  const io = new NodeIO().registerExtensions(ALL_EXTENSIONS).registerDependencies({
    'draco3d.decoder': await draco3d.createDecoderModule(),
    'draco3d.encoder': await draco3d.createEncoderModule(),
    'meshopt.decoder': MeshoptDecoder,
    'meshopt.encoder': MeshoptEncoder,
  })
  if (config.console) io.setLogger(new Logger(Logger.Verbosity.ERROR))
  else io.setLogger(new Logger(Logger.Verbosity.WARN))

  const document = await io.read(file)
  const resolution = config.resolution ?? 1024
  const normalResolution = Math.max(resolution, 2048)
  const degradeResolution = config.degraderesolution ?? 512
  const functions: Transform[] = [unpartition()]

  if (!config.keepmaterials) functions.push(palette({ min: 5 }))

  functions.push(
    reorder({ encoder: MeshoptEncoder }),
    dedup(),
    // This seems problematic ...
    // instance({ min: 5 }),
    flatten(),
    dequantize() // ...
  )

  if (!config.keepmeshes) {
    functions.push(
      join() // ...
    )
  }

  functions.push(
    // Weld vertices
    weld()
  )

  if (config.simplify) {
    functions.push(
      // Simplify meshes
      simplify({ simplifier: MeshoptSimplifier, ratio: config.ratio ?? 0, error: config.error ?? 0.0001 })
    )
  }

  functions.push(
    resample({ ready: resampleReady, resample: resampleWASM }),
    prune({ keepAttributes: false, keepLeaves: false }),
    sparse()
  )

  if (config.degrade) {
    // Custom per-file resolution
    functions.push(
      textureCompress({
        encoder: sharp,
        pattern: new RegExp(`^(?=${config.degrade}).*$`),
        targetFormat: config.format as TextureFormat,
        resize: [degradeResolution, degradeResolution],
      }),
      textureCompress({
        encoder: sharp,
        pattern: new RegExp(`^(?!${config.degrade}).*$`),
        targetFormat: config.format as TextureFormat,
        resize: [resolution, resolution],
      })
    )
  } else {
    // Keep normal maps near lossless
    functions.push(
      textureCompress({
        slots: /^(?!normalTexture).*$/, // exclude normal maps
        encoder: sharp,
        targetFormat: config.format as TextureFormat,
        resize: [resolution, resolution],
      }),
      textureCompress({
        slots: /^(?=normalTexture).*$/, // include normal maps
        encoder: sharp,
        targetFormat: 'jpeg',
        resize: [normalResolution, normalResolution],
      })
    )
  }

  functions.push(draco())

  await document.transform(...functions)
  await io.write(output, document)
}

export default transform
