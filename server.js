//1. crear la dependencia a express
const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const listEndpoints = require('express-list-endpoints')

//dependencia de rutas
const  bootcampRoutes = require('./routes/BootcampRoutes')
const  courseRoutes = require('./routes/CourseRoutes')
const  userRoutes = require('./routes/UserRoutes')
const { use } = require('./routes/BootcampRoutes')

//conectar a db
connectDB()

//definiendo archivo .env
dotenv.config({
    path: './config/config.env'
})
//2. cear el objeto aplicacion con express
const app = express()

//habilitar express para tratar content-type json
app.use(express.json())

//relacionar rutas de aplicacion
app.use('/api/v1/bootcamps' , bootcampRoutes)
app.use('/api/v1/courses' , courseRoutes)
app.use('/api/v1/users' , userRoutes)

//primera ruta de prueba
app.get('/' , (request , response )=>{
  response.send('ruta funcional')
})

//consultar endpoints el proyecto
console.log(listEndpoints(app))

//3. iniciar el devserver
app.listen(process.env.PORT , ()=>{
    console.log('servidor iniciado'.bgGreen.blue)
})