const { app, screen } = require('electron')
const { BrowserWindow, ipcMain } = require('electron')
class WindowManager {
  cosntructor () {
    this.windows = {}
  }
  createNew(name, url, options = {}) {
    this.windows = this.windows || {}
    let a = {
      webPreferences: {
        nodeIntegration: true
      },
      show: false,
      transparent: true,
      frame: false,
      titleBarStyle: 'customButtonsOnHover',
      x: options.x || 10,
      y: options.y || 10,
      width: options.width || 100,
      height: options.width || 100 }
    console.log(a)
    this.windows[name] = new BrowserWindow(
      a
    )
    this.windows[name].loadFile(url)
    return this.windows[name]
  }
  show(screenName) {
    this.windows[screenName].show()
  }
  resize (name, height, width) {

  }
}
ipcMain.on('stickToSide', (event, side) => {

  let screenWidth = screen.getPrimaryDisplay().bounds.width
  let windowWidth = manager.windows.test.getBounds().width
  if(side === 'left') {
    manager.windows.test.setBounds({x: 0}, true)
  } else {
    manager.windows.test.setBounds({x: screenWidth - windowWidth}, true)
  }
})
ipcMain.on('toggle', (event,args) => {
  console.log('got toggle')
  manager.windows.test.setBounds(args, true)
})

let manager
function createWindow () {
  manager = new WindowManager()
  manager.createNew('test', 'index.html', {
    height: 400,
    width: 200,
    x: 100,
    y: 100,

  })
  manager.show('test')
}
app.on('ready', createWindow)
