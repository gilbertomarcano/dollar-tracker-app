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

const notifyBtn = document.getElementById('notifyBtn')
var price = document.querySelector('h1')
var targetPrice = document.getElementById('targetPrice')

function getUSD(url, success) {

    var ud = '_' + +new Date,
        script = document.createElement('script'),
        head = document.getElementsByTagName('head')[0] 
               || document.documentElement;

    window[ud] = function(data) {
        head.removeChild(script)
        success && success(data)
    }

    script.src = url.replace('callback=?', 'callback=' + ud);
    head.appendChild(script);
}

function getAPI(url) {
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET", url, false);
    Httpreq.send(null);
    return Httpreq.responseText;          
}

function getUSD() {
    api = JSON.parse(getAPI('https://s3.amazonaws.com/dolartoday/data.json'))
    console.log(api)
    console.log(api.USD.transferencia)
    var current_price = api.USD.transferencia
    price.innerHTML = 'Bs. ' + current_price.toLocaleString('en')
}

getUSD()
setInterval(getUSD, 30000)


notifyBtn.addEventListener('click', function(event) {
    const modalPath = path.join('file://', __dirname, 'add.html')
    let win = new BrowserWindow({ frame: false, transparent: true, alwaysOnTop: true, width: 400, height: 200})
    win.on('close', function() { win = null })
    win.loadURL(modalPath)
    win.show()
})