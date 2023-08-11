const name = "Jack";
const country = "Taiwan";

function sayName() {
    console.log(name);
}

function sayCountry() {
    console.log(country);
}

// 使用物件方式導出函式
// module.exports 可以導出任何型別的內容
// module.exports = {
//     sayName, // 物件的 key 與 value 的函式名相同可以省略冒號
//     sayCountry,
// };

// 直接使用 exports 去導出函式
exports.sayName = sayName;
exports.sayCountry = sayCountry;
