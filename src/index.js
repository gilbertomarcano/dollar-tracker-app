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
const axios = require('axios')
const ipc = require('electron').ipcRenderer

const notifyBtn = document.getElementById('notifyBtn')
var price = document.querySelector('h1')
var targetPrice = document.getElementById('targetPrice')
var targetPriceVal;

const notification = {
    title: 'USD Alert',
    body: 'USD just beat your target price!',
    icon: path.join(__dirname, '../assets/images/usd.png')
}

function getUSD() {
    axios.get('https://s3.amazonaws.com/dolartoday/data.json')
        .then(res => {
            const current_price = res.data.USD.transferencia
            price.innerHTML = 'Bs. ' + current_price.toLocaleString('en')

            if (targetPrice.innerHTML != '' && targetPriceVal < res.data.USD.transferencia) {
                const myNotification = new window.Notification(notification.title, notification)
            }
        })
}
getUSD()
setInterval(getUSD, 60000)


notifyBtn.addEventListener('click', function(event) {
    const modalPath = path.join('file://', __dirname, 'add.html')
    let win = new BrowserWindow({
        frame: false,
        transparent: true, 
        alwaysOnTop: true, 
        width: 400, 
        height: 240,
        webPreferences: {
            nodeIntegration: true
        }
    })
    win.on('close', () => { 
        win = null 
    })
    win.loadURL(modalPath)
    win.show()
    // win.webContents.openDevTools()
})

ipc.on('targetPriceVal', function (event, arg) {
    targetPriceVal = Number(arg)
    targetPrice.innerHTML = 'Bs. ' + targetPriceVal.toLocaleString('en')
})