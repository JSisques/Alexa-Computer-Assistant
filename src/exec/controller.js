const model = require('./model')
const logger = require("../util/logger")

module.exports = {

   async execCommand(req, res) {

       var command = req.params.COMMAND
       command = process.env.COMMAND_MAC_CHROME
       logger.info(`Comando de la petición: "` + command + `"`)

       var result = await model.execCommand(command)
       console.log("Resultado: " + result.stdout)

       return res.send(result)
   }
}