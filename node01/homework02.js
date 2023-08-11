const fs = require("fs");

// 判斷資料夾是否存在，不存在就建一個資料夾 work
if (!fs.existsSync("./work")) {
    fs.mkdirSync("./work");
}
for (let i = 1; i <= 20; i++) {
    try {
        let file = `./work${i}.html`;
        let newFile = `./work/work${i}.html`;
        fs.renameSync(file, newFile);
        console.log(`${file} 移動成功`);
    } catch (error) {
        console.log("移動失敗");
    }
}
