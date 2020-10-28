var images = [
"nada.jpg",
"kiril.jpg",
"kto.jpg",
"dasha.jpg",
"nada1.jpg",
"lena.jpg"
];
var num = 0;
function next() {
	var slider = document.getElementById('slider');
	num++;
	if (num >= images.length) {
		num = 0;
	}
	slider.src = images[num];
}
function prew() {
	var slider = document.getElementById('slider');
	num--;
	if (num < 0) {
		num = images.length-1;
	}
	slider.src = images[num];
}