const app = module.exports = require('express')();

app.get('/', (req, res) => {
  return res.status(200).send({msg: "Hi Developer!"});
});

app.use('/employees', require('./employees'));


// catch all
app.all('*', (req, res) => {
  return res.status(404).send({msg: "Not Found"});
});