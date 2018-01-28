const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
    extensions: ['.js', '.jsx', '.json', '.css', '.scss'],
    modules: ['node_modules']
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: ['env', 'react']
        }
      }, {
        loader: 'eslint-loader',
        options: {
          enforce: 'pre'
        }
      }]
    },{
      test: /\.s?css/,
      exclude: /node_modules/,
      use: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader']
    }]
  },
  plugins: [
    require('autoprefixer'),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      title: 'Blocks',
      favicon: './public/favicon.ico'
    }),
    // to 指定的路径是相对于 output.path 而言的
    new CopyWebpackPlugin([{
      from: 'public/blockly_compressed.js',
      to: 'blockly_compressed.js'
    }, {
      from: 'public/blocks_compressed.js',
      to: 'blocks_compressed.js'
    },{
      from: 'public/zh-hans.js',
      to: 'zh-hans.js'
    }])
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    compress: true,
    // host: 'localhost',
    // port: 8081,
    // proxy: 'http://localhost:8087',
    open: 'Safari', // true 或者 浏览器名称 'Google Chrome', 'Firefox', 'Safari'
    // headers: { // 为所有响应添加额外的头信息
    //   'X-Custom-Foo': 'bar'
    // }
  }
};
