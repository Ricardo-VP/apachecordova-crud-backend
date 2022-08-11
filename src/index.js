// modules
const express = require('express') // para servidores
const cors = require('cors') // para recibir o enviar info a otros puertos
const logger = require('morgan') // para darle formato a los logs y enviarlos
const bodyParser = require('body-parser')
require('dotenv').config() //utilizar archivo .env para config

// routes module
const routes = require('./apis/routes') // seleccionar la dirección de las rutas+

// config
const port = process.env.PORT || 5000 // conseguir el valor del puerto en el .env y si no existe utiliza el puerto 3000 como predeterminado
const app = express() // iniciar la app de express

// database
require('./database')

// middlewares
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())
app.use(logger('short'))

// routes
app.use('/api', routes)

app.listen(port, () => {
  console.log(`Server running on port: ${port}`)
})
