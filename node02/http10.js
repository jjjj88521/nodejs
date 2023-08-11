const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
    let { pathname } = new URL(req.url, "http://localhost");
    if (pathname === "/") {
        res.setHeader("content-type", "text/html;charset=utf-8");
        let file = path.resolve(__dirname + "/page1.html");
        let data = fs.readFileSync(file);
        res.end(data);
    } else if (pathname === "/page1.css") {
        let file = path.resolve(__dirname + "/page1.css");
        let data = fs.readFileSync(file);
        res.end(data);
    } else if (pathname === "/page1.js") {
        let file = path.resolve(__dirname + "/page1.js");
        let data = fs.readFileSync(file);
        res.end(data);
    } else {
        res.statusCode = 404;
        res.setHeader("content-type", "text/html;charset=utf-8");
        res.end("<h1>找不到啦！！</h1>");
    }
});

const port = 9000;

server.listen(port, () => {
    console.log(`伺服器已經啟動，http://localhost:${port}/`);
});
