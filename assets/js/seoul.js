
function showPopup(imageID) {
	document.getElementById('pcontainer').classList.remove('hidden');
	document.getElementById(imageID).classList.remove('hidden');
}

function showPicture1(){
	showPopup('pops1');
}

function showPicture2(){
	showPopup('pops2');
}

function showPicture3(){
	showPopup('pops3');
}

function showPicture4(){
	showPopup('pops4');
}

function showPicture5(){
	showPopup('pops5');
}

function showPicture6(){
	showPopup('pops6');
}

function showPicture7(){
	showPopup('pops7');
}

function showPicture8(){
	showPopup('pops8');
}
document.getElementById('s1').onclick = showPicture1;
document.getElementById('s2').onclick = showPicture2;
document.getElementById('s3').onclick = showPicture3;
document.getElementById('s4').onclick = showPicture4;
document.getElementById('s5').onclick = showPicture5;
document.getElementById('s6').onclick = showPicture6;
document.getElementById('s7').onclick = showPicture7;
document.getElementById('s8').onclick = showPicture8;

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