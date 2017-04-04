const webpack = require('webpack')
const config = require('../config')
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    app: './src/main.js'
  },
  resolve: {
    extensions: ['.js', '.vue']
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: config.dev.assetsPublicPath
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('src'), resolve('test')],
        options: {
          formatter: require('eslint-friendly-formatter')
        } 
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  }
}
