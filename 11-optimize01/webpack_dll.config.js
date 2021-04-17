const path = require('path')
const DllPlugin = require('webpack/lib/DllPlugin')

module.exports = {
  entry: {
    react: ['react', 'react-dom'],
    utils: ['lodash', 'moment']
  },
  mode: 'production',
  output: {
    filename: '[name].dll.js',
    path: path.resolve(__dirname, './manifest'),
    library: '_dll_[name]'
  },
  plugins: [
    new DllPlugin({
      name: '_dll_[name]',
      path: path.join(__dirname, 'manifest', '[name].manifest.json')
    })
  ]
}