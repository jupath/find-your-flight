const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [
      {
        test: /\.(pdf|jpg|png|gif|svg|ico)$/,
        use: [
          {
            loader: 'url-loader',
          },
        ],
      },
    ],
  },
  devServer: {
    proxy: {
      '/token': {
        target: 'http://localhost:3000/',
        secure: 'false',
      },
    },
    contentBase: path.resolve(__dirname, 'public'),
    historyApiFallback: true,
  },
});
