
document.querySelector(".play_now").onclick = openFullVideo;
document.querySelector(".fullVideoBlock").onclick = clouseFullVideo;

let fullVideoBlock = document.querySelector(".fullVideoBlock");

function openFullVideo() {
	fullVideoBlock.style.display = 'flex';
	let video = document.querySelector(".fullVideo");
	video.play();
}

function clouseFullVideo(event) {
 fullVideoBlock.style.display = 'none';
 let video = document.querySelector(".fullVideo");
 video.pause();
 video.currentTime = '0';
}