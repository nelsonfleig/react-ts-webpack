const webpack = require('webpack');

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  plugins: [
    // you can also use a webpack plugin to load env (see dotenv-webpack)
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('nelson-dev'),
    }),
  ],
};
