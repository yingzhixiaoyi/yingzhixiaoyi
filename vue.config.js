module.exports = {
  devServer: {
    port: 8888,
  },
  lintOnSave: false,
  outputDir: 'docs',
  publicPath: "./",
  assetsDir: "static",
  indexPath: "index.html",
  filenameHashing: true,
  chainWebpack: config => {
    config.module
      .rule("md")
      .test(/\.md$/)
      .use("html-loader")
      .loader("html-loader")
      .end()
      .use("markdown-loader")
      .loader("markdown-loader")
      .end()
    
  }
};
