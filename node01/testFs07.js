const fs = require("fs");
const rs = fs.createReadStream("./video/movie.mp4");

rs.on("data", function (chunk) {
    console.log(chunk.length); // 每次都讀 64KB
});
rs.on("end", function () {
    console.log("讀取結束");
});
