// const swiper = new Swiper(".swiper", {
//     // ページネーションが必要なら追加
//     pagination: {
//       el: ".swiper-pagination"
//     },
//     // ナビボタンが必要なら追加
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev"
//     }
//   });
// クリックで画像が切り替わる
// window.addEventListener('load', function(){
//     var target = document.getElementsByClassName('j_slider-target');

//     var targetArray = [];
//     //画像の数だけ要素を持つ配列を作成する
//     for(let i=0; i<target.length; i++) {
//         targetArray.push(i);
//     }

//     //初期設定としてArray(0)を表示、Array(1)に.slider-next、末尾の要素に.slider-prior、それ以外の要素に.slider-offを付与
//     // for(let i=0; i<targetArray.length; i++) {
//     //     if(i==0) {

//     //     } else if(i==1) {
//     //         target[i].classList.add('slider-next');
//     //     } else if(i==(targetArray.length-1)) {
//     //         target[i].classList.add('slider-prior');
//     //     } else {
//     //         target[i].classList.add('slider-off');
//     //     }
//     // }

//     //クリック毎に配列を一つずつずらす
//     this.window.addEventListener('click',function(){
//         var firstElement = targetArray[0];
//         targetArray.push(firstElement);
//         targetArray.shift();
//     });

//     //クリック毎にcssを切り替える
//     this.window.addEventListener('click',function(){
//         for(let i=0; i<targetArray.length; i++) {
//             console.log(targetArray[i]);
//             if(i==0) {
//                 target[targetArray[i]].classList.remove('slider-next');
//             } else if(i==1) {
//                 target[targetArray[i]].classList.remove('slider-off');
//                 target[targetArray[i]].classList.add('slider-next');
//             } else if(i==(targetArray.length-1)) {
//                 target[targetArray[i]].classList.add('slider-prior');
//             } else if(i==(targetArray.length-2)) {
//                 target[targetArray[i]].classList.remove('slider-prior');
//                 target[targetArray[i]].classList.add('slider-off');
//             } else {

//             }
//         }
//     });
// });