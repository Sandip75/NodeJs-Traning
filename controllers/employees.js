const employees = require('../models').employees;

//#region CRUD
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
        let response = await employees.UpdateEmployee(req.params.empNo, req.body);
        res.status(200).send({ message : "Emp Data Updated"});
    }catch(err){
        res.status(500).send(`Please Share this message with Us { message : ${err}}`);
    }
}

async function DeleteEmployee(req,res) {
    try{
        let response = await req.body.map(async (obj) =>{
            return await employees.DeleteEmployee(obj.empId);
        });
        response = await Promise.all(response);
        res.status(200).send({ message : "Emp Deleted"});
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
//#endregion

function EmployeeForm(req,res) {
    try{
        let companyName = "TBO"
        res.render("index", {companyName});
    }catch(err){
        res.status(500).send(`Please Share this message with Us { message : ${err}}`);
    }
}

module.exports = {
    CreateEmployee,
    UpdateEmployee,
    GetEmployee,
    DeleteEmployee,
    EmployeeForm
}