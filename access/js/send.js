document.querySelector(".gmail_send").onclick = sendMessage;

function sendMessage(event) {
	let textareas = document.querySelectorAll(".textarea");

    let textareasArr = Object.values(textareas);

    if (!String(textareasArr[1].innerHTML).includes("@") || !String(textareasArr[1].innerHTML).includes("@")) {
    	alert('Введите правильную почту');
    	return;
    }

    textareasArr.map( function(textarea) {
    	textarea.innerHTML = null;
    });

    alert('Ссообщение отправлено');
}