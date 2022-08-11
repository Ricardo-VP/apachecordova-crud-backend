const moongose = require('mongoose')

const usuarioSchema = moongose.Schema(
  {
    fullname: String,
    username: String,
    password: String,
    celular: String,
    email: String,
    fechaNac: Date,
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

const UsuarioModel = moongose.model('usuarios', usuarioSchema)

module.exports = UsuarioModel
