const fs = require("fs");

let data;
try {
    data = fs.readFileSync("./測試寫入.txt");
} catch (error) {}

if (data) {
    console.log(data.toString());
} else {
    console.log(data);
}
