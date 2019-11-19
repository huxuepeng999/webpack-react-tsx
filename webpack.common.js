const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack')

module.exports = {
  entry: {
    app: './src/index.tsx'
  },
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '/'
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: '模版',
      template: './src/index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.ts|tsx?$/,
        exclude: /node_modules/,//不解析node_modules
        loader: 'ts-loader'
      },
      {
        test: /\.[(png)|(obj)|(json)]$/,
        loader: "file-loader" 
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: [{
            loader: "style-loader" // 将 JS 字符串生成为 style 节点
        }, {
            loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
        }, {
            loader: "sass-loader" // 将 Sass 编译成 CSS
        }]
      }
    ]
  },
};