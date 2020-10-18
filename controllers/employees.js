const employees = require('../models').employees;

async function CreateEmployee(req, res){
    try{
        let response = await employees.CreateEmployee(req.body);
        res.status(200).send({ message : "New Emp Added"});
    }catch(err){
        res.status(500).send(`Please Share this message with Us { message : ${err}}`);
    }
}

async function UpdateEmployee(req, res) {
    try{
        console.log("req.params----" , req.params);
        let response = await employees.UpdateEmployee(req.params.empNo, req.body);
        res.status(200).send({ message : "Emp Data Updated"});
    }catch(err){
        res.status(500).send(`Please Share this message with Us { message : ${err}}`);
    }
}

async function GetEmployee(req, res){
    try{
        let response = await employees.GetEmployee();
        res.status(200).send({data : response});
    }catch(err){
        res.status(500).send(`Please Share this message with Us { message : ${err}}`);
    }
}

module.exports = {
    CreateEmployee,
    UpdateEmployee,
    GetEmployee
}