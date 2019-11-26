/* filtrar por los datos de un array / enum */
var whiteList = ['css', 'js'];

var events = [{
  file: 'css/style.css',
  type: 'css'
}, {
  file: 'js/app.js',
  type: 'js'
}, {
  file: 'index/html.html',
  type: 'html'
}];

var fileList = events.filter(function(event) {
  return whiteList.indexOf(event.type) > -1
})
console.log(fileList)


