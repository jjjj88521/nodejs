const fs = require("fs");
const dir = "./zero";
if (!fs.existsSync(dir)) {
    try {
        fs.mkdirSync(dir);
        console.log(`創建資料夾 ${dir} 成功`);
    } catch (error) {
        console.log("創建資料夾失敗");
    }
}

function writeHTML(i, dir) {
    const file = i < 10 ? `./zero0${i}.html` : `./zero${i}.html`;

    const content = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>這是第 ${i} 個 HTML 檔案</title>
</head>
<body>
    <h1>這是第 ${i} 個 HTML 檔案</h1>
</body>
</html>`;
    try {
        fs.writeFileSync(dir + "/" + file, content);
        console.log(`${file} 寫入成功`);
    } catch (error) {
        console.log(`${file} 寫入失敗`);
    }
}
for (let i = 1; i <= 20; i++) {
    writeHTML(i, dir);
}
