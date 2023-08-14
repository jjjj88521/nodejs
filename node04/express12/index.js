const express = require("express");
const app = express();

const front = require("./route/front");
const back = require("./route/back");
const user = require("./route/user");

app.use(front);
app.use(back);
app.use("/user", user);

app.listen(3000, () => {
    console.log("server is running");
});
