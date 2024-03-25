//Cosas de programacion relacionadas con el proceso actual
//argumentos de entrada
//process=objeto global con informacion y metodos para manejar mejor el proceso de creacion
console.log(process.argv) //argumentos que recibe la linea de codigo

//se puede controlar el proceso y su salida
// 0 todo ha ido bien y el proc ha ido bien,
//1 algo salio mal, se pueden controlar eventos del proceso

//process.exit(1)  //--> NO EJECUTAR ANTES DEL PROCESO, ahi se acaba

//control de eventos del proceso

/*process.on('exit', () =>{
    //limpiar los recursos
})*/

//ver el directorio de trabajo actual(current working directory)
console.log(process.cwd())

//platform
//variables de entorno

console.log(process.env.PEPITO)

//podemos pasarle cualquiera y definir la variable en la terminal, hay varias
