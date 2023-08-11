const fs = require("fs");
const path = require("path");

// path.sep 取得當前作業系統中用於分隔檔案路徑部分的特殊符號
// console.log(path.sep);

// path.resolve(檔名) 補完絕對路徑
// console.log(path.resolve("test.txt"));

// __filename 當前檔案的絕對路徑
// console.log(__filename);

// path.parse(檔名) 回傳檔案的相關資訊，例如 __filename 會回傳
// {
//     root: 'C:\\',
//     dir: 'C:\\Users\\iii_student\\Desktop\\nodejs\\node01',
//     base: 'testPath.js',
//     ext: '.js',
//     name: 'testPath'
// }
// console.log(path.parse(__filename));

let file = "/ppp.txt";
let pathName = path.resolve(__dirname + file);
let pathObj = path.parse(pathName);
// console.log(pathObj.base);

const { name: a1, ext: a2 } = pathObj;
console.log(a1, a2);
