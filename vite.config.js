/*
 * @Author: yilong
 * @Date: 2024-07-08 10:36:56
 * @LastEditors: yilong
 * @LastEditTime: 2024-07-08 15:19:26
 * @Descripttion: 
 */
import path from "path"
import { defineConfig } from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vue from '@vitejs/plugin-vue'
import { terser } from 'rollup-plugin-terser'

const packagesPath = path.join(process.cwd(), './packages')
const rootDir = path.join(packagesPath, 'slate-vue-next')

export default defineConfig({
	resolve: {
		extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
	},
	plugins: [
		// vue(),
		vueJsx(),
		terser({
			output: {
				comments: false
			}
		}),
	],
	base: './',
	build: {
		rollupOptions: {
			input: path.join(rootDir, 'index.ts'),
			output: {
				dir: path.join(rootDir, 'dist'),
				entryFileNames: 'index.es.js',
				format: 'esm'
			}
		}
	}
})