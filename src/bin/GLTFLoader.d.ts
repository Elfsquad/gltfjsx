// Types for the vendored structure loader (GLTFLoader.js), covering what this package uses.
import * as THREE from 'three'
import type { DRACOLoader } from './DRACOLoader.js'

export interface GLTF {
  scene: THREE.Group
  scenes: THREE.Group[]
  animations: THREE.AnimationClip[]
  cameras: THREE.Camera[]
  asset: { version: string; extras?: Record<string, unknown> }
  parser: { json: { asset?: { extras?: Record<string, unknown> } } }
  userData: Record<string, unknown>
}

export class GLTFLoader extends THREE.Loader {
  constructor()
  load(
    url: string,
    onLoad: (gltf: GLTF) => void,
    onProgress?: (event: ProgressEvent) => void,
    onError?: (error: unknown) => void
  ): void
  setDRACOLoader(dracoLoader: DRACOLoader): this
  parse(
    data: ArrayBuffer | string,
    path: string,
    onLoad: (gltf: GLTF) => void,
    onError?: (error: unknown) => void
  ): void
}
