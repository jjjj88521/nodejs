const express = require("express");
const moment = require("moment");
const path = require("path");
const fs = require("fs");

const app = express();
const logFile = path.resolve(__dirname + "/access.log");

let recordLogMiddleWare = (req, res, next) => {
    let { url, ip } = req;
    console.log(url, ip);
    let datetime = moment().format("YYYY-MM-DDTHH:mm:ss");
    fs.appendFile(logFile, `${datetime} ${url} ${ip}\r\n`, error => {
        if (error) {
            console.log("寫入失敗");
            return false;
        }
        console.log("寫入成功");
    });
    next();
};

app.use(recordLogMiddleWare);
app.get("/", (req, res) => {
    res.send("首頁");
});

app.get("/home", (req, res) => {
    res.send("主頁");
});

app.get("/login", (req, res) => {
    res.send("登入頁");
});

app.use("*", (req, res) => {
    res.status(404).send("<h1>404 Not Found</h1>");
});

app.listen(3000, () => {
    console.log("伺服器開啟");
});
