// 使用 javaScript 內建的 URL 物件取用 pathname 和 query
const http = require("http");

const server = http.createServer((req, res) => {
    // console.log("要求的方法: "+req.method)
    console.log("要求的路徑: " + req.url);

    // JS URL 物件
    let { pathname } = new URL(req.url, "http://localhost");
    res.setHeader("content-type", "text/html;charset=utf-8");
    switch (pathname) {
        case "/":
            res.write("首頁"); // res.write() 可以很多組
            break;
        case "/login":
            res.write("登入頁");
            break;
        case "/reg":
            res.write("註冊頁");
            break;
        default:
            res.statusCode = 404;
            res.statusMessage = "i love u";
            res.write("找不到頁面");
            break;
    }
    res.end("123"); // res.end() 代表結束，只能唯一一組
});

const port = 9000;

server.listen(port, () => {
    console.log(`伺服器已經啟動，http://localhost:${port}/`);
});
