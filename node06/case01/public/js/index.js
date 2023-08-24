// 切換日期網址
$(".myDate").on("change", (e) => {
    const date = e.currentTarget.value;
    location.href = `/expe/d/${date}`;
});

$(".btn-prevDate").on("click", (e) => {
    let date = new Date($(".myDate").val());
    date.setDate(date.getDate() - 1);
    let newDate = date.toISOString().split("T")[0];
    location.href = `/expe/d/${newDate}`;
});

$(".btn-nextDate").on("click", (e) => {
    let date = new Date($(".myDate").val());
    date.setDate(date.getDate() + 1);
    let newDate = date.toISOString().split("T")[0];
    location.href = `/expe/d/${newDate}`;
});

// 側邊選單滑入
const bsOffcanvas = new bootstrap.Offcanvas("#inputArea");
$(".btn-addShow").on("click", (e) => {
    // 清空表單輸入
    $("[name=id]").val("");
    $("[name=title]").val("");
    $("[name=money]").val("");
    $("[name=sort]").val("");
    // 更改應該顯示的按鈕
    $(".newSet").removeClass("d-none");
    $(".newSet").addClass("d-flex");
    $(".updateSet").removeClass("d-flex");
    $(".updateSet").addClass("d-none");

    bsOffcanvas.show();
});

// 新增記帳資料
$(".btn-send").on("click", () => {
    $("form").submit();
});

$(".list").on("click", (e) => {
    const id = $(e.currentTarget).data("id");
    const title = $(e.currentTarget).data("title");
    const money = $(e.currentTarget).data("money");
    const sort = $(e.currentTarget).data("sort");

    $("[name=id]").val(id);
    $("[name=title]").val(title);
    $("[name=money]").val(money);
    $("[name=sort]").val(sort);

    $(".newSet").removeClass("d-flex");
    $(".newSet").addClass("d-none");
    $(".updateSet").removeClass("d-none");
    $(".updateSet").addClass("d-flex");

    bsOffcanvas.show();
});

$(".btn-update").on("click", (e) => {
    const url = "/expe";
    const formData = new FormData($("form")[0]);

    axios
        .put(url, formData)
        .then((response) => response)
        .then((result) => {
            console.log(result.data.result);
            if (result.data.result === 1) {
                let date = $(".myDate").val();
                location.href = `/expe/d/${date}`;
            }
        })
        .catch((err) => {
            console.log(err);
        });
});

// 刪除資料
$(".btn-del").on("click", (e) => {
    let url = "/expe";
    const formData = new FormData($("form")[0]);

    axios
        // axios.delete 必須代入 {data: formData} 確保抓到正確的資料
        .delete(url, { data: formData })
        .then((response) => response)
        .then((result) => {
            console.log(result.data.result);
            if (result.data.result === 1) {
                let date = $(".myDate").val();
                location.href = `/expe/d/${date}`;
            }
        })
        .catch((err) => {
            console.log(err);
        });
});
