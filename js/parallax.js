//パララックスについては、simple parallaxを使用する。
var image = document.getElementsByClassName('thumbnail');
new simpleParallax(image, {
	orientation: 'right'
});