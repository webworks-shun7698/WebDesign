
//スクロールの度にターゲット要素のページ上の位置を算出する
document.addEventListener('scroll', function(e){
	var elem = document.getElementsByClassName('add-target');
	var clientRect = elem[0].getBoundingClientRect();
	var windowHeight = window.innerHeight;

	if ((clientRect.top < windowHeight) && (clientRect.bottom > 0)) {
		elem[0].classList.add('parallax');

		var image = document.getElementsByClassName('parallax');
		//パララックスについては、simple parallaxを使用する。
		new simpleParallax(image, {
			orientation: 'right'
		});
	} else {
		elem[0].classList.remove('parallax');
	}
});