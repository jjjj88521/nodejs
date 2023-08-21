const express = require("express");
const moment = require("moment");
const multer = require("multer");
const connection = require("../db");

const router = express.Router();
const upload = multer();

router.get("/", function (req, res, next) {
    // res.send("導到今天日期");
    let time = moment().format("YYYY-MM-DD");
    res.redirect("/expe/d/" + time);
});

router.get("/d/:date", async (req, res, next) => {
    // res.send("讀取指定日期的所有消費");
    let date = req.params.date;
    let sort = await getSort()
        .then(data => {
            return data.sort;
        })
        .catch(err => {});
    let dateData = await getDateData(date)
        .then(data => {
            return data.results;
        })
        .catch(err => {});
    // console.log(dateData);
    if (dateData && sort) {
        res.render("index", { date, sort, dateData });
    } else {
        res.send("發生錯誤");
    }
});

router.post("/", function (req, res, next) {
    // res.send("新增指定日期的消費");
    let title = req.body.title;
    let money = parseInt(req.body.money);
    let sort = parseInt(req.body.sort);
    let date = req.body.date;
    // res.send(`${title} ${money} ${sort} ${date}`);
    connection.execute(
        `INSERT INTO expense (id, title, sort, money, date) VALUES (NULL, ?, ?, ?, ?);`,
        [title, sort, money, date],
        function (err, results) {
            if (err) {
                res.json({ err });
                return false;
            }
            res.redirect("/expe/d/" + date);
        }
    );
});

router.put("/", upload.none(), async function (req, res, next) {
    // res.json({ msg: "修改指定日期的消費" });
    let result = await updateData(req.body)
        .then(data => {
            return 1;
        })
        .catch(err => {
            return 0;
        });
    res.json({ result: result });
});

router.delete("/", upload.none(), async function (req, res, next) {
    // res.json({ msg: "刪除指定日期的消費" });
    // console.log(req.body);
    let result = await deleteData(req.body)
        .then(data => {
            return 1;
        })
        .catch(err => {
            return 0;
        });
    res.json({ result: result });
});

// 取得分類
function getSort() {
    return new Promise((resolve, reject) => {
        // 讀取資料庫的 sort 資料表
        connection.query("SELECT * FROM sort", function (err, results, fileds) {
            if (err) {
                reject({ err });
                return false;
            }
            let sort = results.map(item => {
                return { id: item.id, name: item.name };
            });
            resolve({ sort });
        });
    });
}

// 取得指定日期的資料
function getDateData(date) {
    return new Promise((resolve, reject) => {
        connection.execute(
            "SELECT * FROM expense WHERE date = ?",
            [date],
            function (err, results) {
                if (err) {
                    reject({ err });
                    return false;
                }
                resolve({ results });
            }
        );
    });
}

// 更新資料
function updateData(data) {
    return new Promise((resolve, reject) => {
        let id = parseInt(data.id);
        let title = data.title;
        let money = parseInt(data.money);
        let sort = parseInt(data.sort);
        let date = data.date;
        // console.log(id, title, money, sort, date);

        connection.execute(
            "UPDATE expense SET title = ?, money = ?, sort = ?, date = ? WHERE expense.id = ?",
            [title, money, sort, date, id],
            function (err, results) {
                if (err) {
                    reject({ err });
                    return false;
                }
                resolve({ result: "success" });
            }
        );
    });
}

// 刪除資料
function deleteData(data) {
    return new Promise((resolve, reject) => {
        let id = parseInt(data.id);
        console.log(id);
        connection.execute(
            "DELETE FROM `expense` WHERE `expense`.`id` = ?",
            [id],
            function (err, results) {
                if (err) {
                    reject({ err });
                    return false;
                }
                resolve({ result: "success" });
            }
        );
    });
}

module.exports = router;
