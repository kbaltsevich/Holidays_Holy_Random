const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const cors = require("cors");
const path = require("path");
const fs = require("fs");

app.use(cors());
app.options("*", cors());
app.use(bodyParser());

let arr_holidays = [
    "26 December",
    "27 December",
    "31 December",
    "1 January",
    "2 January",
    "3 January",
    "7 January",
    "8 January",
    "9 January",
    "10 January",
    "Lucky",
    "Lucky"
]

app.get('/get-holidays-arr', async (req, res) => {
    try {
        const arr_holideys_json = JSON.stringify(arr_holidays)
        res.json(arr_holideys_json)
    } catch (error) {
        return console.log(err)
    }
})

app.post("/post-holidays-arr", async (req, res) => {
    try {
        arr_holidays = JSON.parse(req.body.array)
        fs.appendFileSync(`HolyList.txt`, `${req.body.user} заступает ${req.body.date} c IP ${req.ip} '\n`);
        console.log(`${req.body.user} заступает ${req.body.date} c IP ${req.ip} '\n`)
    } catch (error) {
        return console.log(err)
    }
})

if (process.env.NODE_ENV === "production") {
    app.use(
      "/",
      express.static(path.join(__dirname, "holly", "dist"))
    );
  
    app.get("*", (req, res) => {
      res.sendFile(
        path.resolve(
          __dirname,
          "holly",
          "dist",
          "index.html"
        )
      );
    });
  }

app.listen(5000, () => console.log(`server has been started`));