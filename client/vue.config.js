module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost:5001',
      },
    }
  },

  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = "Quizdini Games!";
        return args
      })
  },

  outputDir: '../server/public'
}