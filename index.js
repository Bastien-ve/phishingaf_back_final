
const express = require('express')
const personsRouter = require('./routes/routes')
const middlewares = require('./utils/middlewares')
const {PORT} = require('./utils/config')
const cors = require('cors')


let corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};

// Create and init server
const app = express()

app.use(express.json())
app.use(cors(corsOptions))
app.use('/', personsRouter)

/*app.use(middlewares.logger)
app.use(middlewares.attachCurrentuser)*/



app.use(middlewares.errorHandler)

console.log(PORT)
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
