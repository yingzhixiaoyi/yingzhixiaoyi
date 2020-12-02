## vue.config.js 配置

```
module.exports = {
  devServer: {
    port: 8888,//端口号
  },
  lintOnSave: false,//关闭eslint检查
  publicPath: "./",//基本路径
  assetsDir: "static",//放置生成的静态资源 (js、css、img、fonts) 的目录
  outputDir: 'docs',//输出文件目录
  indexPath: "index.html",//指定生成的 index.html 的输出路径 (相对于 outputDir)
  filenameHashing: true,//文件名哈希
  chainWebpack: config => {//是一个函数，允许对内部的 webpack 配置进行更细粒度的修改。
    config.module
      .rule('md')
      .test(/\.md$/)
      .use('html-loader')
      .loader('html-loader')
      .end()
      .use('markdown-loader')
      .loader('markdown-loader')
      .end()
  }
}
```

