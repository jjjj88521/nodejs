const express = require("express");
const app = express();
app.get("/", (req, res) => {
    res.setHeader("content-type", "text/html;charset=utf-8");
    res.end("首頁");
});

app.get("/request", (req, res) => {
    res.setHeader("content-type", "text/html;charset=utf-8");
    res.end("要求的訊息內容取得");
    // 傳統 http 模組方法
    // console.log(req.method);
    // console.log(req.url);
    // console.log(req.httpVersion);
    // console.log(req.headers);

    // 使用 express 之後可以直接取用
    console.log(req.path);
    console.log(req.query); // 直接以物件形式存放
    console.log(req.ip);
    console.log(req.get("host"));
});

app.listen(3000, () => {
    console.log("伺服器開啟");
});
