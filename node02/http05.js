// 使用 javaScript 內建的 URL 物件取用 pathname 和 query
const http = require("http");

const server = http.createServer((req, res) => {
    // console.log("要求的方法: "+req.method)
    console.log("要求的路徑: " + req.url);

    // JS URL 物件
    let { pathname, searchParams: query } = new URL(
        req.url,
        "http://localhost"
    );
    console.log(pathname);
    console.log(query.get("name"));
    console.log(query.get("pwd"));

    res.end("hello server!!!");
});

const port = 9000;

server.listen(port, () => {
    console.log(`伺服器已經啟動，http://localhost:${port}/`);
});
