//Événement touche 'Entrée'
document.addEventListener('keyup', toucheEntree);

//Fonction devine() quand on appui sur 'Entrée'
function toucheEntree(e) {
    var key = e.keyCode;
    if (key === 13) {
        devine();
    }
}

//Fonction devine()
var num = Math.floor(Math.random() * 100) + 1;
var NbEssais = 0;
document.getElementById('nomJoueur').value = localStorage.pseudo;

function devine() {
var choisi = document.form1.nb.value;
NbEssais++;
localStorage.setItem("NbEssais", NbEssais); //Stock le nombre de coups

if (choisi < num){ //Nombre entré < Nombre mystère
    document.getElementById('indice').value = "C'est plus";
    document.getElementById('coup').value = NbEssais;
}

if (choisi > num){ //Nombre entré > Nombre mystère
    document.getElementById('indice').value = "C'est moins";
    document.getElementById('coup').value = NbEssais;
}

if (choisi == num) {//Nombre entré = Nombre mystère
    redirection_end();
    }
if (NbEssais == 10) { //Coups d'essai épuisés
    window.alert("Trop de tentatives! Le nombre correct était : " + num);
    location.reload();
    }
}

//Fonction redirection vers page de fin
function redirection_end(){
    document.location.href="bravo.html";
    sessionStorage.clear(); //Vide les données stockées
  }