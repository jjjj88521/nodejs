let a;
console.log("開始");

setTimeout(() => {
    a = 10;
    console.log("進行中");
}, 0);

console.log(`結束, a+a=${a + a}`);
