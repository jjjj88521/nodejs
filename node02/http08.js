// 使用 javaScript 內建的 URL 物件取用 pathname 和 query
const http = require("http");

const server = http.createServer((req, res) => {
    // console.log("要求的方法: "+req.method)
    console.log("要求的路徑: " + req.url);

    res.setHeader("content-type", "text/html;charset=utf-8");

    res.end(`<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>template</title>
            <style>
                .row {
                    display: flex;
                    width: 180px;
                }
    
                .col {
                    width: 60px;
                    height: 30px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    cursor: pointer;
                }
    
                .col:not(:first-child) {
                    border-left: 1px solid black;
                }
    
                .col.active {
                    background: gray;
                    color: white;
                }
    
                .row:nth-child(odd) {
                    background: pink;
                }
    
                .row:nth-child(even) {
                    background: orange;
                }
            </style>
        </head>
        <body>
            <div class="row">
                <div class="col">1-1</div>
                <div class="col">1-2</div>
                <div class="col">1-3</div>
            </div>
            <div class="row">
                <div class="col">2-1</div>
                <div class="col">2-2</div>
                <div class="col">2-3</div>
            </div>
            <div class="row">
                <div class="col">3-1</div>
                <div class="col">3-2</div>
                <div class="col">3-3</div>
            </div>
            <div class="row">
                <div class="col">4-1</div>
                <div class="col">4-2</div>
                <div class="col">4-3</div>
            </div>
            <script>
                const cols = document.querySelectorAll(".col");
                // 改成陣列型別
                // 第一種
                // Array.from(cols);
                // 第二種 解構賦值
                [...cols].map(col => {
                    col.addEventListener("click", function () {
                        this.classList.contains("active")
                            ? this.classList.remove("active")
                            : this.classList.add("active");
                    });
                });
            </script>
        </body>
    </html>
    `);
});

const port = 9000;

server.listen(port, () => {
    console.log(`伺服器已經啟動，http://localhost:${port}/`);
});
