//#region Modules
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
require('dotenv').config();
//#endregion

//#region MiddleLayer
app.use(express.static("public"));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.set("view engine", "ejs");
//#endregion

//#region Render Request
app.use("/", require("./routes"));
//#endregion

//#region listening request
const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server started at port ${PORT}`);
});
//#endregion