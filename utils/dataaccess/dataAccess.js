const connectionString = JSON.parse(JSON.stringify(require("../../config/webconnection.json")));
const enumerator = require('./enumerator');

module.exports = {
    GetConnectionString: (clientId, connectionModuleType) => {
        try {
            let connectionModuleTypeKey;
            let clientIdentifierString = `Client${clientId.toUpperCase()}`;
            for (var key in enumerator.ConnectionModuleType) {
                if (enumerator.ConnectionModuleType[key] == connectionModuleType) {
                    connectionModuleTypeKey = key;
                    break;
                }
            }
            if ((connectionString[clientIdentifierString] && connectionString[clientIdentifierString][connectionModuleTypeKey])) {
                return connectionString[clientIdentifierString][connectionModuleTypeKey];
            }
            if (connectionString[connectionModuleTypeKey]) 
                return connectionString[connectionModuleTypeKey];
            


            throw new Error(`ConnectionModuleType ${
                connectionModuleType
            } for clientId ${
                clientId
            } does not exist`);
        } catch (err) {
            throw err;
        }
    }
}
