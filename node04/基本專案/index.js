const express = require("express");
const app = express();
app.get("/", (req, res) => {
    res.setHeader("content-type", "text/html;charset=utf-8");
    res.end("首頁");
});

app.listen(3000, () => {
    console.log("伺服器開啟");
});
