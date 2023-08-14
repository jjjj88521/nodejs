const express = require("express");
const path = require("path");
const { singers } = require("./singers");

const app = express();

app.get("/", (req, res) => {
    // ===== http 模組的回應方式 =====
    // res.setHeader("content-type", "text/html;charset=utf-8");
    // res.statusCode = 404;
    // res.statusMessage = "i love u";
    // res.write("回應內容1");
    // res.write("回應內容2");
    // res.write("回應內容3");
    // res.end("首頁");

    // ===== express 回應方式 =====
    // res.status(404);
    // res.set("aaa", "i love u");
    // res.send("首頁"); // send 會自動判斷 header

    // 可以接著寫
    // res.status(404).set("ccc", "aaa").send("這是首頁");

    // 導向指定網址
    // res.redirect("https://www.netflix.com/tw/");

    // 下載
    // let url = path.resolve(__dirname + "/singers.json");
    // res.download(url);

    // 回傳 JSON（API 基礎）
    // res.json(singers);

    // 回傳靜態資源
    let file = path.resolve(__dirname + "/abc.html");
    res.sendFile(file);
});

app.listen(3000, () => {
    console.log("伺服器開啟");
});
