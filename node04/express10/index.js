const express = require("express");
const path = require("path");
// const bodyParser = require("body-parser");
const app = express();

const publicName = path.resolve(__dirname, "public");
app.use(express.static(publicName));

// 全域的使用方式
// app.use(bodyParser.urlencoded({ extended: false }));
// 路由 middleware 的使用
// let urlencodedParser = bodyParser.urlencoded({ extended: false })
// 將來不用裝 bodyParser 使用 express 取代 bodyParser
// 因為被吸收進 express 了
let urlencodedParser = express.urlencoded({ extended: false });

app.get("/", (req, res) => {
    res.send("首頁");
});

app.get("/login", (req, res) => {
    // res.send("顯示表單");
    // let file = path.resolve(__dirname+"/public/form.html")
    // res.sendFile(file);
    res.redirect("/form.html");
});

app.post("/login", urlencodedParser, (req, res) => {
    console.log(req.body);
    res.send("取得表單資訊");
});

app.listen(3000, () => {
    console.log("server is running");
});
