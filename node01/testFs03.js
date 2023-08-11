const fs = require("fs");
const file = "./測試寫入3.txt";
const content = "欲窮千里目，更上一層樓。";

// 新增東西到檔案
// fs.appendFile(file, content, error => {
//     if (error) {
//         console.log("寫入失敗");
//         return false;
//     }
//     console.log("寫入成功");
// });

// fs.appendFileSync(file, content);

fs.writeFileSync(file, content, { flag: "a" });
