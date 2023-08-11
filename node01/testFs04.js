const fs = require("fs");
const ws = fs.createWriteStream("./測試連續寫入.txt");

ws.on("finish", function () {
    console.log("全部寫入完成");
});
ws.write("白日依山盡\r\n"); // 寫入
ws.write("黃河入海流\r\n"); // 寫入
ws.write("欲窮千里目\r\n"); // 寫入
ws.write("更上一層樓\r\n"); // 寫入
ws.end(); // 結束寫入
