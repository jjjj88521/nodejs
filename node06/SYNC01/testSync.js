let t1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("t1 over!!");
            resolve();
        }, 2000);
    });
};

let t2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("t2 over!!");
            resolve();
        }, 4000);
    });
};

let t3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("t3 over!!");
            resolve();
        }, 1000);
    });
};

// 使用 async 就能照順序執行 t1 t2 t3
(async () => {
    await t1();
    await t2();
    await t3();
})();
