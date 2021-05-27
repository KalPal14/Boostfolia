let menuBurger = document.querySelector(".menu_burger");
let menuList = document.querySelector(".menu_list");

menuBurger.onclick = openMenu;

function openMenu(event) {
	menuBurger.classList.toggle("menu_open");
	menuList.classList.toggle("menu_list_hidden")
}

aboutUs.onclick = scrolltoAbout;
// works.onclick = scrolltoWorks;
// we.onclick = scrolltoWe;
// blog.onclick = scrolltoBlog;
locayion.onclick = scrolltoLocation;

function scrolltoAbout(event) {
	AboutUs.scrollIntoView(top = true);
}

function scrolltoWorks(event) {
	ourWorks.scrollIntoView(top = true);
}

function scrolltoWe(event) {
	whoWeAre.scrollIntoView(top = true);
}

function scrolltoBlog(event) {
	blogPosts.scrollIntoView(top = true);
}

function scrolltoLocation(event) {
	locateOnMap.scrollIntoView(top = true);
}
