const UsuarioModel = require('./model/Usuario')

const getAllUsers = async (req, res) => {
  return await UsuarioModel.find({})
    .then((usuarios) => {
      return res.send({
        type: 'success',
        usuarios,
      })
    })
    .catch((error) => {
      console.log(error)
      return res.status(500).send({
        type: 'error',
        message: 'Error getting users',
      })
    })
}

const postCreateUser = async (req, res) => {
  const { name, phone, address } = req.body
  const user = new UsuarioModel({ name, phone, address })

  return await UsuarioModel.create(user)
    .then(() => {
      return res.send({
        type: 'success',
        message: 'User saved successfully',
      })
    })
    .catch((error) => {
      console.log(error)
      return res.send({
        type: 'error',
        message: 'Error creating the user',
      })
    })
}

const putUpdateUser = async (req, res) => {
  const { userId } = req.params
  const user = req.body

  return await UsuarioModel.findByIdAndUpdate(userId, user, { new: true })
    .then((updatedUser) => {
      return res.send({
        type: 'success',
        user: updatedUser,
      })
    })
    .catch((error) => {
      console.log(error)
      return res.send({
        type: 'error',
        message: `Error updateing the user with id <${userId}>`,
      })
    })
}

const deleteUser = async (req, res) => {
  const { userId } = req.params

  return await UsuarioModel.findByIdAndDelete(userId)
    .then((result) => {
      if (result) {
        return res.send({
          type: 'success',
          message: 'User deleted successfully',
        })
      }
      return res.send({
        type: 'error',
        message: `User with id <${userId}> not found`,
      })
    })
    .catch((error) => {
      console.log(error)
      return res.send({
        type: 'error',
        message: `Error deleting the user with id <${userId}>`,
      })
    })
}

module.exports = {
  getAllUsers,
  postCreateUser,
  putUpdateUser,
  deleteUser,
}
