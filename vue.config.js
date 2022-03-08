const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    devServer: {
      proxy: {
        '/proxy': {
          target: 'http://127.0.0.1:8012/',
          changeOrigin: true,//改变源
          ws: true,//跨域
          pathRewrite: {
            '^/proxy':''
          }
        }
      }
    }
  }
})
