var  path    = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: {},
  module: {
    loaders: [
    { test: /\.js$/, exclude: [/app\/lib/, /node_modules/], loader: 'ng-annotate!babel' },
    { test: /\.html$/, exclude: [/app\/lib/, /node_modules/], loader: 'raw' },
    { test: /\.(scss|sass)$/, exclude: [/app\/lib/, /node_modules/], loader: 'style!css!autoprefixer-loader!sass' },
    { test: /\.css$/, loader: 'style!css!autoprefixer-loader' },
    {
      test: /\.(jpe?g|png|gif|svg)$/i,
      exclude: [/app\/lib/, /node_modules/],
      loaders: [
        'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
        'image-webpack-loader?bypassOnDebug'
      ]
    },
    { test: /\.(woff|woff2|ttf|eot)(\?v=[a-z0-9]\.[a-z0-9]\.[a-z0-9])?$/, loader: 'url?limit=1&name=[hash].[ext]' }
    ]
  },
  imageWebpackLoader: {
    gifsicle: {
      interlaced: false
    },
    optipng: {
      optimizationLevel: 3
    },
  },
  plugins: [
    // Injects bundles in your index.html instead of wiring all manually.
    // It also adds hash to all injected assets so we don't have problems
    // with cache purging during deployment.
    new HtmlWebpackPlugin({
      template: 'client/index.html',
      inject: 'body',
      hash: true
    }),

    // Automatically move all modules defined outside of application directory to vendor bundle.
    // If you are using more complicated project structure, consider to specify common chunks manually.
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module, count) {
        return module.resource && module.resource.indexOf(path.resolve(__dirname, 'client')) === -1;
      }
    })
  ]
};
