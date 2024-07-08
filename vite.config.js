/*
 * @Author: yilong
 * @Date: 2024-07-08 10:36:56
 * @LastEditors: yilong
 * @LastEditTime: 2024-07-08 11:36:31
 * @Descripttion: 
 */
import path from "path"
import { defineConfig } from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { terser } from 'rollup-plugin-terser'

const packagesPath = path.join(process.cwd(), './packages')
const rootDir = path.join(packagesPath, 'slate-vue-next')

export default defineConfig({
	resolve: {
		extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
	},
	plugins: [
		vueJsx(),
		terser({
			output: {
				comments: false
			}
		}),
	],
	base: './',
	// optimizeDeps: {
  //   include: ['slate-vue-shared'],
  // },
	build: {
		rollupOptions: {
			input: path.join(rootDir, 'index.ts'),
			output: {
				dir: path.join(rootDir, 'dist'),
				entryFileNames: 'index.es.js',
				format: 'es'
			}
		},
		// commonjsOptions: {
    //   include: ['/packages/slate-vue-shared/', /node_modules/],
    // },
	}
})