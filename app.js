const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const cors = require("cors");

app.use(cors());
app.options("*", cors());
app.use(bodyParser());

let arr_holidays = [
    26,27,31,1,2,3,7,8,9,10,"Живи в этом году!"
]

app.get('/get-holidays-arr', async (req, res) => {
    try {
        req.method = "np-cors"
        const arr_holideys_json = JSON.stringify(arr_holidays)
        res.json(arr_holideys_json)
    } catch (error) {
        return console.log(err)
    }
})


app.listen(5000, () => console.log(`server has been started`));