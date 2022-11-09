const express = require('express');
const controller = require('./controller')

const router = express.Router();

//router.get('/exec', controller.allQuotes)
router.get('/exec/:COMMAND', controller.execCommand)

module.exports = router