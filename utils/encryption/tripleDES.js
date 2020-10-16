//#region Module
const CryptoJS = require("crypto-js");
//#endregion

module.exports = {
    Decrypt: async (req, res, ciphertext) => {
        try{
            let key = 'ABCDEFGHIJKLM01234567890';
            ciphertext = decodeURIComponent(ciphertext);
            let keyBytes = CryptoJS.enc.Utf8.parse(key);
            let ivBytes = CryptoJS.enc.Utf8.parse("ABCDEFGH");

            let decrypted = await CryptoJS.TripleDES.decrypt({
                ciphertext: CryptoJS.enc.Base64.parse(ciphertext)
            }, keyBytes, {
                iv: ivBytes
                //mode: CryptoJS.mode.CBC
                // padding: CryptoJS.pad.Pkcs7,
            });
            return decrypted.toString(CryptoJS.enc.Utf8);
        }
        catch(err)
        {
            throw err;
        }
    }
}