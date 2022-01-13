// CommonJS 语法写法

const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app){
  // api 遇到api前缀的请求，就会触发该代理设置
  app.use('/api', createProxyMiddleware(
    {
      target:'http://localhost:5000', // 请求转发给谁
      changeOrigin: true, // 控制服务器收到的请求头中Host的值
      pathRewrite: {
        '^/api': '' // 重写请求路径
      }
    }
  ))
}