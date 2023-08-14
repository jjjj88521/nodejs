const ejs = require("ejs");
const fs = require("fs");
const path = require("path");

let user;
user = {
    name: "Jack",
    img: "https://randomuser.me/api/portraits/men/68.jpg",
};

// if (user) {
//     console.log(`
//         <img src="${user.img}"><span>${user.name}</span><br>
//         <button>登出</button>
//     `);
// } else {
//     console.log(`
//     <button>登入</button><button>註冊</button>
//     `);
// }

let file = path.resolve(__dirname, "./template03.html");
let template = fs.readFileSync(file).toString();
let result = ejs.render(template, { user });

console.log(result);
