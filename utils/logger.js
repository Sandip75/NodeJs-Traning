const winston = require('winston');


const Logger  = winston.createLogger({
    format: winston.format.json(),
    transports : [
        new winston.transports.File({
            filename : 'logs/logger.logs',
            level : 'info',
            format: winston.format.combine(winston.format.timestamp() , winston.format.simple())
        })
    ],
    
})


module.exports = Logger;