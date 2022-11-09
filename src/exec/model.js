const childProcess = require("child_process");
const logger = require("../util/logger");

module.exports = {

    async execCommand(command) {
        
        return childProcess.exec(command, (error, stdout, stderr) => {
            if (error) {
                logger.error("Command [" + command + "] failed");
                logger.error(error.message);
                return false;
            }
            if (stderr) {
                logger.error("Command [" + command + "] failed");
                logger.error(stderr);
                return false;
            }
            logger.info("Command [" + command + "] succesfully executed");
            return true;
        });
        
    }
}