const http = require("http");
const fs = require("fs");
const path = require("path");

const mimes = {
    html: "text/html",
    css: "text/css",
    js: "text/javascript",
    png: "image/png",
    jpg: "image/jpeg",
    gif: "image/gif",
    mp4: "video/mp4",
    mp3: "audio/mpeg",
    json: "application/json",
};

const server = http.createServer((req, res) => {
    let { pathname } = new URL(req.url, "http://localhost");
    let root = __dirname + "/htdocs";

    if (pathname === "/") {
        pathname = "/page1.html";
    }
    let filePath = path.resolve(root + pathname);

    let ext = path.extname(filePath).slice(1);
    let type = mimes[ext];

    fs.readFile(filePath, (error, data) => {
        if (error) {
            res.statusCode = 500;
            res.setHeader("content-type", "text/html;charset=utf-8");
            res.end("<h1>找不到啦！！</h1>");
            return false;
        }
        if (type) {
            if (ext === "html") {
                res.setHeader("content-type", type + ";charset=utf-8");
            } else {
                res.setHeader("content-type", type);
            }
        } else {
            res.setHeader("content-type", "application/octet-stream");
        }
        res.end(data);
    });
});

const port = 9000;

server.listen(port, () => {
    console.log(`伺服器已經啟動，http://localhost:${port}/`);
});
