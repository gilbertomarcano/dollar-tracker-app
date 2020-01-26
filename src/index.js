function showVersions() {
    document.write(
        'We are using node ' + process.versions.node +
        ', Chrome ' + process.versions.chrome  +
        ' and Electron ' + process.versions.electron
    )
}

const electron = require('electron')
const path = require('path')
const BrowserWindow = electron.remote.BrowserWindow
const {dialog} = require('electron')

const notifyBtn = document.getElementById('notifyBtn')

notifyBtn.addEventListener('click', function(event) {
    const modalPath = path.join('file://', __dirname, 'add.html')
    let win = new BrowserWindow({ frame: false, transparent: true, alwaysOnTop: true, width: 400, height: 200})
    win.on('close', function() { win = null })
    win.loadURL(modalPath)
    win.show()
})