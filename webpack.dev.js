const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const webpack = require('webpack');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  mode:'development',
  output:{
    path: path.resolve(__dirname, './dist')
    ,filename: 'js/[name].dev.js'
    ,publicPath: "http://localhost:9000"
  },
  devServer: {
    // 这个意思是服务器要生成在哪个文件夹下
    contentBase: './dist',
    port:9000
  },
  plugins: [
    
    // new webpack.HotModuleReplacementPlugin()
  ],
});