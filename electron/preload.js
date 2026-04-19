const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('api', {

  loadJSON: () => ipcRenderer.invoke('load-json'),
  saveJSON: (data) => ipcRenderer.invoke('save-json', data)

})