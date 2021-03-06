const path = require('path')

module.exports = {
  entry: './example/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    path: path.resolve(__dirname, 'example'),
    filename: 'index.js',
  },
  optimization: {
    minimize: false,
  },
}
