const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const { EnvironmentPlugin } = require('webpack');
// const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
// const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'development',
  entry: {
    main: path.resolve(__dirname, './src/index.ts'),
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack Boilerplate',
      template: path.resolve(__dirname, './src/template.html'), // template file
      filename: 'index.html', // output file
    }),
    // new CleanWebpackPlugin(),
    // new EnvironmentPlugin({
    //   NODE_ENV: 'development',
    // }),
    // new NodePolyfillPlugin(),
    // // new Dotenv(),
  ],
  module: {
    rules: [
      {
        test: /\.([cm]?ts|tsx)$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
      },
      // {
      //   test: /\.(scss|css)$/,
      //   use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      // },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
    fallback: {
      fs: false,
      os: false,
      path: false,
    },
  },
  target: 'web',
  node: {
    __dirname: false,
  },
};
