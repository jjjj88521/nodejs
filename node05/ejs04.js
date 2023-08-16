const ejs = require("ejs");
const fs = require("fs");
const path = require("path");
const express = require("express");
const app = express();

let user;

// 設定樣板引擎
app.set("view engine", "ejs");
// 設定 express 查找樣板檔案的路徑
app.set("views", path.resolve(__dirname, "./views"));

app.use(express.static(path.resolve(__dirname, "./public")));

app.get("/", (req, res) => {
    res.send("首頁");
});

// 使用 express render 網頁
app.get("/test1", (req, res) => {
    let name = "Jack";
    let str = "Hello, EJS!!!";
    res.render("test1", { str, name });
});

app.get("/test2", (req, res) => {
    const blackpink = ["Jennie", "Jisoo", "Lisa", "Rosé"];
    res.render("test2", { blackpink });
});

app.get("/test3", (req, res) => {
    res.render("test3", { user });
});

app.get("/logout", (req, res) => {
    user = undefined;
    res.redirect("/test3");
});

app.get("/login", (req, res) => {
    user = {
        name: "Jack",
        img: "https://randomuser.me/api/portraits/men/68.jpg",
    };
    res.redirect("/test3");
});

app.listen(3000, () => {
    console.log("服務啟動於 http://localhost:3000/");
});
