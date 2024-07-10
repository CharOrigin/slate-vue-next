/*
 * @Author: yilong
 * @Date: 2024-07-08 10:36:56
 * @LastEditors: yilong
 * @LastEditTime: 2024-07-10 10:52:34
 * @Descripttion: 
 */
import { resolve } from "path"
import { defineConfig } from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
	resolve: {
		extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
	},
	plugins: [
		vueJsx(),
	],
	build: {
		sourcemap: true,
		lib: {
			entry: resolve(__dirname, "packages/slate-vue-next/index.ts"),
			name: "slate-vue-next",
			fileName: format => `index.${format}.js`
		},
		rollupOptions: {
			external: ["vue"],
			output: {
				globals: {
					vue: "Vue"
				}
			}
		},
		outDir: resolve(__dirname, "packages/slate-vue-next/dist"),
	}
})