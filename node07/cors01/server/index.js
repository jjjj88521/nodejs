const express = require("express");
// cors 模組設置不同網域，共享相同的資源
const cors = require("cors");
const multer = require("multer");
const session = require("express-session");

// 設置允許讀取內容的地址
let whitelist = ["http://127.0.0.1:5500", "http://localhost:3000"];
let corsOptions = {
    credentials: true,
    origin: (origin, callback) => {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error("不允許傳遞資料"));
        }
    },
};

const app = express();
const upload = multer();

const users = {
    ben: {
        pwd: "a12345",
        name: "Ben Chen",
    },
    mary: {
        pwd: "b12345",
        name: "Mary Lin",
    },
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
    session({
        // 加密字串
        secret: "mySecretKey",
        // 設定是否每次請求都會重新保存 session（無論內容是否更改）
        // 設置 false 只有 session 內容變動才會重新保存，節省伺服器資源
        resave: false,
        // 沒使用 session 物件時不會建立 session 以及發送 cookie
        saveUninitialized: true,
        // cookie 有效期間
        cookie: {
            maxAge: 1200000,
        },
    })
);

app.get("/", (req, res) => {
    res.send("首頁");
});

app.get("/checkLogin", (req, res) => {
    let user = req.session.user;
    console.log(user);
    res.json({ user });
});

app.get("/logout", (req, res) => {
    delete req.session.user;
    res.json({ msg: "logout" });
});

app.post("/", upload.none(), (req, res) => {
    // console.log(req.body);
    const { userID, userPWD } = req.body;
    if (users[userID] && users[userID].pwd === userPWD) {
        let user = users[userID];
        user.id = userID;
        req.session.user = user;
        console.log(req.session.user);
        res.json({ msg: "welcome", user });
    } else {
        res.json({ msg: "login failed" });
    }
});

app.listen(3000, () => {
    console.log("server is running!!!");
});
