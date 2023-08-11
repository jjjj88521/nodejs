const http = require("http");
const fs = require("fs");
const path = require("path");

const fileMaps = {
    "/": "/page.html",
    "/node_modules/bootstrap/dist/css/bootstrap.min.css":
        "/node_modules/bootstrap/dist/css/bootstrap.min.css",
    "/node_modules/jquery/dist/jquery.min.js":
        "/node_modules/jquery/dist/jquery.min.js",
    "/page.js": "/page.js",
    "/node_modules/bootstrap/dist/js/bootstrap.min.js":
        "/node_modules/bootstrap/dist/js/bootstrap.min.js",
    "/image/25.png": "/image/25.png",
};

// 寫法一
// const server = http.createServer((req, res) => {
//     function getData(fileName) {
//         let file = path.resolve(__dirname + fileName);
//         let data = fs.readFileSync(file);
//         res.end(data);
//     }
//     let { pathname } = new URL(req.url, "http://localhost");
//     if (pathname === "/") {
//         res.setHeader("content-type", "text/html;charset=utf-8");
//         getData("/page.html");
//     } else if (
//         pathname === "/node_modules/bootstrap/dist/css/bootstrap.min.css"
//     ) {
//         getData(pathname);
//     } else if (pathname === "/node_modules/jquery/dist/jquery.min.js") {
//         getData(pathname);
//     } else if (pathname === "/page.js") {
//         getData(pathname);
//     } else if (
//         pathname === "/node_modules/bootstrap/dist/js/bootstrap.min.js"
//     ) {
//         getData(pathname);
//     } else if (pathname === "/image/25.png") {
//         getData(pathname);
//     } else {
//         res.statusCode = 404;
//         res.setHeader("content-type", "text/html;charset=utf-8");
//         res.end("<h1>找不到啦！！</h1>");
//     }
// });

// 寫法二
const server = http.createServer((req, res) => {
    function getData(fileName) {
        let file = path.resolve(__dirname + fileName);
        let data = fs.readFileSync(file);
        res.end(data);
    }
    let { pathname } = new URL(req.url, "http://localhost");
    const filename = fileMaps[pathname];
    try {
        if (filename === "/page.html") {
            res.setHeader("content-type", "text/html;charset=utf-8");
        }
        getData(filename);
    } catch (error) {
        res.statusCode = 404;
        res.setHeader("content-type", "text/html;charset=utf-8");
        res.end("<h1>找不到啦！！</h1>");
    }
});

const port = 9000;

server.listen(port, () => {
    console.log(`伺服器已經啟動，http://localhost:${port}/`);
});
