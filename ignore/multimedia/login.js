function login(password) {
    
   var pass;
     if (password.value=="ElPrimo") {
    alert("El Primo è infinitamente felice di quello che fai");
    document.getElementById("displayatoo").style.display = 'none'; 
    }

    else {
        alert("HAI SBAGLIATO PASSWORD!!!!!");
    } 
}


function suggerimento(){
    setTimeout(() => {    document.getElementById("suggerimento").innerHTML= 'La password è: "ElPrimo". Le virgolette non vanno scritte.';},30000);

}