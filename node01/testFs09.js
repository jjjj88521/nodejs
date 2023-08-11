const fs = require("fs");
// fs.rename("./測試連續寫入.txt", "詩.txt", function (error) {
//     if (error) {
//         console.log("重新命名失敗");
//         return false;
//     }
//     console.log("重新命名成功");
// });

fs.rename("./詩.txt", "./text/詩.txt", function (error) {
    if (error) {
        console.log("重新命名失敗");
        return false;
    }
    console.log("重新命名成功");
});

// fs.renameSync("./text/詩.txt", "重新命名詩.txt");
