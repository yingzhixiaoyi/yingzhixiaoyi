
const CompressionWebpackPlugin = require("compression-webpack-plugin");
// 可加入需要的其他文件类型，比如json
// 图片不要压缩，体积会比原来还大
const productionGzipExtensions = ["js", "css"];

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

  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === "production") {
      return {
        plugins: [
          new CompressionWebpackPlugin({
            // filename: '[path].gz[query]',
            algorithm: "gzip",
            test: new RegExp("\\.(" + productionGzipExtensions.join("|") + ")$"),
            threshold: 10240, //对超过10k的数据进行压缩
            minRatio: 0.6 // 压缩比例，值为0 ~ 1
          })
        ]
      };
    }
  }
};
