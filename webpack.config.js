module.exports = {
  entry: './src/App.js',
  output: {
    filename: './build/bundle.js'
  },
  module: {
    loaders : [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react', 'stage-0']
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json']
  }
};
