const { app, BrowserWindow } = require('electron')
const path = require('path')

let win;

const createWindow = () => {
  win = new BrowserWindow({ width: 600, height: 800 })
  let template = path.resolve(__dirname, '../dist/index.html')
  win.webContents.openDevTools()

  const indexUrl = `file://${template}`;
  win.loadURL(indexUrl)
  
  win.on('close', () => {
    win = null
  })
}

app.on('ready', createWindow)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})