const http = require("http");

const server = http.createServer(function (request, response) {
    response.end("hello world!!!!!!!!!!!!!!!!!!!!!");
});

server.listen(9000, function () {
    console.log("伺服器開啟 http://localhost:9000");
});
