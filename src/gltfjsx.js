import 'jsdom-global'
import fs from 'fs'
import path from 'path'
import transform from './utils/transform.js'

import { GLTFLoader } from './bin/GLTFLoader.js'
import { DRACOLoader } from './bin/DRACOLoader.js'
DRACOLoader.getDecoderModule = () => {}
import parse from './utils/parser.js'

const gltfLoader = new GLTFLoader()
gltfLoader.setDRACOLoader(new DRACOLoader())

function toArrayBuffer(buf) {
  var ab = new ArrayBuffer(buf.length)
  var view = new Uint8Array(ab)
  for (var i = 0; i < buf.length; ++i) view[i] = buf[i]
  return ab
}

function roundOff(value) {
  return Math.round(value * 100) / 100
}

function getFileSize(file) {
  const stats = fs.statSync(file)
  let fileSize = stats.size
  let fileSizeKB = roundOff(fileSize * 0.001)
  let fileSizeMB = roundOff(fileSizeKB * 0.001)
  return {
    size: fileSizeKB > 1000 ? `${fileSizeMB}MB` : `${fileSizeKB}KB`,
    sizeKB: fileSizeKB,
  }
}

export default function (file, output, options) {
  function getRelativeFilePath(file) {
    const filePath = path.resolve(file)
    const rootPath = options.root ? path.resolve(options.root) : path.dirname(file)
    const relativePath = path.relative(rootPath, filePath) || ''
    if (process.platform === 'win32') return relativePath.replace(/\\/g, '/')
    return relativePath
  }

  // Settles exactly once: resolves after the JSX is written (or printed with --console), rejects on
  // a missing input, an unreadable or unparsable file, a loader error or a parser error. The
  // output file is written only on success, so a failed run leaves no empty or partial file.
  return new Promise((resolve, reject) => {
    async function run() {
      let size = ''
      // Process GLTF
      if (output && path.parse(output).ext === '.tsx') options.types = true
      if (options.transform || options.instance || options.instanceall) {
        const { name } = path.parse(file)
        const outputDir = path.parse(path.resolve(output ?? file)).dir
        const transformOut = path.join(outputDir, name + '-transformed.glb')
        await transform(file, transformOut, options)
        const { size: sizeOriginal, sizeKB: sizeKBOriginal } = getFileSize(file)
        const { size: sizeTransformed, sizeKB: sizeKBTransformed } = getFileSize(transformOut)
        size = `${file} [${sizeOriginal}] > ${transformOut} [${sizeTransformed}] (${Math.round(
          100 - (sizeKBTransformed / sizeKBOriginal) * 100
        )}%)`
        file = transformOut
      }
      const filePath = getRelativeFilePath(file)
      const data = fs.readFileSync(file)
      checkExternalBuffers(data, file)
      const arrayBuffer = toArrayBuffer(data)
      gltfLoader.parse(
        arrayBuffer,
        '',
        async (gltf) => {
          try {
            const jsx = await parse(gltf, { fileName: filePath, size, ...options })
            if (options.console) console.log(jsx)
            else fs.writeFileSync(path.resolve(output), jsx)
            resolve()
          } catch (e) {
            reject(e)
          }
        },
        (reason) => reject(reason instanceof Error ? reason : new Error(String(reason)))
      )
    }

    if (!fs.existsSync(file)) reject(new Error(file + ' does not exist.'))
    else run().catch(reject)
  })
}

// The structure loader never reads buffer bytes, so a .gltf whose external buffer is missing
// would still print JSX and exit 0 for a model that cannot load. Check the files exist.
function checkExternalBuffers(data, file) {
  if (data.subarray(0, 4).toString('latin1') === 'glTF') return // GLB: the loader checks it
  let json
  try {
    json = JSON.parse(data.toString('utf8'))
  } catch (e) {
    throw new Error(`${file} is not valid glTF JSON: ${e.message}`)
  }
  for (const buffer of json.buffers ?? []) {
    if (typeof buffer.uri !== 'string' || buffer.uri.startsWith('data:')) continue
    const bufferPath = path.resolve(path.dirname(file), decodeURIComponent(buffer.uri))
    if (!fs.existsSync(bufferPath)) throw new Error(`${file}: buffer "${buffer.uri}" does not exist.`)
  }
}
