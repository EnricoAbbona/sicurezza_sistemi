
var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

/* Gestisce l'input/output con la pagina web e richiama encrypt() */
function encryptWeb() {
  var msg = $('#decrypted-msg').val();  // Recupera il messaggio in chiaro
  var key = parseInt($('#key').val());  // Recupera il valore della chiave
  var result = encrypt(msg, key);  // Codifica il messaggio
  $('#encrypted-msg').val(result);  // Mostra il testo nella pagina HTML
}



    /* Restituisce un messaggio codificato con uno spostamento di key posizioni */
function encrypt(msg, key) {
    var result = "";  // Inizializza il messaggio criptato
    msg = msg.toUpperCase();  // Converte il messaggio in maiuscolo
  
    for (var i = 0; i < msg.length; i++) {  // Scorre i caratteri del messaggio
      var char = msg.charAt(i);  // Carattere i-esimo
  
      if (alphabet.indexOf(char) >= 0) {  // Controlla se è una lettera
        var index = char.charCodeAt(0) + key;  // Indice del carattere  cifrato
  
        if (index > 'Z'.charCodeAt(0)) {  // Se l'indice va oltre 'Z'
          index = index - 26;  // Riparti in modo circolare da 'A'
        }
        result += String.fromCharCode(index);  // + carattere calcolato
      } else {
        result += char;  // Copia i caratteri che non sono lettere
      }
    }
    return result;
  }
