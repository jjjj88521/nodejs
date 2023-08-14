const express = require("express");
const path = require("path");
const app = express();

app.use((req, res, next) => {
    let referer = req.get("referer");
    let ext = path.extname(req.url);
    if (ext) {
        ext = ext.slice(1).toUpperCase();
        if (ext === "JPG" || ext === "PNG") {
            if (referer) {
                let url = new URL(referer);
                let hostname = url.hostname;
                if (hostname !== "127.0.0.1") {
                    // res.status(403).send("403 禁用");
                    res.status(403).redirect(
                        "https://images-ext-2.discordapp.net/external/_KAVAT4I2w_uBucx0fsOm4O3mmnijljuHR0EwJ2XOCg/%3Fw%3D2000/https/img.freepik.com/premium-vector/street-barrier-with-403-error-access-forbidden_637684-56.jpg"
                    );
                    return false;
                }
            }
        }
    }

    next();
});

app.use(express.static(path.resolve(__dirname + "/public")));

app.get("/", (req, res) => {
    res.send("首頁");
});

app.listen(3000, () => {
    console.log("伺服器開啟");
});
