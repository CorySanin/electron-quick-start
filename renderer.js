// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
let elements = {}
let toggle = false

window.onload = function(){
  elements['width'] = document.getElementById('width')
  elements['height'] = document.getElementById('height')
  elements['resize'] = document.getElementById('resize')

  elements['resize'].onclick = function(){
    window.api.ResizeWindow(parseInt(elements['width'].value), parseInt(elements['height'].value));
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
