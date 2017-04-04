const express = require('express')
const webpack = require('webpack')
const config = require('../config')
const webpackConfig = require('./webpack.dev.conf')
const compiler = webpack(webpackConfig)
const devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: config.dev.assetsPublicPath
})
const hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: () => {}
})
const app = express()

console.log('> Server starting...')

devMiddleware.waitUntilValid(() => {
  require('opn')(config.dev.uri + ':' + config.dev.port)
})

app.use(devMiddleware)
app.use(hotMiddleware)

app.listen(config.dev.port)
