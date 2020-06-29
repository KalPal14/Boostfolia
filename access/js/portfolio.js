
let selectedLine;
let selectedText;
function addMarcks(event) {
	if (event.target.tagName != 'BOTTOM') return;
	let line = event.target.firstElementChild;
	let text = event.target;

	highlight(line);
	addThumbnail(text);
}
function highlight(elem) {
   if (selectedLine) {
   	selectedLine.classList.remove('portfolio_line');
   }

    selectedLine = elem;
    selectedLine.classList.add('portfolio_line');
}
function addThumbnail(elem) {
   if (selectedText) {
      selectedText.classList.remove('portfolio_bottom_fat');
   }

   selectedText = elem;
   selectedText.classList.add('portfolio_bottom_fat')
}
document.querySelector(".portfolio_bottoms").addEventListener('click', addMarcks);
 



function showAll(event) {

    for (let img of document.querySelectorAll(".portfolio_all")) {
    	img.style.display = 'block';
   }

}

function showFoto(event) {
	showAll(event);

   let fotos = document.querySelectorAll(".portfolio_foto");

   for (let img of document.querySelectorAll(".portfolio_all")) {

        if (Object.values(fotos).includes(img)) continue;

   	     img.style.display = 'none';
   }
}

function showWeb(event) {
	showAll(event);

   let web = document.querySelectorAll(".portfolio_web");

   for (let img of document.querySelectorAll(".portfolio_all")) {

        if (Object.values(web).includes(img)) continue;

   	     img.style.display = 'none';
   }
}

function showBrand(event) {
	showAll(event);

   let brand = document.querySelectorAll(".portfolio_logotipe");

   for (let img of document.querySelectorAll(".portfolio_all")) {

        if (Object.values(brand).includes(img)) continue;

   	     img.style.display = 'none';
   }
}

function showMobile(event) {
	showAll(event);

   let mobile = document.querySelectorAll(".portfolio_mobile");

   for (let img of document.querySelectorAll(".portfolio_all")) {

        if (Object.values(mobile).includes(img)) continue;

   	     img.style.display = 'none';
   }
}

document.querySelector(".all_bottom").addEventListener('click', showAll);
document.querySelector(".photo_bottom").addEventListener('click', showFoto);
document.querySelector(".web_bottom").addEventListener('click', showWeb);
document.querySelector(".brand_bottom").addEventListener('click', showBrand);
document.querySelector(".mobile_bottom").addEventListener('click', showMobile);




document.querySelector(".grid_all").addEventListener('click', openFullImg);

let fullBlock = document.querySelector('.fullBlock');
let imgContainers = document.querySelectorAll(".portfolio_all");

function openFullImg(event) {

  let img = event.target;
  let imgContainer;

  for (let cont of imgContainers) {

  	if (cont.contains(img)) {
  		imgContainer = cont;
  	}

  }
  
  fullBlock.style.display = 'flex';
  fullBlock.append(img);
  img.style.zIndex = '9999';
  img.style.zoom = '100%';
  document.body.style.overflow = 'hidden';
  imgContainer.style.background = '#fff';


img.addEventListener('click', changeImgSize);

  function changeImgSize(event) {

      if (event.target.style.zoom == '150%') {
      	img.style.zoom = '100%';
      } else {
      	img.style.zoom = '150%';
      }

  }

document.querySelector(".fullBlock").addEventListener('click', clouseFullImg);

function clouseFullImg(event) {

    if (event.target.tagName == 'IMG') return;

	fullBlock.style.display = 'none';
	imgContainer.append(img);
	img.style.zIndex = '0';
	document.body.style.overflow = 'auto';
   
}

}
