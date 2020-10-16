// #region Module
const fs = require("fs");
const xml2js = require("xml2js");
const webConfig = require("../../config/webConfig.json");
//#endregion

// #region GetVisaCofig
function GetVisaCofig(clientId) {
    let visaConfig;
    try {
        let xmlfile = process.env.configFiles + "Visa.config.xml";
        let fileData = fs.readFileSync(xmlfile, { encoding: 'utf-8' });
        xml2js.parseString(fileData, {
            explicitArray: false,
            trim: true
        }, function (err, result) {
            if (err) {
                throw err;
            } else {
                visaConfig = result.config;
            }
        });
    } catch (ex) {
        throw ex;
    }
    return visaConfig;
}
// #endregion

// #region Export config file data
module.exports = GetVisaCofig();
// #endregion
