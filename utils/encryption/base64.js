//#region Model
const fs = require("fs");
//#endregion

module.exports = {
    Encoding: (filename) => {
        try {
            if (!fs.existsSync(filename))
                throw `FileName Does Not Exist ${filename}`;
            let bitmap = fs.readFileSync(filename);
            return Buffer.from(bitmap).toString('base64');
        }
        catch (err) {
            throw `Error in Encoding file. FileName : ${filename}`;
        }
    },
    Decoding: (inputStr, filename) => {
        try {
            if (!inputStr) {
                throw `Input String Cannot null or empty while Decoding`;
            }
            let bitmap = Buffer.from(inputStr, 'base64');
            fs.writeFileSync(filename, bitmap);
        }
        catch (err) {
            throw `Error in Decoding input string : : ${inputStr}`;
        }
    }
}