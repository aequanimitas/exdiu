const path = require('path')

module.exports = {
  build: {
    assetsRoot: path.resolve(__dirname, '../dist')
  },
  dev: {
    port: 4001,
    uri: 'http://localhost',
    assetsPublicPath: '/'
  }
}
