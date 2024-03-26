// Esto del promisify solo se usa en el caso de que NO exista la promesa
// const { promisify } = require('node:util')
// const readFilePromise = promisify(fs.readFile)

const fs = require('node:fs/promises')

// Async

console.log('Leyendo el primer archivo')
fs.readFile('./archivo.txt', 'utf-8')// aqui en vez de call back, se ocupan promesas
  .then(text => {
    console.log('Primer texto:', text)
  })
// cuando readfile devuelva
// y se resuelva la promesa entonces haces el console log del texto
console.log('Leyendo el segundo archivo')
fs.readFile('./archivo2.txt', 'utf-8')
  .then(text => {
    console.log('Segundo texto:', text)
  })
