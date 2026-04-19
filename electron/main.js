const { app, BrowserWindow, ipcMain, globalShortcut } = require('electron')
const path = require('path')
const fs = require('fs')
const os = require('os')
const platform = os.platform()

let win;

let iconPath = '';

if (platform === 'win32') {
  iconPath = path.join(__dirname, 'assets/icons/win/icon.ico')
} else if (platform === 'darwin') {
  iconPath = path.join(__dirname, 'assets/icons/mac/icon.icns')
} else {
  iconPath = path.join(__dirname, 'assets/icons/linux/icon.png') // 👈 ESTE
}

function createWindow() {

  console.log(iconPath)

  // win = new BrowserWindow({
  //   width: 1200,
  //   height: 800,
  //   webPreferences: {
  //     preload: path.join(__dirname, 'preload.js'),
  //     contextIsolation: true,
  //     nodeIntegration: false
  //   }
  // })

  win = new BrowserWindow({
    width: 1200,
    height: 800,
    icon: iconPath,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false
    }
  })

  //quitar pestañas de ventana
  win.setMenu(null)

  const isDev = process.env.NODE_ENV === 'development'
  console.log("IS DEV", isDev)
  if (isDev) {

    win.loadURL('http://localhost:5173')

  } else {

    win.loadFile(path.join(__dirname, '../dist/index.html'))

  }

  // const isDev = !app.isPackaged

  // if (isDev) {
  //   win.loadURL('http://localhost:5173')
  // } else {
  // win.loadFile(path.join(__dirname, '../dist/index.html'))
  // }

  // Abrir DevTools para debug apenas abre la app
  // win.webContents.openDevTools()

}

app.whenReady().then(() => {

  createWindow()

  // Activar para desarrollo
  // globalShortcut.register('F12', () => {
  //   win.webContents.openDevTools()
  // })

})

// 📥 cargar JSON
ipcMain.handle('load-json', async () => {

  // activar para desarrollo
  // const filePath = path.join(__dirname, '../data/menu.json')
  // desactivar para desarrollo
  const filePath = path.join(app.getPath('userData'), 'menu.json')
  const data = fs.readFileSync(filePath, 'utf-8')
  return JSON.parse(data)
})

// 💾 guardar JSON
ipcMain.handle('save-json', async (_, json) => {

  // activar para desarrollo
  // const filePath = path.join(__dirname, '../data/menu.json')
  // desactivar para desarrollo
  const filePath = path.join(app.getPath('userData'), 'menu.json')

  fs.writeFileSync(filePath, JSON.stringify(json, null, 2))
  return true

})