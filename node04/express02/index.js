const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.setHeader("content-type", "text/html;charset=utf-8");
    res.end("網站主頁");
});

app.get("/home", (req, res) => {
    res.setHeader("content-type", "text/html;charset=utf-8");
    res.end("This is home!!!");
});

app.get("/login", (req, res) => {
    res.setHeader("content-type", "text/html;charset=utf-8");
    res.end(`<!DOCTYPE html>
    <html lang="en">
        <head>
            <title>login test</title>
            <!-- Required meta tags -->
            <meta charset="utf-8" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />
    
            <!-- Bootstrap CSS v5.2.1 -->
            <link
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css"
                rel="stylesheet"
                integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT"
                crossorigin="anonymous"
            />
        </head>
    
        <body>
            <div class="container">
                <div class="py-2">
                    <h1>表單頁面</h1>
                </div>
                <form action="http://localhost:3000/login" method="post">
                    <input type="text" name="id" class="form-control"/>
                    <button class="btn btn btn-info">送出</button>
                </form>
            </div>
        </body>
    </html>
    
    `);
});

app.post("/login", (req, res) => {
    res.setHeader("content-type", "text/html;charset=utf-8");
    res.end("進入登入流程");
});

// all() 接受所有的 method
// 路由的權重與 if else 相似，由上到下讀取，如果下面程式碼放到最上面，就會所有頁面都進入 404
app.all("*", (req, res) => {
    // "*" 代表除了上面寫過的以外的路徑
    res.setHeader("content-type", "text/html;charset=utf-8");
    res.end("<h1>404 - 找不到頁面</h1>");
});

app.listen(3000, () => {
    console.log("server is running");
});
