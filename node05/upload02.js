const express = require("express");
const path = require("path");
const fs = require("fs");
const multer = require("multer");
const formidable = require("formidable");

const app = express();
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "./views"));
app.use(express.static(path.resolve(__dirname, "./public")));

app.get("/", (req, res) => {
    res.send("首頁");
});

app.get("/form4", (req, res) => {
    res.render("form4");
});

app.post("/upload4", (req, res) => {
    const form = formidable({
        // 設定暫存檔存放位置
        uploadDir: __dirname + "/public/upload2/",
        // 保留上傳文件的擴展名
        keepExtensions: true,
        // 上傳多個文件
        multiples: true,
    });
    form.parse(req, (error, fields, files) => {
        if (error) {
            next(error);
            return false;
        }
        res.json({ fields, files });
    });
});

app.listen(3000, () => {
    console.log("server is running");
});
