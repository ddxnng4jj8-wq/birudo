let point = 0;
let coupons = [];

// 栄養素の初期値（%）
let nutrition = {
    carb: 80,
    protein: 30, // 最初はたんぱく不足
    fat: 70,
    vitamin: 75,
    mineral: 85
};

function updateUI() {
    // ポイント表示
    document.getElementById("pointText").textContent = point + "pt";

    // 栄養状態に応じたアバターとテキストの変化
    let avatar = "😞";
    let statusText = "たんぱく不足";
    let recommendText = "牛肉・魚・大豆";

    if (nutrition.protein >= 80) {
        avatar = "😄";
        statusText = "元気いっぱい！";
        recommendText = "バランス良好！";
    } else if (nutrition.protein >= 50) {
        avatar = "🙂";
        statusText = "やや改善傾向";
        recommendText = "卵・鶏むね肉など";
    } else {
        avatar = "😞";
        statusText = "たんぱく不足";
        recommendText = "牛肉・魚・大豆";
    }

    // 表情のテキスト反映
    document.getElementById("avatarEmoji").textContent = avatar;
    document.getElementById("statusText").textContent = statusText;
    document.getElementById("recommendFood").textContent = recommendText;

    // メーターの幅を更新
    document.getElementById("fill-carb").style.width = nutrition.carb + "%";
    document.getElementById("fill-protein").style.width = nutrition.protein + "%";
    document.getElementById("fill-fat").style.width = nutrition.fat + "%";
    document.getElementById("fill-vitamin").style.width = nutrition.vitamin + "%";
    document.getElementById("fill-mineral").style.width = nutrition.mineral + "%";
}

// ページ読み込み時の処理
window.onload = function() {
    updateUI();

    // 写真選択（カメラ）が行われたときの処理
    const photoInput = document.getElementById("photoInput");
    photoInput.addEventListener("change", function(event) {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = function(e) {
            // アバター部分に選んだ料理の写真をプレビュー表示する！
            const avatarBox = document.getElementById("avatarBox");
            avatarBox.innerHTML = `<img src="${e.target.result}" alt="食事写真">`;
        };
        reader.readAsDataURL(file);

        // 食事を記録したご褒美としてポイントと栄養をアップ！
        point += 150;
        nutrition.protein = Math.min(100, nutrition.protein + 25);
        nutrition.carb = Math.min(100, nutrition.carb + 10);

        // 画面を更新
        updateUI();
        alert("食事を記録しました！たんぱく質が回復し、ポイントを獲得しました！");
    });
};