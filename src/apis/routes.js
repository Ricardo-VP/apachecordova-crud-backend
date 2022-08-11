const { Router } = require('express')

const usuariosRouter = require('./usuarios/routes')

const routes = Router()

routes.use('/usuarios', usuariosRouter)

module.exports = routes
