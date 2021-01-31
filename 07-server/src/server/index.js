const express = require('express')
const path = require('path')
const { render } = require('../../dist/build-server')
const app = new express()

app.get('/', (req, res) => {
  const str = `
  <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>SPA Test</title>
    </head>
    <body>
      <div id="app">${render()}</div>
      <script src="./build-browser.js"></script>
    </body>
    </html>
  `
  res.send(str)
})

app.use(express.static(path.resolve(__dirname, '../../dist')))

app.listen(3000, function() {
  console.log('app listening on port 3000')
})