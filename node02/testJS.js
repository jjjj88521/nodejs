let man = {
    name: "Jack",
    mail: "jack@test.com",
    cell: "0912345678",
};

// 物件解構賦值
let { name: jack_name, mail: jack_mail, cell: jack_cell } = man;
console.log(jack_name, jack_mail, jack_cell);
