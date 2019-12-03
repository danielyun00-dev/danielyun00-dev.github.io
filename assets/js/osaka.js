
function showPopup(imageID) {
	document.getElementById('pcontainer').classList.remove('hidden');
	document.getElementById(imageID).classList.remove('hidden');
}

function showPicture1(){
	showPopup('popo1');
}

function showPicture2(){
	showPopup('popo2');
}

function showPicture3(){
	showPopup('popo3');
}

function showPicture4(){
	showPopup('popo4');
}

function showPicture5(){
	showPopup('popo5');
}

function showPicture6(){
	showPopup('popo6');
}

function showPicture7(){
	showPopup('popo7');
}

function showPicture8(){
	showPopup('popo8');
}
document.getElementById('o1').onclick = showPicture1;
document.getElementById('o2').onclick = showPicture2;
document.getElementById('o3').onclick = showPicture3;
document.getElementById('o4').onclick = showPicture4;
document.getElementById('o5').onclick = showPicture5;
document.getElementById('o6').onclick = showPicture6;
document.getElementById('o7').onclick = showPicture7;
document.getElementById('o8').onclick = showPicture8;

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