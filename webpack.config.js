const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const GasPlugin = require('gas-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const destination = 'dist';

const copyRules = [
  {
    from: './app/**/*.html',
    flatten: true,
    to: path.resolve(__dirname, destination)
  },
  {
    from: './appsscript.json',
    to: path.resolve(__dirname, destination)
  },
  {
    from: './app/vendor/*.gs',
    flatten: true,
    to: path.resolve(__dirname, destination)
  }
];

module.exports = {
  context: __dirname,
  entry: './app/index.js',
  output: {
    filename: 'code.js',
    path: path.resolve(__dirname, destination),
    libraryTarget: 'this'
  },
  resolve: {
    extensions: ['.js']
  },
  optimization: {
    minimizer: [new UglifyJSPlugin()]
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          cache: true,
          failOnError: false
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin([destination]),
    new CopyWebpackPlugin(copyRules),
    new GasPlugin()
  ]
};
