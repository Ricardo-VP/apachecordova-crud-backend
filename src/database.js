const moongose = require('mongoose')

const { DB_URI } = require('./config')

moongose
  .connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to the database')
  })
  .catch((error) => {
    console.log(error)
  })
