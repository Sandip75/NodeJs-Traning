const spNames = require('./spNames');

module.exports = {
    GetSPNamesType: (clientId) => {
        let clientIdentifierString = `SPNames${clientId}`;
        switch (clientId.toUpperCase()) {
            case 'TBOINDIA':
                {
                    return new spNames.SPNamesTBOINDIA;
                }
            case 'TBOH':
                {
                    return new spNames.SPNamesTBOH;
                }
            default:
                {
                    return new spNames.SPNames;
                }
        }
    }
}
