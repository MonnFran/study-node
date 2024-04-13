const express = require('express')
const crypto = require('node:crypto')
const movies = require('./movies.json')

const { validateMovie, movieSchema, validatePartialMovie } = require('./schemas/movies')


const app = express()
app.use(express.json())
app.disable('x-powered-by')

//todos los recursos que sean movies se idetifican con /movies
app.get('/movies',(req,res)=>{
    const {genre} = req.query
    if (genre) {
        const filteredMovies = movies.filter(
            movie => movie.genre.some(g => g.toLowerCase() === genre.toLowerCase)
        )
        return res.json(filteredMovies)
    }
    res.json(movies)
})

//parametros de una url
app.get('/movies/:id', (req,res) =>{ //path-to-regex, es una biblioteca
    const {id} = req.params
    const movie = movies.find(movie => movie.id === id)
    if (movie) return res.json(movie)

res.status(404).json({message: 'Movie not found'})
})

app.post('/movies',(req,res) =>{

    const result = validateMovie(req.body)

    if (result.error){
        return res.status(400).json({error: JSON.parse(result.error.message)})
    }
    //base de datos
    const newMovie = { 
        id: crypto.randomUUID(),
        ...result.data 
    }
    //esto no seria rest porque estamos guardando stado en la memoria
    movies.push(newMovie)
    
    res.status(201).json(newMovie)
})

app.patch('/movies/:id', (req,res) =>{
    const result = validatePartialMovie(req.body)

    if (!result.success){
        return res.status(400).json({ error: JSON.parse(result.error.message)})
    }

    const {id} = req.params
    const movieIndex = movies.findIndex(movie => movie.id === id)

    if(movieIndex === -1){
        return res.status(404).json({message: 'Movie not found'})
    }
    const updateMovie = {
        ...movies[movieIndex],
        ...result.data
    }

    movies[movieIndex] = updateMovie

    return res.json(updateMovie)
})

const PORT = process.env.PORT ?? 1234

app.listen(PORT, () =>{
    console.log(`servidor escuchando en http://localhost:${PORT}`)
})