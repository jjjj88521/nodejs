const fs = require("fs");

// let dir = "./html2";
// // 判斷資料夾存在與否
// let result = fs.existsSync(dir);
// // console.log(result);
// if (!result) {
//     // 建立資料夾
//     fs.mkdir(dir, error => {
//         if (error) {
//             console.log("建立資料夾失敗");
//             return false;
//         }
//         console.log("建立資料夾成功");
//     });
// }

let dir = "./a/b/c";
// 判斷資料夾存在與否
let result = fs.existsSync(dir);
// console.log(result);
if (!result) {
    // 建立資料夾
    // 遞迴
    fs.mkdir(dir, { recursive: true }, error => {
        if (error) {
            console.log("建立資料夾失敗");
            return false;
        }
        console.log("建立資料夾成功");
    });
}
