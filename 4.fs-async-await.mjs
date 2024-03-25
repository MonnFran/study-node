//Esto del promisify solo se usa en el caso de que NO exista la promesa
//const { promisify } = require('node:util')
//const readFilePromise = promisify(fs.readFile)

import { readFile } from 'node:fs/promises'

//Async

//IIFE - Inmediatly Invoked Function Expression
;(
    async () => {
        console.log('Leyendo el primer archivo')
        const text = await readFile('./archivo.txt', 'utf-8')
        console.log('Primer texto', text)

        console.log('Leyendo el segundo archivo')
        const secondText = await readFile('./archivo2.txt', 'utf-8')
        console.log('Segundo texto', secondText)
    }
)()