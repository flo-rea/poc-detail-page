var path = require('path');
var webpack = require('webpack');

module.exports = {
  /*
   * client.ts(x) represents the entry point to your web application. Webpack will
   * recursively go through every "require" statement in client.ts(x) and
   * efficiently build out the application's dependency tree.
   */
  entry: ['./src/main.ts'],
  target: 'web',
  devtool: 'cheap-module-eval-source-map',
  output: {
    path: './build',
    filename: 'client.js'
  },

  /*
   * resolve lets Webpack now in advance what file extensions you plan on
   * "require"ing into the web application, and allows you to drop them
   * in your code.
   */
  resolve: {
    extensions: ['', '.ts', '.tsx', '.js']
  },

  module: {
    /*
     * Each loader needs an associated Regex test that goes through each
     * of the files you've included (or in this case, all files but the
     * ones in the excluded directories) and finds all files that pass
     * the test. Then it will apply the loader to that file. I haven't
     * installed ts-loader yet, but will do that shortly.
     */
    loaders: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  }
};
