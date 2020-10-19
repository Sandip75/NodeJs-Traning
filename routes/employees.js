const app = module.exports = require('express')();
const Joi = require('@hapi/joi');
const { CreateEmployee, UpdateEmployee, GetEmployee, DeleteEmployee, EmployeeForm } = require('../controllers').employees;

//#region CRUD
app.post('', async(req,res)=>{
    //#region Request Validation
    const schema = Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().email().default(''),
        phoneNumber: Joi.string().regex(/^\d{10}$/).default(''),
      }).or('email','phoneNumber');
  
      const validation = Joi.validate(req.body, schema);
      if (validation.error) return res.status(400).send(validation.error);
      //#endregion
      CreateEmployee(req, res);
});

app.put('/:empNo', async(req,res)=>{
    console.log("---->>>> " , req.params.empNo,  "-->>", JSON.stringify(req.body));
        
    //#region Request Validation
    const schemaURL = Joi.object().keys({
        empNo: Joi.string().required()
    });

    const validationURL = Joi.validate(req.params, schemaURL);
    if (validationURL.error) return res.status(400).send(validation.error);

    const schema = Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().email().default(''),
        phoneNumber: Joi.string().regex(/^\d{10}$/).default(''),
        isDisable: Joi.boolean().valid(true,false)
      }).or('email','phoneNumber');
  
      const validation = Joi.validate(req.body, schema);
      if (validation.error) return res.status(400).send(validation.error);
      //#endregion
      UpdateEmployee(req, res);
});

app.get('' , (req, res)=>{
    GetEmployee(req,  res);
});

app.delete('' , (req,res)=>{
    //#region Request Validation    
    const schema = Joi.array().min(1).items(Joi.object().keys({
        empId: Joi.number().required()
    }));

    const validation = Joi.validate(req.body, schema);
    if (validation.error) return res.status(400).send(validation.error);
    //#endregion
    DeleteEmployee(req,res);
})
//#endregion

app.get('/form', (req,res)=>{
    EmployeeForm(req,res);
})