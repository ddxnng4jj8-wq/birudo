let point = 0;
let saved = false;
let coupons = [];

function saveFood() {

    const file = document.getElementById("photo").files[0];

    if (!file) {
        alert("写真を選択してください");
        return;
    }

    if (saved) {
        alert("この写真はすでに保存済みです");
        return;
    }

    const reader = new FileReader();

    reader.onload = function(e) {
        document.getElementById("preview").innerHTML =
            `<img src="${e.target.result}">`;
    };

    reader.readAsDataURL(file);

    point += 10;

    saved = true;
    document.getElementById("saveBtn").disabled = true;

    updateUI();
}

function buyCoupon(type) {

    if (type === "season") {

        if (point < 2000) {
            document.getElementById("shopMsg").textContent =
                "ポイント不足です";
            return;
        }

        point -= 2000;
        coupons.push("🥕 岐阜の旬の野菜クーポン");
    }

    if (type === "gifu") {

        if (point < 3000) {
            document.getElementById("shopMsg").textContent =
                "ポイント不足です";
            return;
        }

        point -= 3000;
        coupons.push("🌿 岐阜野菜セットクーポン");
    }

    document.getElementById("shopMsg").textContent =
        "クーポンを獲得しました！";

    updateUI();
}

function updateUI() {

    document.getElementById("point").textContent = point;

    let avatar = "😞 疲れ気味";

    if (point >= 3000) {
        avatar = "😄 とても元気";
    }
    else if (point >= 1000) {
        avatar = "🙂 元気";
    }
    else if (point >= 100) {
        avatar = "😐 普通";
    }

    document.getElementById("avatar").textContent = avatar;

    if (coupons.length === 0) {
        document.getElementById("couponList").textContent = "なし";
    } else {
        document.getElementById("couponList").innerHTML =
            coupons.map(c => "・" + c).join("<br>");
    }
}

window.onload = function() {

    document.getElementById("photo").addEventListener("change", function() {

        saved = false;
        document.getElementById("saveBtn").disabled = false;

    });

    updateUI();
};