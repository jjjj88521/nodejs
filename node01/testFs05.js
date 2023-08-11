const fs = require("fs");

// readFile(path, 編碼, function (error, data)
fs.readFile("./測試寫入.txt", "utf-8", function (error, data) {
    if (error) {
        console.log("讀取失敗");
        return false;
    }
    console.log(data);
});
