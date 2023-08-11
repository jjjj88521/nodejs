const boy = require("./boy");
const girl = require("./girl");

let movie = {
    name: "Barbie",
    role: {
        boy: {
            name: boy.name,
            gender: boy.gender,
            email: boy.email,
        },
        girl: {
            name: girl.name,
            gender: girl.gender,
            email: girl.email,
        },
    },
};

console.log(movie);
