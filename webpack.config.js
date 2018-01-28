const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
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
      loader: 'babel-loader',
      options: {
        presets: ['env', 'react']
      }
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      title: 'Blocks',
      favicon: './public/favicon.ico'
    }),
    // to 指定的路径是相对于 output.path 而言的
    new CopyWebpackPlugin([{
      from: 'public/blockly_compressed.js',
      to: 'blockly_compressed.js'
    },{
      from: 'public/blocks_compressed.js',
      to: 'blocks_compressed.js'
    }])
  ]
}