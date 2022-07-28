// クリックで画像が切り替わる
window.addEventListener('load', function(){
    var target = document.getElementsByClassName('j_slider-target');
    console.log(target.length);
    
    target[0].classList.remove('slider-off');
});