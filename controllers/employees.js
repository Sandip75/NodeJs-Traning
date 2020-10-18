async function createEmployee(req, res){
    try{
        res.send("Hi I am in ....");
    }catch(err){
        res.status(500).send(`Please Share this message with Us { message : ${err}}`);
    }
    
}

module.exports = {
    createEmployee
}