const http = require('node:http') // protocolo HTTP
const fs = require('node:fs')

const desiredPort = process.env.PORT ?? 1234
// si la url es = a / entonces has que el status code de la respuesta sea 200
const processRequest = (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8')

  if (req.url === '/') {
    res.statusCode = 200 // ok
    res.end('<h1>Bienvenido a mi página web</h1>')
  } else if (req.url === '/contacto') {
    res.statusCode = 200 // ok
    res.end('<h1>Contacto</h1>')
  }else if(req.url === '/imagen-super-bonita.png'){
    
    fs.readFile('./placa.png', (err, data) =>{
      if (err) {
        res.statusCode = 500
        res.end('<h1>500 internal server error</h1>')
      }else {
        res.setHeader('Content-Type', 'image/png')
        res.end(data)
      }
    })
  } 
  else {
    res.statusCode = 404 // not found
    res.end('<h1>404</h1>')
  }
}

const server = http.createServer(processRequest)

server.listen(desiredPort, () => {
  console.log(`server listening on port http://localhost:${desiredPort}`)
})
