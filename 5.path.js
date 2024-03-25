const path = require('node:path')
//barra separadora de carpetas segun SO
console.log(path.sep)
//unir rutas con path.join
const filepath = path.join('content', 'subfolder','test.txt')
console.log(filepath)

const base = path.basename('/tnp/yo/aaa-secret-files/password.txt')
console.log(base)

const filename = path.basename('/tnp/yo/aaa-secret-files/password.txt', '.txt')
console.log(filename)

const extension = path.extname('my.super.image.jpg')
console.log(extension)

