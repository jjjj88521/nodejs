const http = require("http");
const server = http.createServer((request, response) => {
    response.setHeader("content-type", "text/html;charset=utf-8");
    response.end("Hello server!! 你好，主機");
});
const port = 9000;

server.listen(port, () => {
    console.log(`伺服器已經啟動，http://localhost:${port}/`);
});
