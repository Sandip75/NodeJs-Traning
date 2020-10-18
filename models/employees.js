async function createEmployee({name, email=null, phoneNumber=null}){
    try{
        const input = [
            { name: "name", sqlType: sql.VarChar, value: name },
            { name: "email", sqlType: sql.VarChar, value: email },
            { name: "phoneNumber", sqlType: sql.VarChar, value: phoneNumber }
        ];
        
    }catch(err){
        throw err;
    }
    
}