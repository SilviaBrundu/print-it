 const slides = // creation tableau dans variable slides

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

let positionTab = 0;
const arrowLeft = document.querySelector('.arrow_left'); //selection fleches gauche/droite
const arrowRight = document.querySelector('.arrow_right');

// ma boucle "for"

for (let i = 0; i < slides.length; i ++) {	// Pour chaque image, création dot dans ma div dots
	let dot = document.createElement('div');	// creation de l'element div
	dot.classList.add('dot');	//creation de la classe dot dans la variable dot
	document.querySelector('.dots').appendChild(dot);	// creation de la classe dot dans ma div dots
}

let dotSelected = document.querySelector('.dot'); 
dotSelected.classList.add("dot_selected");

 arrowLeft.addEventListener('click', function() { //evenement au click avec addEventListener

	const dots = document.querySelectorAll('.dot');	// variable qui contient toutes les div dot
	dots[positionTab].classList.remove('dot_selected');	// Enlève la classe de dot_selected grace a remove
	positionTab = positionTab-1;	//recule de 1 a chaque click sur la fleche gauche
	infinitySlides();
	changeImage(positionTab);	//change image en prenant en parametre la position
	dots[positionTab].classList.add('dot_selected');  // permet de placer la class dot_selected au cotes de la classe dot en fonction de sa position
 });

 arrowRight.addEventListener('click', function() {	

	const dots = document.querySelectorAll('.dot');	
	dots[positionTab].classList.remove('dot_selected');	
	positionTab = positionTab+1;	//avance de 1 a chaque click sur la fleche droite
	infinitySlides();
	changeImage(positionTab);	
	dots[positionTab].classList.add('dot_selected'); 
});

// toute mes fonctions

function infinitySlides() {
	if (positionTab < 0) {	// si ma position est inferieur a zero
		positionTab = slides.length - 1;  //ma position est egale au nombre de slides -1
	}

	else if ( positionTab >= slides.length ) {	//si ma position et superieur ou egale au nombre de slide
		positionTab = 0;  //je rebascule sur la premiere image
	}
};

function changeImage(index) {
	document.querySelector('.banner-img').src = './assets/images/slideshow/' + slides[index].image;  //selection de la source des images
	document.querySelector('#banner p').innerHTML = slides[index].tagLine;  //selection de tout les paragraphes avec innerhtml 
};


















