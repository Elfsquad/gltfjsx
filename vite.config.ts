import path from 'node:path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

/**
 * Library build for Node: ESM only, two entries, types emitted next to them.
 *
 * `src/index.ts` is the library (`parse` and `GLTFStructureLoader`) and `src/cli.ts` is the
 * `gltfjsx` bin. Tests and local runs use
 * the .ts sources directly under Node's type stripping; dist/ exists because Node does not strip
 * types inside node_modules, so the published package must carry JS.
 *
 * Every bare import is a dependency the consumer installs and is left external; only this
 * package's own modules are bundled.
 */
export default defineConfig({
  plugins: [
    dts({
      include: ['src'],
      // The bin has no importable API.
      exclude: ['src/cli.ts'],
      entryRoot: 'src',
      // The vendored loaders are JS with hand-written .d.ts files next to them.
      copyDtsFiles: true,
      // The sources import each other as `.ts`, which only resolves for a consumer that sets
      // allowImportingTsExtensions. Point the declarations at the `.js` they sit next to.
      beforeWriteFile: (filePath, content) => ({
        filePath,
        content: content.replace(/(from '\.{1,2}\/[^']*)\.ts'/g, "$1.js'"),
      }),
    }),
  ],
  build: {
    target: 'node24',
    sourcemap: true,
    minify: false,
    lib: {
      entry: { index: 'src/index.ts', cli: 'src/cli.ts' },
      formats: ['es'],
      fileName: (_format, name) => `${name}.js`,
    },
    rollupOptions: {
      external: (id) => !id.startsWith('.') && !path.isAbsolute(id),
      output: {
        // Shared modules land here rather than beside the entries, so nothing can be mistaken
        // for a public entry point that `exports` does not list.
        chunkFileNames: 'chunks/[name]-[hash].js',
      },
    },
  },
})
