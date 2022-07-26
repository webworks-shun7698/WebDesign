//スクロールの度にターゲット要素のページ上の位置を算出する
document.addEventListener('scroll', function(e){
	var elem = document.getElementsByClassName('thumbnail');
	var clientRect = elem[0].getBoundingClientRect();
	var windowHeight = window.innerHeight;

	if (clientRect.top < windowHeight) {
		console.log('つけるよ');
	} else if (clientRect.bottom < 0) {
		console.log('消すよ');
	} else {

	}
});
