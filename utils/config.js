require('dotenv-flow').config()


const PORT = process.env.PORT
const SECRET = process.env.SECRET

module.exports = {
  PORT,
  SECRET
}
