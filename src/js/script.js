import "../sass/style.scss";
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

  window.addEventListener("load", () => {
  const loading = document.querySelector(".js-loading");
  const firstView = document.querySelector(".first-view");
  const headerOn =  document.querySelector(".header");

  setTimeout(() => {
    loading.classList.add("is-hidden");
    firstView.classList.add("is-visible");
    headerOn.classList.add("is-visible");

    // ここでSwiper初期化
    initSwiper();
  }, 1500);

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

});
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

//. loading
 //logoの表示
window.addEventListener("load", async () =>{
  $("#splash").delay(1500).fadeOut('slow');//ローディング画面を1.5秒（1500ms）待機してからフェードアウト
  $("#splash_logo").delay(1200).fadeOut('slow');//ロゴを1.2秒（1200ms）待機してからフェードアウト

  const splashFV = document.getElementById("splash");
  const splash = document.querySelector(".c-loading");
  const logo = document.querySelector("#splash_logo");
  const firstView = document.querySelector(".first-view");
  // ① ロゴ表示時間
  await wait(2500);

  // ② ロゴ消えるアニメ用の間
  splash.classList.add("is-hidden");

  await wait(1000); // ←ここがあなたの欲しい1秒

  // ③ パズル開始
  splash.classList.add("is-slide");
    await wait(3000);
  //. ④ アニメーションが終わった後にheaderの位置を調整する
  splashFV.classList.add("is-hidden");

  // ③ 余韻（ここが“ゆっくり感”の正体）
  await wait(1500);

  // ④ メインビュー表示
  firstView.classList.add("is-visible");
});

//. ここまで

});
