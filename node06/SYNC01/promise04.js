let a;
console.log("開始");

new Promise((resolve, reject) => {
    setTimeout(() => {
        a = 10;
        console.log("進行中");
        // resolve();
        reject("錯誤了");
    }, 0);
})
    .then(() => {
        console.log(`結束, a+a=${a + a}`);
    })
    .catch(error => {
        console.log(error);
    });

// promise 格式
// new Promise((resolve, reject) => {
//   let condition = false;
//   if(condition) {
//     resolve('data')
//   } else {
//     reject('error')
// }
// })
