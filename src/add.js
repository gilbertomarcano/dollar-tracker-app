closeBtn = document.getElementById('closeBtn')

closeBtn.addEventListener('click', function(event) {
    close()
})


const ipc = require('electron').ipcRenderer

const updateBtn = document.getElementById('updateBtn')

updateBtn.addEventListener('click', function() {
    ipc.send('update-notify-value', document.getElementById('notifyVal').value)
    close()
})
