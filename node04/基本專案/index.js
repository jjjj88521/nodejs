const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("首頁");
});

app.listen(3000, () => {
    console.log("伺服器開啟");
});
