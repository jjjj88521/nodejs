const express = require("express");
const app = express();
app.get("/", (req, res) => {
    res.setHeader("content-type", "text/html;charset=utf-8");
    res.end("首頁");
});

app.get("/p/:id/", (req, res) => {
    let id = req.params.id;
    res.setHeader("content-type", "text/html;charset=utf-8");
    let pageName = "";
    if (id === "CvRz0e3Awmi") {
        pageName =
            "ぷるんぷるんすぎるマシュマロアイス(Too plump marshmallow ice cream in Japan)<img src='https://images.pexels.com/photos/7539498/pexels-photo-7539498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'>";
    } else if (id === "CvZP-PIguWG") {
        pageName =
            "浅草で一番おすすめしたい抹茶クレープ(The most recommended matcha crepe in Asakusa)";
    }
    res.end(pageName);
});

app.get("/books/:cate/:bookid", (req, res) => {
    res.setHeader("content-type", "text/html;charset=utf-8");
    let cate = req.params.cate;
    let bookid = req.params.bookid;
    res.end(`分類id ${cate}; 書本編號 ${bookid}`);
});

app.get("/user/:name?", (req, res) => {
    res.setHeader("content-type", "text/html;charset=utf-8");
    let name = req.params.name;
    if (name) {
        res.end(`你好, ${name}`);
    } else {
        res.end(`你好, 不認識的人`);
    }
});

// * 代表後面所有的路徑不管幾層不管名字都可以
app.get("/file/*", (req, res) => {
    res.setHeader("content-type", "text/html;charset=utf-8");
    let name = req.params[0];
    res.end(`檔案是 ${name}`);
});

app.listen(3000, () => {
    console.log("server is running");
});
