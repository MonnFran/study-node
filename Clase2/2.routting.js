const http = require('node:http')

// commonJS -> modulos clásicos de node
const dittoJSON = require('./pokemon/ditto.json')

const processRequest = (req, res) => {
  const { method, url } = req

  switch (method) {
    case 'GET':
      switch (url) {
        case '/pokemon/ditto':

          res.setHeader('Content-Type','application/json; charset=utf-8')
          return res.end(JSON.stringify(dittoJSON))
        default:
          res.statusCode = 404
          res.setHeader('Content-Type','text/html; charset=utf-8')
          return res.end('<h1>404</h1>')
      }

    case 'POST':
      switch (url){
        case '/pokemon': {
          let body = ''
          //escuchar el evento data, a medida que data llegue, ira agregando la info
          //mientras la req va recibiendo datos, los voy guardando en chunk
          //chunk es buffer porque va recibiendo binarios
          req.on('data', chunk =>{
            body += chunk.toString()
          })
          req.on('end', ()=>{
            const data =JSON.parse(body)
            //aqui se puede llamar a una bd para poder guardar la info
            res.writeHead(201,{'Content-Type': 'application/json; charset=utf-8'})
            res.end(JSON.stringify(data))
          })

          break
        }
      }
  }
}

const server = http.createServer(processRequest)

server.listen(1234, () => {
  console.log('server listening on port http://localhost:1234')
})