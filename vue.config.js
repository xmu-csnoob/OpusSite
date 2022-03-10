const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    devServer: {
      proxy: {
        '/city': {
          target: 'https://restapi.amap.com/v3/ip',
          changeOrigin: true,//改变源
          ws: true,//跨域
          pathRewrite: {
            '^/city':''
          }
        },
        '/weather': {
          target: 'https://restapi.amap.com/v3/weather/weatherInfo',
          changeOrigin: true,//改变源
          ws: true,//跨域
          pathRewrite: {
            '^/weather':''
          }
        }
      }
    }
  }
})
