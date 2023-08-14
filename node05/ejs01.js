const ejs = require("ejs");
const fs = require("fs");
const path = require("path");
const express = require("express");
const app = express();

let name = "Jack";
let str = "Hello, EJS!!!";
let file = path.resolve(__dirname, "./template01.html");
let template = fs.readFileSync(file).toString();

// ejs 模板寫法 <% %>
let result = ejs.render(template, { str, name });

app.get("/", (req, res) => {
    res.end("首頁");
});

app.listen(3000, () => {
    console.log("server is running");
});
