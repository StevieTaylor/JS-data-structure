/*
 * @Author: Stevie
 * @Date: 2021-06-14 23:11:02
 * @LastEditTime: 2021-07-29 15:56:01
 * @LastEditors: Stevie
 * @Description:
 */
const base = require('./webpack.base')
const { merge } = require('webpack-merge')
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin')

const prodConfig = {
  mode: 'production',
  devtool: 'hidden-source-map',
  plugins: [
    new ParallelUglifyPlugin({
      test,
      include,
      exclude,
      cacheDir,
      sourceMap,
      uglifyJS: {
        warning: false,
      },
    }),
  ],
}

module.exports = merge(base, prodConfig)
