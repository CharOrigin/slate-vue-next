/*
 * @Author: yilong
 * @Date: 2024-07-08 10:36:56
 * @LastEditors: yilong
 * @LastEditTime: 2024-07-09 17:32:40
 * @Descripttion: 
 */
import { resolve } from "path"
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
	resolve: {
		extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
	},
	plugins: [
		vue(),
	],
	root: 'site'
})