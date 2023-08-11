const { log } = require("console");
const fs = require("fs");

const file1 = "./測試寫入3.txt";
const content = "白日依山盡，黃河入海流。\n";

fs.writeFile(file1, content, error => {
    if (error) {
        console.log("1 寫入失敗");
        return false;
    }
    console.log("2 寫入成功");
});
console.log("3 測試字串"); // 不會等待寫入成功才執行
