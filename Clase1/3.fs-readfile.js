const fs = require('node:fs')

// Async

console.log('Leyendo el primer archivo')
fs.readFile('./archivo.txt', 'utf-8', (err, text) => {
  console.log(text)
})// callback son funciones que se ejecutan cuando la tarea termino

console.log('benjita')
console.log('Leyendo el segundo archivo')
fs.readFile('./archivo2.txt', 'utf-8', (err, text) => {
  console.log(text)
})// callback son funciones que se ejecutan cuando la tarea termino

// aqui lo que se dice es que lea el archivo, codifique y ejecute la funcion cuando termine
