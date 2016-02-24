var fs = require('fs')
var cat = fs.readFileSync(__dirname + '/cat.jpg', 'hex')
cat = new Buffer(cat.toString(), 'hex').toString('base64')
cat = 'data:image/jpeg;base64,' + cat
var img = document.createElement('img')
img.setAttribute('src', cat)
img.setAttribute('class', 'cat-picture')
document.body.appendChild(img)
module.exports = img