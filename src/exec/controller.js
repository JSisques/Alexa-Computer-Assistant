const model = require('./model')
const logger = require("../util/logger")

module.exports = {

   async execCommand(req, res) {

       var command = req.params.COMMAND
       logger.info("Comando de la petición: " + command)

       var result = await model.execCommand(command)
       console.log(result)

       return res.send(result)
   }
}