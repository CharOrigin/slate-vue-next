/*
 * @Author: yilong
 * @Date: 2024-07-08 10:36:56
 * @LastEditors: yilong
 * @LastEditTime: 2024-07-09 17:22:16
 * @Descripttion: 
 */
import { resolve } from "path"
import { defineConfig } from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
	resolve: {
		extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
	},
	// plugins: [
	// 	vueJsx(),
	// ],
	build: {
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