const express = require("express");
const fs = require("fs");
const app = express();
app.get("/", (req, res) => {
    let data = fs.readFileSync("./test.html");
    // console.log(data);
    res.setHeader("content-type", "text/html;charset=utf-8");
    res.end(data);
});

app.get("/photos/:id/pexels-photo-:id.jpeg", (req, res, next) => {
    const id = req.params.id;
    const ids = ["1716861", "6397725", "7465580", "7465582", "4188296"];
    let pageName = "";
    res.setHeader("content-type", "text/html;charset=utf-8");
    if (ids.includes(id)) {
        pageName = `<img src="https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=800&h=750&dpr=1">`;
    } else {
        // 將控制權交給下個中介軟體或路由處理
        next();
    }
    res.end(pageName);
});

app.use("/*", (req, res) => {
    res.type("text/html");
    res.status(404);
    res.end("<h1>404 - Not Found</h1>");
});

app.listen(3000, () => {
    console.log("原神啟動");
});
