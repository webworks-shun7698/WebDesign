window.addEventListener('load', function(){
  var elem = document.querySelector(".swiper-container");
  if (elem !== null) { //swiper-containerがあれば…
  var mySwiper = new Swiper(".swiper-container", {
    loop: true, //ループさせる
    effect: "fade", //フェードのエフェクト
    autoplay: {
      delay: 4000, //４秒後に次の画像へ
      disableOnInteraction: false //ユーザー操作後に自動再生を再開する
    },
    speed: 2000, //２秒かけながら次の画像へ移動
    allowTouchMove: false, //マウスでのスワイプを禁止
  });
}
});