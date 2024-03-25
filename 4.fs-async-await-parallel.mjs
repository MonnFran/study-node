//Esto del promisify solo se usa en el caso de que NO exista la promesa
//const { promisify } = require('node:util')
//const readFilePromise = promisify(fs.readFile)

import { readFile } from 'node:fs/promises'

//Async

Promise.all([
    readFile('./archivo.txt'),//lectura primer archivo
    readFile('./archivo2.txt')//lectura segundo archivo
]).then(([text,secondText])=>{
    console.log('Primer texto', text),
    console.log('Segundo texto', secondText)
}) 
//cuando se resuelva
//me vas a leer los dos archivos entonces continuas
