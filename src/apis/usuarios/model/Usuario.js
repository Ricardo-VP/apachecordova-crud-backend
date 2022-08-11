const moongose = require('mongoose')

const usuarioSchema = moongose.Schema(
  {
    name: String,
    phone: String,
    address: {
      street: String,
      city: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

const UsuarioModel = moongose.model('usuarios', usuarioSchema)

module.exports = UsuarioModel
