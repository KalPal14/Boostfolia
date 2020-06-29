document.querySelector(".play").addEventListener('click', play);
document.querySelector(".clip").addEventListener('click', stop);
document.querySelector(".clip").addEventListener('ended', toStart);

let video = document.querySelector(".clip");
let playBottom = document.querySelector(".play");

function play() {
    video.play();
    playBottom.style.display = 'none';
}

function stop() {
	video.pause();
	playBottom.style.display = 'flex';
	video.currentTime = '0';
}

function toStart() {
	video.currentTime = '0';
	playBottom.style.display = 'flex'
}