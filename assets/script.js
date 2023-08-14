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

const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');


 arrowLeft.addEventListener('click', function() {
	alert('bonjour gauche')
 });

 arrowRight.addEventListener('click', function() {
	alert('bonjour droite')
 });

// creation des boutons

//function createDots(){
//	let dot = document.createElement('div');
//	dot.classList.add('dot');
//	document.querySelector(".dots").appendChild(dot);
//}

//createDots();

for (let i = 0; i < slides.length; i ++) {
	const dot = document.createElement('div');
	dot.classList.add('dot');
	document.querySelector(".dots").appendChild(dot);
}



