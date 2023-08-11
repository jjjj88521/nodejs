const fs = require("fs");

const file1 = "./測試寫入2.txt";
const content = "白日依山盡，黃河入海流。\n";

try {
    fs.writeFileSync(file1, content);
    console.log("2 寫入成功");
} catch (error) {
    console.log("1 寫入失敗");
}

console.log("3 測試字串"); // writeFileSync() 執行完才會執行此段
