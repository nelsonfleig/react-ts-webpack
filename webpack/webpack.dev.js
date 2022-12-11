const webpack = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  mode: 'development',
  devServer: {
    hot: true,
    open: true,
  },
  devtool: 'cheap-module-source-map',
  plugins: [
    // you can also use a webpack plugin to load env (see dotenv-webpack)
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('nelson-dev'),
    }),
    new ReactRefreshWebpackPlugin(),
  ],
};
