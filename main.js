const { app, BrowserWindow, TouchBar, nativeTheme, BrowserView, Notification } = require('electron')
const { TouchBarLabel, TouchBarButton, TouchBarSpacer } = TouchBar
const path = require('path')

const touchbtn = new TouchBar({
  items : [
    new TouchBarButton({label: "🤖", click: () => {
      console.log("Beep Boop")
    }}),
    new TouchBarSpacer({ size: 'large' }),
  ]
})

function createWindow () {
  const win = new BrowserWindow({
    width: 1200,
    height: 1000,
    webPreferences: {
      spellcheck: true,
      webviewTag: true, 
      preload: path.join(__dirname, 'preload.js')
    }
  })
  win.loadFile('index.html')
  win.setTouchBar(touchbtn)
}

function showNotification () {
  new Notification({ title: "Welcome to Microbrowser", body: "Thanks for activating the Notifications" }).show()
}

app.whenReady().then(() => {
  createWindow()
}).then(showNotification)

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})