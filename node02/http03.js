const http = require("http");

const server = http.createServer((req, res) => {
    // console.log("要求的方法: "+req.method)
    // console.log("要求的路徑: " + req.url)

    let body = "";
    req.on("data", chunk => {
        body += chunk;
    });
    req.on("end", chunk => {
        console.log("要求的內容: " + body);
        res.end("hello server!!!");
    });
});

const port = 9000;

server.listen(port, () => {
    console.log(`伺服器已經啟動，http://localhost:${port}/`);
});
