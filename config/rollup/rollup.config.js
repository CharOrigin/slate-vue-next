import path from "path"
import babel from '@rollup/plugin-babel'
import json from '@rollup/plugin-json';
import typescript from 'rollup-plugin-typescript3';
import css from 'rollup-plugin-css-only'
import VuePlugin from 'rollup-plugin-vue'
import shebang from 'rollup-plugin-preserve-shebang';
import externals from 'rollup-plugin-node-externals'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
// minify generated es bundle
import { terser } from "rollup-plugin-terser";

const packagesPath = path.join(process.cwd(), './packages')
const rootDir = path.join(packagesPath, 'slate-vue-next')

export default {
  input: path.join(rootDir, 'index.ts'),
  plugins: [
    json(),
    shebang(),
    externals({
      builtins: true
    }),
    css(),
    resolve({
      extensions: ['.vue', '.ts', '.tsx']
    }),
    typescript({
      exclude: "node_modules/**",
      // find tsconfig in every package
      tsconfig: path.join(rootDir, 'tsconfig.json'),
    }),
    commonjs(),
    VuePlugin({css: false}),
    terser(),
    babel({
      babelrc: false,
      configFile: false,
      babelHelpers: 'bundled',
      extensions: ['.js', '.tsx', '.ts', 'jsx', '.vue'],
      presets: [["@vue/babel-preset-app",  {
        modules: false,
        useBuiltIns: false
      }]],
      plugins: []
    })
  ],
  output: {
    file: '../../dist/index.es.js',
    format: 'es',
    sourcemap: true
  }
}
