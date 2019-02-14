module.exports = {
    entry: './src/main.js',
    output: {
      filename: './app.min.js'
    },
    mode:'production',
    module: {
  rules: [
    {
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }
  ]
}
  };