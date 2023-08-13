const http = require("http");
const fs = require("fs");
const path = require("path");
const moment = require("moment/moment");
const requestIp = require("request-ip");

// access.log 是否存在，沒有就創一個
if (!fs.existsSync("./access.log")) {
    fs.createWriteStream("./access.log");
}

// mime 類型
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
    // === access.log 訊息 ===
    // 當前時間
    const time = moment().format("YYYY-MM-DD HH:mm:ss");
    const ip = requestIp.getClientIp(req);
    const { method } = req;
    let reqStatusMsg = "";
    let accessMsg = "";

    let { pathname } = new URL(req.url, "http://localhost");

    const root = __dirname;
    if (pathname === "/") {
        pathname = "/page.html";
    }
    const filename = path.resolve(root + pathname);
    fs.readFile(filename, (err, data) => {
        // 錯誤處理
        if (err) {
            res.setHeader("Content-Type", `${mimes["html"]};charset=utf-8`);
            reqStatusMsg = "讀取失敗";
            switch (err.code) {
                case "ENOENT":
                    res.statusCode = 404;
                    break;
                default:
                    res.statusCode = 500;
                    break;
            }
            res.end(`<h1>${res.statusCode} - 錯誤</h1>`);
        } else {
            reqStatusMsg = "讀取成功";

            const ext = path.extname(filename).slice(1);
            const type = mimes[ext];
            if (type) {
                let charset = ext === "html" ? "" : ";charset=utf-8";
                res.setHeader("content-type", type + charset);
            } else {
                res.setHeader("content-type", "application/octet-stream");
            }
            res.end(data);
        }
        // 將訊息紀錄在 access.log
        accessMsg = `${reqStatusMsg} ${time} ${method} ${pathname} ${ip}\r\n`;
        fs.appendFile("./access.log", accessMsg, (err) => {
            if (err) {
                console.log("寫入 access.log 失敗");
            }
        });
    });
});

const port = 9000;

server.listen(port, () => {
    console.log(`伺服器已經啟動，http://localhost:${port}/`);
});
