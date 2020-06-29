let mapButton = document.querySelector(".map_button");

mapButton.addEventListener('click', changeMapAppearance);

function changeMapAppearance(event) {
     let map = document.querySelector(".google_map");
     map.classList.toggle("map_hidden");
    
    let img = document.querySelector(".map_img");
    
    if (img.style.transform == 'rotateX(0deg)') {
    	img.style.transform = 'rotateX(180deg)';
    } else {
    	img.style.transform = 'rotateX(0deg)'
    }
}