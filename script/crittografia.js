function Cifrato(testo, testoCifrato, chiave, decifra) {
	var c

	Pulitore();

	if (testo.value == "") {
		document.getElementById("testo").style.background = '#e81717';
		document.getElementById("testo").style.border = 'none';
		document.getElementById("displayato_testo").style.display = 'contents';

	}

	if (decifra) {
		c = parseInt(-chiave.value);

	} else {
		c = parseInt(chiave.value);

	}

	if (c == 0) {
		alert("ATTENZIONE!! Mettendo la chiave uguale a 0 ti verrà restituito lo stesso testo");

	} else if (c > 26) {
		document.getElementById("chiavee").style.background = '#e81717';
		document.getElementById("chiavee").style.border = 'none';
		document.getElementById("displayato").style.display = 'contents';
		return;
	}
	else if (chiave.value == ""){
		alert('ATTENZIONE!! Non hai inserito nessuna chiave');
	}
	
	else {
		var alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

		testo.value = testo.value.toUpperCase();

		testoCifrato.value = "";

		while (c < 0) c += 26;

		var len = testo.value.length;

		for (var i = 0; i < len; i++) {
			var ch = testo.value.charAt(i);

			if (ch >= 'A' & ch <= 'Z') {

				var pos = alfabeto.indexOf(ch);

				pos = (pos + c) % 26;

				testoCifrato.value += alfabeto.charAt(pos);
			}
		}

	}
}

function Cancella(testo, testoCifrato, chiave) {
	testo.value = "";
	testoCifrato.value = "";
	chiave.value = "";
	Pulitore();
}

function Pulitore() {
	document.getElementById("chiavee").style.background = 'white';
	document.getElementById("chiavee").style.border = 'solid 1px #767676';
	document.getElementById("displayato").style.display = 'none';
	document.getElementById("testo").style.background = 'white';
	document.getElementById("testo").style.border = 'solid 1px #767676';
	document.getElementById("displayato_testo").style.display = 'none';
}


//alcune parti dello script sono state gentilmente prese in prestito da https://www.codingcreativo.it/cifrario-di-cesare-online