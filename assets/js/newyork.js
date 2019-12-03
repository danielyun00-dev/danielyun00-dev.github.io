
function showPopup(imageID) {
	document.getElementById('pcontainer').classList.remove('hidden');
	document.getElementById(imageID).classList.remove('hidden');
}

function showPicture1(){
	showPopup('popn1');
}

function showPicture2(){
	showPopup('popn2');
}

function showPicture3(){
	showPopup('popn3');
}

function showPicture4(){
	showPopup('popn4');
}

function showPicture5(){
	showPopup('popn5');
}

function showPicture6(){
	showPopup('popn6');
}

function showPicture7(){
	showPopup('popn7');
}

function showPicture8(){
	showPopup('popn8');
}
document.getElementById('n1').onclick = showPicture1;
document.getElementById('n2').onclick = showPicture2;
document.getElementById('n3').onclick = showPicture3;
document.getElementById('n4').onclick = showPicture4;
document.getElementById('n5').onclick = showPicture5;
document.getElementById('n6').onclick = showPicture6;
document.getElementById('n7').onclick = showPicture7;
document.getElementById('n8').onclick = showPicture8;

function hidePopup(imageID) {
	document.getElementById('pcontainer').classList.add('hidden');
	document.getElementById(imageID).classList.add('hidden');
}

function hideAllPopups() {
	let popups = document.getElementsByClassName('popup');

	for (let i = 0; i < popups.length; i++) {
		hidePopup(popups[i].id);
	}
}

document.getElementById('pcontainer').onclick = hideAllPopups;