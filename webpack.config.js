const webpack = require('webpack');

module.exports = {
  module: {
    rules: [{
      test: /\.coffee$/,
      use: [ 'coffee-loader' ]
    },{
      test: require.resolve('jquery'),
      use: [{
        loader: 'expose-loader',
        options: '$',
      }]
    }]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
    })
  ],
};