import babel from '@rollup/plugin-babel'
import terser from '@rollup/plugin-terser'

export default {
  input: './index.js',
  plugins: [
    babel({ babelHelpers: 'bundled' }),
    terser()
  ],
  external: ['vue'],
  output: {
    format: 'es',
    name: 'vueColorDetect',
    file: 'dist/vue-color-detect.min.js',
    globals: {
      vue: 'Vue'
    }
  }
}
