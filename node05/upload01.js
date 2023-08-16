const express = require("express");
const path = require("path");
const fs = require("fs");
// multer 套件處理檔案上傳
const multer = require("multer");
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, __dirname + "/public/uploads/");
    },
    filename: function (req, file, cb) {
        if (!req.timestamp) {
            req.timestamp = Date.now();
            req.fileIndex = 0;
        } else {
            req.fileIndex++;
        }
        // let timestamp = Date.now();
        let newName =
            req.timestamp + req.fileIndex + path.extname(file.originalname);
        cb(null, newName);
    },
});
// 指定上傳的檔案要儲存的資料夾位置
const upload = multer({ dest: path.resolve(__dirname, "./public") });
const upload2 = multer({ storage });

const app = express();

app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "./views"));

app.use(express.static(path.resolve(__dirname, "./public")));

app.get("/", (req, res) => {
    res.send("首頁");
});

app.get("/form1", (req, res) => {
    res.render("form1");
});

app.get("/form2", (req, res) => {
    res.render("form2");
});

app.get("/form3", (req, res) => {
    res.render("form3");
});

app.post("/upload1", upload.single("myFile"), (req, res) => {
    let timestamp = Date.now();
    let newName = timestamp + path.extname(req.file.originalname);
    fs.renameSync(req.file.path, "./public/upload/" + newName);
    req.body.myFile = newName;
    res.json({
        body: req.body,
        file: req.file,
    });
});

// upload.array() 上傳多個檔案，第二個參數指定檔案數量，不指定為無上限
app.post("/upload2", upload.array("myFiles", 3), (req, res) => {
    let myFiles = [];
    // timestamp 只取一個，檔名以 timestamp + index 命名
    let timestamp = Date.now();
    req.files.forEach((file, index) => {
        let num = timestamp + index;
        let newName = num + path.extname(file.originalname);
        fs.renameSync(file.path, "./public/upload/" + newName);
        myFiles.push(newName);
    });
    req.body.myFiles = myFiles;
    res.json({
        body: req.body,
        files: req.files,
    });
});

app.post("/upload3", upload2.array("myFiles"), (req, res) => {
    res.json({
        body: req.body,
        files: req.files,
    });
});

app.listen(3000, () => {
    console.log("server is running");
});
