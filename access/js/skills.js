let smith = document.querySelector(".Smith_button");
let jonson = document.querySelector(".Jonson_button");
let grean = document.querySelector(".Grean_button");
let person = document.querySelector(".person");
let avatar = document.querySelector(".avatar");
let name = document.querySelector(".name");

let photoshopBar = document.querySelector(".photoshop_bar");
let illustratorBar = document.querySelector(".illustrator_bar");
let sketchBar = document.querySelector(".sketch_bar");
let effectsBar = document.querySelector(".effects_bar");

smith.addEventListener('click', showSmith);
jonson.addEventListener('click', showJonson);
grean.addEventListener('click', showGrean);

function showSmith(event) {
	let target = event.target;

	jonson.style.backgroundColor = '#fff';
	grean.style.backgroundColor = '#fff';
    smith.style.backgroundColor = '#8e8181';
    rotate();
    name.innerHTML = 'JANE SMITH';
    avatar.src = 'access/img/avatar1.jpg';

    changeBar(88, 92, 90, 98);
    changeProgressPersent('88', '92', '90', '98');
}

function showJonson(event) {
	let target = event.target;

	jonson.style.backgroundColor = '#8e8181';
	grean.style.backgroundColor = '#fff';
    smith.style.backgroundColor = '#fff';
    rotate();
    name.innerHTML = 'Jony Jonson';
    avatar.src = 'access/img/avatar2.jpg'

    changeBar(70, 88, 85, 65);
    changeProgressPersent('70', '88', '85', '65');
}

function showGrean(event) {
	let target = event.target;

	jonson.style.backgroundColor = '#fff';
	grean.style.backgroundColor = '#8e8181';
    smith.style.backgroundColor = '#fff';
    rotate();
    name.innerHTML = 'Jack Grean';
    avatar.src = 'access/img/avatar3.jpg'

    changeBar(98, 99, 96, 100);
    changeProgressPersent('98', '99', '96', '100');
}

function rotate() {
	if (person.style.transform == 'rotateY(360deg)') {
		person.style.transform = 'rotateY(0deg)';
	} else {
		person.style.transform = 'rotateY(360deg)';
	}
}

function changeBar(photoshopBarValue, illustratorBarValue, sketchBarValue, effectsBarValue) {
	photoshopBar.style.width = photoshopBarValue + '%';
    illustratorBar.style.width = illustratorBarValue + '%';
    sketchBar.style.width = sketchBarValue + '%';
    effectsBar.style.width = effectsBarValue + '%';
}

function changeProgressPersent(photoshopPersentValue, illustratorPersentValue, sketchPersentValue, effectsPersentValue) {
	
	let photoshopStart = +photoshopPersent.innerHTML;
	let photoshopEnd = +photoshopPersentValue;

	let illustratorStart = +illustratorPersent.innerHTML;
	let illustratorEnd = +illustratorPersentValue;

	let sketchStart = +sketchPersent.innerHTML;
	let sketchEnd = + sketchPersentValue;

	let effectsStart = +effectsPersent.innerHTML;
	let effectsEnd = +effectsPersentValue;


	let illustratorInterval = setInterval(function() {

		if (illustratorStart < illustratorEnd) {
		illustratorPersent.innerHTML = ++illustratorStart;
	       } else {
	       	illustratorPersent.innerHTML = --illustratorStart;
	       }
		if (illustratorStart == illustratorEnd) {
			clearInterval(illustratorInterval);
		}
	}, 50);

	let photoshopInterval = setInterval(function() {

		if (photoshopStart < photoshopEnd) {
		photoshopPersent.innerHTML = ++photoshopStart;
	       } else {
	       	photoshopPersent.innerHTML = --photoshopStart
	       }
		if (photoshopStart == photoshopEnd) {
			clearInterval(photoshopInterval);
		}
	}, 50);

	let sketchInterval = setInterval(function() {

		if (sketchStart < sketchEnd) {
		sketchPersent.innerHTML = ++sketchStart;
	       } else {
	       	sketchPersent.innerHTML = --sketchStart
	       }
		if (sketchStart == sketchEnd) {
			clearInterval(sketchInterval);
		}
	}, 50);

	let effectsInterval = setInterval(function() {

		if (effectsStart < effectsEnd) {
		effectsPersent.innerHTML = ++effectsStart;
	       } else {
	       	effectsPersent.innerHTML = --effectsStart
	       }
		if (effectsStart == effectsEnd) {
			clearInterval(effectsInterval);
		}
	}, 50);
}
