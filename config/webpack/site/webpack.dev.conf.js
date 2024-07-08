/*
 * @Author: yilong
 * @Date: 2024-07-08 09:02:52
 * @LastEditors: yilong
 * @LastEditTime: 2024-07-08 14:25:42
 * @Descripttion: 
 */
const merge = require('webpack-merge');
const base = require('./webpack.base.conf')

module.exports = merge(base ,{
  mode: 'development',
  devServer: {
    open: true,
		static: "../../../site/public",
    historyApiFallback: true
  }
})
