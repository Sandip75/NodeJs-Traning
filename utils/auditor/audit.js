// #region modules
const sql = require("mssql");
const uuidv4 = require('uuid/v4');
require('dotenv').config();

const sqlhelper = require("../dataaccess/sqlserver");
const enumerator = require("./enumerator");
const host = require("../../core/host");
const getTime = require("../../core/dateTime");
const AuditDal = require("./auditDal");
const SPNamesFactory = require("./spNamesFactory");
const logger = require('../logger');
// #endregion

module.exports = { 
    /*
   * Event Type {enum}
  */
    EventType: enumerator.EventType,

    /*
   * Serverity Type {enum}
  */
    Severity: enumerator.Severity,

    /*
   * Audit Method 
  */
    Add: (eventType, serverity, memberId, details, clientIP, endUserIP, traceId, clientId, isUnarchive = false) => {
        try {
            const input = [
                {
                    name: "eventType",
                    sqlType: sql.Int,
                    value: eventType
                },
                {
                    name: "serverity",
                    sqlType: sql.Int,
                    value: serverity
                },
                {
                    name: "details",
                    sqlType: sql.Text,
                    value: details
                }, 
                {
                    name: "memberId",
                    sqlType: sql.Int,
                    value: memberId
                }, {
                    name: "clientId",
                    sqlType: sql.Int,
                    value: enumerator.ClientId[clientId]
                }, 
                {
                    name: "clientIP",
                    sqlType: sql.VarChar,
                    value: clientIP
                }, 
                {
                    name: "endUserIP",
                    sqlType: sql.VarChar,
                    value: host.EndUserIP() || host.EndUserIPBetter() || endUserIP
                },
                {
                    name: "serverName",
                    sqlType: sql.VarChar,
                    value: (((process.env.SERVERNAME) ? process.env.SERVERNAME + ":" : "") + host.Hostname())
                }, {
                    name: "isUnarchive",
                    sqlType: sql.Bit,
                    value: isUnarchive
                },
            ];

            if(traceId){
                input.push({
                    name: "traceId",
                    sqlType: sql.UniqueIdentifier,
                    value: traceId 
                });
            }
            let connectionString = AuditDal.GetConnectionString(clientId, enumerator.ConnectionModuleType.AuditDB);
            let spNames = SPNamesFactory.GetSPNamesType(clientId);
            sqlhelper.FetchData(connectionString, spNames.AddAudit, input);
        } catch (err) { 
            logger.log('error' , `Got error in audit at utils Error message : ${err.message} and stack : ${err.stack}`);
        }
    }
};
