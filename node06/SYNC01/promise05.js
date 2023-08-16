let a;

function t1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            a = 10;
            console.log("進行中");
            resolve("成功了");
            // reject("錯誤了");
        }, 0);
    });
}

// async 環境
// async function doThing() {
//     console.log("開始");
//     // await 等待 t1() 內 setTimeout 回調完成，才會繼續執行
//     let result = await t1();
//     console.log("result = " + result);
//     console.log("結束, a+a=" + (a + a));
// }

// doThing();

// 立即執行函式
(async () => {
    console.log("開始");
    let result = await t1();
    console.log("result = " + result);
    console.log("結束, a+a=" + (a + a));
})();
