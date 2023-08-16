// 使用 require 引入連接資料庫的函式
const connection = require("./db");

const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("首頁");
});

app.get("/d/:id", (req, res) => {
    const id = req.params.id;
    connection.execute(
        "SELECT * FROM `sort` WHERE `id` = ?",
        [id],
        function (err, results) {
            let sort = results.map(item => {
                return { sn: item.id, itemName: item.name };
            });
            res.json({ sort });
        }
    );
});

app.listen(3000, () => {
    console.log("server is running!");
});

// 執行 sql 語法
// connection.query(sql 語法, function (err, results, fields) {});
// err 錯誤訊息
// results 執行 sql 的結果
// fields 描述結果列的陣列，包含名稱、類型等等

// 單獨一句
// connection.query("SELECT * FROM `sort`", function (err, results, fields) {
//     console.log(results);
//     console.log(fields);
// });

// 使用一個變數
// connection.query(
//     "SELECT * FROM `sort` WHERE `id` = ?",
//     [4],
//     function (err, results, fields) {
//         console.log(results);
//         console.log(fields);
//     }
// );

// 使用 execute 預處理
// connection.execute(
//     "SELECT * FROM `sort` WHERE `id` = ?",
//     [6],
//     function (err, result) {
//         console.log(result);
//     }
// );
