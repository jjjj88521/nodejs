const http = require("http");
const server = http.createServer((request, response) => {
    // 取用的方法 GET 或 POST
    console.log(request.method);

    // 取用路徑
    console.log(request.url);

    // 通訊協定版本
    console.log(request.httpVersion);

    // 取得要求標頭
    console.log(request.headers);

    response.setHeader("content-type", "text/html;charset=utf-8");
    response.end("Hello server!! 你好，主機");
});
const port = 9000;

server.listen(port, () => {
    console.log(`伺服器已經啟動，http://localhost:${port}/`);
});
