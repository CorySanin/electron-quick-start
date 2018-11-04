// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const ipc = require('electron').ipcRenderer
let elements = {}
let toggle = false

window.onload = function(){
  elements['width'] = document.getElementById('width')
  elements['height'] = document.getElementById('height')
  elements['resize'] = document.getElementById('resize')

  elements['resize'].onclick = function(){
    ipc.send('resize', {
      width:parseInt(elements['width'].value),
      height:parseInt(elements['height'].value)
    })
    if(toggle){
      elements['width'].value = "250"
      elements['height'].value = "250"
    }
    else{
      elements['width'].value = "600"
      elements['height'].value = "600"
    }
    toggle = !toggle
  }
}
