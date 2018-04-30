const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(jpg|png|gif|svg|pdf|ico)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[name]-[hash:8].[ext]',
              useRelativePath: true,
              limit: 8000,
            },
          },
        ],
      },
    ],
  },
});
