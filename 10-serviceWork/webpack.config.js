const path = require('path')
const fs = require('fs')

const getEntry = () => {
  return fs.readdirSync(path.resolve(__dirname, './src/pages')).reduce((p, item) => {
    const [name, _] = item.split('.')

    return { ...p, [name]: path.join(path.resolve(__dirname, './src/pages'), item)}
  }, {})
}

module.exports = {
  entry: getEntry(),
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, './dist/')
  },

}