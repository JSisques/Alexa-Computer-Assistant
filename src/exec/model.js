const childProcess = require("child_process");
const logger = require("../util/logger");
const commandMacOs = require("../entities/commandMac")
const commandWindows = require("../entities/commandWindows")

module.exports = {

    async execCommand(command) {

        logger.info("Entering execCommand");

        switch(process.env.APP_OS.toUpperCase()){
            case "WINDOWS":
                logger.debug("The OS is Windows");
                command = commandWindows[command];
                break;

            case "MACOS":
                logger.debug("The OS is MacOS");
                command = commandMacOs[command];
                break;

            default:
                logger.error("OS not lokita");
                break;
           }
        
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