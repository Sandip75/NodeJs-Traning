const sql = require("mssql");
const sqlserver = require('../utils/dataaccess/sqlserver');
const config = require('../config');

async function createEmployee({name, email=null, phoneNumber=null}){
    try{
        const input = [
            { name: "name", sqlType: sql.VarChar, value: name },
            { name: "email", sqlType: sql.VarChar, value: email },
            { name: "phoneNumber", sqlType: sql.VarChar, value: phoneNumber }
        ];
        
        let connectionObject = config.server;
        let data = await sqlserver.FetchData(connectionObject, "usp_employees" , input);
        return true;
    }catch(err){
        throw err;
    }   
}

module.exports ={
    createEmployee
}