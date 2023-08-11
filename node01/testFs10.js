const fs = require("fs");

// 刪除檔案
// fs.unlink("./測試寫入.txt", error => {
//     if (error) {
//         console.log("刪除失敗");
//         return false;
//     }
//     console.log("刪除成功");
// });

// 使用 rm 刪除
// fs.rm("./測試寫入2.txt", error => {
//     if (error) {
//         console.log("刪除失敗");
//         return false;
//     }
//     console.log("刪除成功");
// });

fs.rmSync("./測試寫入3.txt");
