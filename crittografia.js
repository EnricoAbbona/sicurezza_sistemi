function Cifrato(testo, testoCifrato, chiave, decifra){
  var c
  if (decifra) {
    c=parseInt(-chiave.value);

  }
  else {
    c=parseInt(chiave.value);

  }
  var alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  testo.value = testo.value.toUpperCase();

  testoCifrato.value = "";

  while (c<0) c += 26;

  var len = testo.value.length;

  for (var i = 0; i < len; i++){
var ch = testo.value.charAt(i);

if (ch >= 'A' & ch <= 'Z') {
          
    var pos = alfabeto.indexOf(ch);

    pos = (pos + c) % 26;
          
    testoCifrato.value += alfabeto.charAt(pos);
}
  }
}

function Cancella(testo, testoCifrato, chiave){
testo.value = "";
testoCifrato.value = "";
chiave.value = 3;
}


//alcune parti dello script sono state gentilmente prese in prestito da https://www.codingcreativo.it/cifrario-di-cesare-online  