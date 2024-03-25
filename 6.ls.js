const fs = require('node:fs')
//en los call back siempre el error es el primer parametro
//asi obliga a pensar que el error esta esperando
fs.readdir('-', (err,files) => {
    if (err) {
        console.error('Error al leer el directorio: ', err)
        return
    }
    files.forEach(file => {
        console.log(file)
    })
})