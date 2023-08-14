const ejs = require("ejs");
const fs = require("fs");
const path = require("path");
const express = require("express");
const app = express();

const blackpink = ["Jennie", "Jisoo", "Lisa", "Rosé"];
// JS 寫法
// let str = `<ol>\n\r`;
// blackpink.forEach(name => {
//     str += `    <li>${name}</li>\n\r`;
// });
// str += "</ol>";
// console.log(str);

// EJS 寫法
let file = path.resolve(__dirname, "./template02.html");
let template = fs.readFileSync(file).toString();
let result = ejs.render(template, { blackpink });

app.get("/", (req, res) => {
    res.send(result);
});

app.listen(3000, () => {
    console.log("server is running");
});
