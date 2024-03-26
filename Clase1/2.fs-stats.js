// FS significa File System

const fs = require('node:fs')

const stats = fs.statSync('./archivo.txt')

console.log(
  stats.isFile(), // si es un fichero
  stats.isDirectory(), // si es un directorio
  stats.isSymbolicLink(), // sie s un enlace simbolico
  stats.size// tamaño en bytes
)
