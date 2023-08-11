// 使用 url 模組取用 pathname 和 query
const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
    // console.log("要求的方法: "+req.method)
    console.log("要求的路徑: " + req.url);

    // 解析 url 的內容
    let { pathname, query } = url.parse(req.url, true); // 參數2 true，將 query 轉換成物件
    console.log(pathname);
    console.log(query.name);
    console.log(query.pwd);

    res.end("hello server!!!");
});

const port = 9000;

server.listen(port, () => {
    console.log(`伺服器已經啟動，http://localhost:${port}/`);
});
