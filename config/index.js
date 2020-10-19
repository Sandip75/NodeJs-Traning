require('dotenv').config();

if (process.env.ENV === 'production') {
    module.exports = require("./keys-prod.js");
} else {
    module.exports = require("./keys-dev.js");
}