const model = require('./model')
const logger = require("../util/logger")


module.exports = {

   async execCommand(req, res) {

       var reqCommand = req.params.COMMAND
       logger.info(`Comando de la petición: "` + reqCommand + `"`)

       var result = await model.execCommand(reqCommand)

       return res.send(result)
   }
}