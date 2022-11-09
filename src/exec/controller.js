const model = require('./model')
const logger = require("../util/logger")
const command = require("../entities/commandMac")

module.exports = {

   async execCommand(req, res) {

       var reqCommand = req.params.COMMAND
       var reqCommand = command[reqCommand]
       logger.info(`Comando de la petición: "` + reqCommand + `"`)

       var result = await model.execCommand(reqCommand)
       console.log("Resultado: " + result.stdout)

       return res.send(result)
   }
}