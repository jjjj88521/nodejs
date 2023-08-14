const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("首頁");
});

app.get("/home", (req, res) => {
    res.send("前台首頁");
});

app.get("/admin", checkCodeMiddleWare, (req, res) => {
    res.send("後台首頁");
});

// 路由中介軟體可以放多組
// app.get("/admin", middle1, middle2, middle3, (req, res) => {
//     res.send("後台首頁");
// });

app.get("/setting", checkCodeMiddleWare, (req, res) => {
    res.send("設定首頁");
});

app.listen(3000, () => {
    console.log("伺服器開啟");
});

function checkCodeMiddleWare(req, res, next) {
    let code = req.query.code;
    if (code === "464") {
        next();
    } else {
        res.send("沒有權限");
    }
}
