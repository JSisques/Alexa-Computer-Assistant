require('dotenv').config();

const logger = require('./src/util/logger.js')

const express = require('express')
const app = express()
const port = process.env.PORT

app.listen(port, () => {
  logger.info("Server runnig at port " + port)
  logger.debug("Server runnig at port " + port)
  logger.warn("Server runnig at port " + port)
  logger.error("Server runnig at port " + port)
})