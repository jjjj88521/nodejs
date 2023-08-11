const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
    // console.log("要求的方法: "+req.method)
    // console.log("要求的路徑: " + req.url);

    res.setHeader("content-type", "text/html;charset=utf-8");
    let file = path.resolve(__dirname + "/template01.html");
    let data = fs.readFileSync(file);
    res.end(data);
});

const port = 9000;

server.listen(port, () => {
    console.log(`伺服器已經啟動，http://localhost:${port}/`);
});
