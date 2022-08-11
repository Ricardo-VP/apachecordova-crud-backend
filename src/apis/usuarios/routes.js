const { Router } = require('express')

const {
  getAllUsers,
  postCreateUser,
  putUpdateUser,
  deleteUser,
  deleteAllUsers,
} = require('./controller')

const usuariosRouter = Router()

usuariosRouter.get('/', getAllUsers)
usuariosRouter.post('/', postCreateUser)
usuariosRouter.put('/:userId', putUpdateUser)
usuariosRouter.delete('/:userId', deleteUser)
usuariosRouter.delete('/', deleteAllUsers)

module.exports = usuariosRouter
