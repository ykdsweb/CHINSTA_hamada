//20210209追加 「閉じる」ボタンを押すと消える追尾バナーのjs
$(function() {
    var topBtn = $('.closeBanner');
    var closeButtonClicked = false;

    topBtn.hide();
    //スクロールが300に達したらバナー表示
    $(window).scroll(function () {
        if (closeButtonClicked) return; // クリックされていたら以下を実行しない。
        if ($(this).scrollTop() > 500) {
        //バナーの表示方法
            topBtn.fadeIn();
        } else {
        //バナーの非表示方法
            topBtn.fadeOut();
        }
    });
    // 閉じるボタン
    topBtn.click(function () {
        $(this).css("display","none");
        closeButtonClicked = true;
    });
});