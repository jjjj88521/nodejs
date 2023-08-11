const cols = document.querySelectorAll(".col");
// 改成陣列型別
// 第一種
// Array.from(cols);
// 第二種 解構賦值
[...cols].map(col => {
    col.addEventListener("click", function () {
        this.classList.contains("active")
            ? this.classList.remove("active")
            : this.classList.add("active");
    });
});
