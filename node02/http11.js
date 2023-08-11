const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
    let { pathname } = new URL(req.url, "http://localhost");
    let root = __dirname + "/htdocs";

    if (pathname === "/") {
        pathname = "/page1.html";
    }
    let filePath = path.resolve(root + pathname);
    console.log(filePath);
    fs.readFile(filePath, (error, data) => {
        if (error) {
            res.statusCode = 500;
            res.setHeader("content-type", "text/html;charset=utf-8");
            res.end("<h1>找不到啦！！</h1>");
            return false;
        }
        res.end(data);
    });
});

const port = 9000;

server.listen(port, () => {
    console.log(`伺服器已經啟動，http://localhost:${port}/`);
});
