const name = "Jack";
function sayMyName() {
    console.log(name);
}

// 公開 sayMyName 函式，其他 js 程式就能使用此函式
module.exports = sayMyName;
