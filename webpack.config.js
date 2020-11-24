const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  // 入口文件
  entry: {
    app: "./src/index.js",
    print: "./src/print.js",
  },
  // 输出
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  // 管理非js资源文件的处理
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader", // 将 JS 字符串生成为 style 节点
          },
          {
            loader: "css-loader", // 将 CSS 转化成 CommonJS 模块
          },
          {
            loader: "sass-loader", // 将 Sass 编译成 CSS
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"],
      },
    ],
  },
  // 插件
  plugins: [
    // 会重新生成一个index.html文件(如果我们更改了我们的一个入口起点的名称，甚至添加了一个新的名称，但是我们的index.html文件仍然会引用旧的名字)
    new HtmlWebpackPlugin({
      title: "Output Management",
    }),
    // 清理dist文件
    new CleanWebpackPlugin(),
  ],
};
