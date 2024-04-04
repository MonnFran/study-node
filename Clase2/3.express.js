const express = require('express')
const dittoJSON = require('./pokemon/ditto.json')
const PORT = process.env.PORT ?? 1234

const app = express()

app.disable('x-powered-by')
app.use(express.json())
/*app.use((req,res,next)=>{
    console.log('mi primer middleware')
    //trackear la request a la bd
    //revisar si el usuario tiene cookies
    //se puede crear un middleware que envuelva a todas las peticiones
    if (req.method !== 'POST') return next()
    if (req.headers['content-type'] !== 'application/json') next()

    let body = ''
    req.on('data', chunk =>{
        body += chunk.toString()
      })
      req.on('end', ()=>{
        const data =JSON.parse(body)
        data.timestamp = Date.now()
        //mutar la request y meter la info en el req.body
        req.body = data
        next()
      })
})*/

//cuando la app recibe un get en esta ruta entonces ejecutas lo siguiente
app.get('/pokemon/ditto',(req,res)=>{
    res.json(dittoJSON)
})

app.post('/pokemon', (req,res)=>{
    res.status(201).json(req.body)
})
//como va en orden, y no encuentra nada que se asemeje, este, al ser la ultima
//dara como error el 404
app.use((req,res)=>{
    res.status(404).send('<h1>404</h1>')
})

app.listen(PORT, () =>{
    console.log(`server listening on port http://localhost:${PORT}`)
})
