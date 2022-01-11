const { app, BrowserWindow, ipcMain, nativeTheme, BrowserView } = require('electron')
const path = require('path')

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 1000,
    webPreferences: {
     
      webviewTag: true, 
      preload: path.join(__dirname, 'preload.js')
    }
  })

  win.loadFile('index.html')


  ipcMain.handle('dark-mode:toggle', () => {
    console.log("hallo")
  })

  ipcMain.handle('dark-mode:system', () => {
    nativeTheme.themeSource = 'system'
  })
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})