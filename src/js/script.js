import "../sass/style.scss";
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる
// ドロワーメニュー
$(".js-drawer").on("click", function () {
  $(this).toggleClass("active");
  $(".header").toggleClass("active");
  $(".sp-nav").toggleClass("active");
});

//  テキストが15文字以上になった場合に「…（省略記号）」でカットされるCSS の実装
const elems = document.querySelectorAll('.blog-text');
elems.forEach(el => {
  const text = el.textContent;
  if (text.length > 15) {
    el.textContent = text.slice(0, 15) + '...';
  }
});
    
// スクロールしたらヘッダー追従
$(window).on("scroll", function () {
  // ファーストビューの高さを取得
  mvHeight = $(".js-main").height();
  if ($(window).scrollTop() > mvHeight) {
    // スクロールの位置がファーストビューより下の場合にclassを付与
    $(".header").addClass("header-scroll");
  } else {
    // スクロールの位置がファーストビューより上の場合にclassを外す
    $(".header").removeClass("header-scroll");
  }
});

$(".js-hamberger").on("click", function () {
    $(this).toggleClass("active");
    $(".sp-nav").toggleClass("active");
});
//. swiper FV
const swiper = new Swiper('.swiper', {
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  effect: 'fade', 
    autoplay: {
    delay: 4000, // 4秒後に次のスライドへ
    disableOnInteraction: false, // ユーザーが操作しても自動再生を継続
  },
  speed: 2000, //追加
});
//. ここまで

});
