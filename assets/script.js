 const slides = 

[
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// les fleches droite et gauche

let positionTab = 0;
let index = 0;
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');

for (let i = 0; i < slides.length; i ++) {
	let dot = document.createElement('div');
	dot.classList.add('dot');
	document.querySelector('.dots').appendChild(dot);
}

let dotSelected = document.querySelector('.dot');
dotSelected.classList.add("dot_selected");

 arrowLeft.addEventListener('click', function() {

	const dots = document.querySelectorAll('.dot');
	dots[positionTab].classList.remove('dot_selected');
	positionTab = positionTab-1;
	if (positionTab < 0) {
		positionTab = slides.length - 1;
	  }
	changeImage(positionTab);  
	dots[positionTab].classList.add('dot_selected');
 });

 arrowRight.addEventListener('click', function() {
	
	const dots = document.querySelectorAll('.dot');
	dots[positionTab].classList.remove('dot_selected');
	positionTab = positionTab+1;
	if ( positionTab >= slides.length ) {
		positionTab = 0;
	  }
	changeImage(positionTab);
	dots[positionTab].classList.add('dot_selected');
 });

// ajout des images 

function changeImage(index) {
	document.querySelector('.banner-img').src = './assets/images/slideshow/' + slides[index].image;
	document.querySelector('#banner p').innerHTML = slides[index].tagLine;
	
}

















