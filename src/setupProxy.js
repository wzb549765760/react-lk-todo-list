const proxy = require('http-proxy-middleware')

module.exports = function(app) {
  // ...You can now register proxies as you wish!
  app.use(
    proxy('/hsDeposit', {
      target: 'http://192.168.1.155:3000',
      changeOrigin: true,
      pathRewrite: {
        '/hsDeposit': ''
      }
    })
  )
}
