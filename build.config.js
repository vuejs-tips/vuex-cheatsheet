module.exports = {
  html: {
    template: './src/index.html' // custom html
  },
  webpack: {
    devtool: false, // disable sourcemap
    output: {
      publicPath: ''
    },
    resolve: {
      alias: {
        '@': 'src' // shortcut to avoid ../../..
      }
    }
  }
}
