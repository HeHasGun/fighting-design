import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import vueSetupExtend from 'unplugin-vue-setup-extend-plus/vite'

export default defineConfig({
  plugins: [vue(), vueSetupExtend()],
  build: {
    outDir: resolve(__dirname, 'dist/dist'),
    lib: {
      entry: resolve(__dirname, 'packages/fighting-design/index.d.ts'),
      name: 'FightingDesign',
      formats: ['umd'],
      fileName: (target) => {
        return `index.${target}.js`
      }
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        format: 'umd',
        globals: {
          vue: 'Vue'
        }
      }
    },
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  }
})
