/*
 * @Author: Stevie
 * @Date: 2021-06-14 23:10:50
 * @LastEditTime: 2021-07-29 15:55:49
 * @LastEditors: Stevie
 * @Description:
 */
const path = require('path')
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const base = require('./webpack.base')

const devConfig = {
  mode: 'development',
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    port: 7080,
    host: 'localhost',
    compress: false,
    open: true,
  },
  devtool: 'eval-cheap-module-source-map',
  plugins: [new webpack.HotModuleReplacementPlugin()],
}

module.exports = merge(base, devConfig)
