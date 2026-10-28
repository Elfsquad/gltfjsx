// Types for the vendored Draco loader (DRACOLoader.js), covering what this package uses.
import * as THREE from 'three'

export class DRACOLoader {
  constructor(manager?: THREE.LoadingManager)
  // Replaced by gltfjsx.ts: the structure loader never decodes geometry.
  static getDecoderModule: () => unknown
}
