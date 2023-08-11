const fs = require("fs");

let works;
try {
    works = fs.readdirSync(__dirname + "/work");
    // console.log(works);
} catch (error) {
    console.log("讀取失敗");
}

works.forEach(work => {
    let reg = /^work\d.html$/;
    if (work.match(reg)) {
        let newFile = work.replace(/\d/, match => {
            return match.padStart(2, "0");
        });
        // console.log(newFile);
        fs.renameSync(
            __dirname + `/work/${work}`,
            __dirname + `/work/${newFile}`
        );
    }
});
