function oro() {

	var a = new Date();
	var b = a.getHours();
	var c = a.getMinutes();
	var d = a.getSeconds();


	if (b < 10 && c < 10 && d < 10) {
		document.getElementById("scr").innerHTML = ("0" + b + ":0" + c + ":0" + d);
	} else if (d < 10 && c < 10) {
		document.getElementById("scr").innerHTML = (b + ":0" + c + ":0" + d);
	} else if (b < 10 && c < 10) {
		document.getElementById("scr").innerHTML = ("0" + b + ":0" + c + ":" + d);
	} else if (b < 10 && d < 10) {
		document.getElementById("scr").innerHTML = ("0" + b + ":" + c + ":0" + d);
	} else if (d < 10) {
		document.getElementById("scr").innerHTML = (b + ":" + c + ":0" + d);
	} else if (c < 10) {
		document.getElementById("scr").innerHTML = (b + ":0" + c + ":" + d);
	} else if (b < 10) {
		document.getElementById("scr").innerHTML = ("0" + b + ":" + c + ":" + d);
	} else {
		document.getElementById("scr").innerHTML = (b + ":" + c + ":" + d);
	}

}
setInterval(oro, 1000);

window.onscroll = function () {
	scrollo()
};

function scrollo() {
	var winScroll = document.body.scrollTop;  
	var height =  document.body.scrollHeight - document.body.clientHeight;
	var scrolled = (winScroll / height) * 100;
	document.getElementById("barra-progressi").style.width = scrolled + "%";
}




