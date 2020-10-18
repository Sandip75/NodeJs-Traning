const employees = require('../models').employees;

async function createEmployee(req, res){
    try{
        let response = await employees.createEmployee(req.body);
        res.status(200).send({data : response});
    }catch(err){
        res.status(500).send(`Please Share this message with Us { message : ${err}}`);
    }
}

module.exports = {
    createEmployee
}