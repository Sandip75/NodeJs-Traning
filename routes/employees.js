const app = module.exports = require('express')();
const Joi = require('@hapi/joi');
const { CreateEmployee, GetEmployee } = require('../controllers').employees;

app.post('/', async(req,res)=>{
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

app.get('/' , (req, res)=>{
    GetEmployee(req,  res);
});