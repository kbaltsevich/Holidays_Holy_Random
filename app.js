const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const fs = require("fs");

app.use(cors());
app.options("*", cors());
app.use(bodyParser());

let arr_holidays = [];

app.get("/get-holidays-arr", async (req, res) => {
  try {
    const arr_holideys_json = JSON.stringify(arr_holidays);
    console.log(arr_holidays)
    res.json(arr_holideys_json);
  } catch (error) {
    return console.log(err);
  }
});

app.post("/post-holidays-arr", async (req, res) => {
  try {
    arr_holidays = JSON.parse(req.body.array);
    fs.appendFileSync(
      `HolyList.txt`,
      `${req.body.user} заступает ${req.body.date} c IP ${req.ip}'\n`
    );
    console.log(
      `${req.body.user} заступает ${req.body.date} c IP ${req.ip}'\n`
    );
  } catch (error) {
    return console.log(err);
  }
});

app.post("/put-array", async (req, res) => {
  try {
    arr_holidays = JSON.parse(req.body.array);
    res.json(req.body.array)
  } catch (error) {
    return console.log(err);
  }
});

app.get('/get-holy-list', async (req, res) => {
  try {
    const listFile = fs.readFileSync("HolyList.txt", "utf8")
    res.send(listFile)
  } catch (error) {
    return console.log(err);
  }
})

if (process.env.NODE_ENV === "production") {
  app.use("/", express.static(path.join(__dirname, "holly", "dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "holly", "dist", "index.html"));
  });
}

app.listen(5000, () => console.log(`server has been started`));
