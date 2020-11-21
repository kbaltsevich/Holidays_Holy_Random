const express = require("express");
const app = express();
const bodyParser = require("body-parser")

app.use(bodyParser());


app.listen(5000, () => console.log(`server has been started`));