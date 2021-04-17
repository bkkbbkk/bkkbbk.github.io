// Фото
var images = [
"nada.jpg",
"kiril.jpg",
"kto.jpg",
"nada3.jpg",
"nada1.jpg",
"lena.jpg"
];
var images1 = [
"nada4.jpg",
"ila.jpg",
"nada3.jpg",
"lena.jpg"
];
// Кнопки по смене фото
var num = 0;
// Вперд
function next() {
	function zagr() {
	var slider = document.getElementById('slider');
	slider.animate([
				{ opacity: 0 },
                { opacity: 1 },],1000);
	}
	setTimeout(zagr,)

	var slider = document.getElementById('slider');
	num++;
	if (num >= images1.length) {
		num = 0;
	}
	slider.src = images1[num];
}
// Назад
function prew() {
	function zagr() {
	var slider = document.getElementById('slider');
	slider.animate([
				{ opacity: 0 },
                { opacity: 1 },],1000);
	}
	setTimeout(zagr, 0)
	
	var slider = document.getElementById('slider');
	num--;
	if (num < 0) {
		num = images1.length-1;
	}
	slider.src = images1[num];
}
// Плавная смена фото
var num = 0;
function nextt() {
	var photo1 = document.getElementById('photo1');
	num++;
	if (num >= images.length) {
		num = 0;
	}
	photo1.src = images[num];
}
setInterval(nextt, 4000);
// плавное затемнение фото
function zagr() {
	var photo2 = document.getElementById('photo1');
	photo2.animate([ { opacity: 0 },
                  { opacity: 1 },
                  { opacity: 1 },
                  { opacity: 0 }],4000);
}
setInterval(zagr, 4000);