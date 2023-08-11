const fs = require("fs");

// 讀取資料夾
// 異步方式
// fs.readdir("./video", (error, data) => {
//     if (error) {
//         console.log("讀取資料夾失敗");
//         return false;
//     }
//     console.log(data); // 印出資料夾內的資料
// });

// 同步方式
// let data = fs.readdirSync("./");
// console.log(data);

// 刪除資料夾
// 異步方式
// fs.rmdir("./html", error => {
//     if (error) {
//         console.log("刪除資料夾失敗");
//         return false;
//     }
//     console.log("刪除資料夾成功");
// });

// 遞迴刪除 a 裡面所有的資料夾
// fs.rmdir("./a", { recursive: true }, error => {
//     if (error) {
//         console.log("刪除資料夾失敗");
//         return false;
//     }
//     console.log("刪除資料夾成功");
// });

// 利用 rm 刪除資料或資料夾
fs.rmSync("./html2", { recursive: true });

// 同步方式
// fs.rmdirSync("./html2");
