require('dotenv').config();

const logger = require('./src/util/logger.js')

const express = require('express')
const app = express()
const port = process.env.PORT

app.use(require('./src/exec/router'))

app.listen(port, () => {
  logger.info(`Server initialized, runnig at port ${port}`)
  logger.debug("Server operating system " + process.env.APP_OS)
})