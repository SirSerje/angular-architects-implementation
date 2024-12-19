
const { defineConfig } = require('@rspack/cli')
const { ModuleFederationPlugin } = require('@module-federation/enhanced/rspack');
const rspack = require('@rspack/core');
const CopyPlugin = rspack.CopyRspackPlugin

module.exports = defineConfig({
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    publicPath: 'auto',
    uniqueName: 'mfe4',
    hashFunction: 'xxhash64'
  },
  cache: true,
  devtool: false,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            cacheCompression: false,
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      }
    ]
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'react',
      filename: 'remoteEntry.js',
      exposes: {
        './web-components': './app.js'
      },
      shared: ['react', 'react-dom']
    }),
    new CopyPlugin({
      patterns: [{ from: './*.html' }]
    })
  ],
  devServer: {
    port: 4204
  }
})

