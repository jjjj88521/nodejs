const express = require("express");
const path = require("path");

const app = express();
const publicName = path.resolve(__dirname + "/public");

app.use(express.static(publicName));

app.get("/", (req, res) => {
    res.send("首頁");
});

app.listen(3000, () => {
    console.log("伺服器開啟");
});
