//Sync

/*const fs = require('node:fs')

console.log('Leyendo el primer archivo')
const text = fs.readFileSync('./archivo.txt','utf-8')
console.log(text)

console.log('Leyendo el segundo archivo')
const secondtext = fs.readFileSync('./archivo2.txt','utf-8')
console.log(secondtext)*/

//Async

console.log('Leyendo el primer archivo')
fs.readFile('./archivo.txt','utf-8', (err,text)=>{
    console.log(text)
})//callback son funciones que se ejecutan cuando la tarea termino


console.log('Leyendo el segundo archivo')
fs.readFile('./archivo2.txt','utf-8', (err,text)=>{
    console.log(text)
})//callback son funciones que se ejecutan cuando la tarea termino

//aqui lo que se dice es que lea el archivo, codifique y ejecute la funcion cuando termine