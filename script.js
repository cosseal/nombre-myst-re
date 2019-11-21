function nb_aleatoire(min, max)
{
    var nb = min + ( max - min +1 ) * Math.random();
    return Math.floor(nb);
}

var nb = nb_aleatoire(0,100);

var nombreUtilisateur = document.getElementById("chiffre");
var submit = document.getElementById("submit");
var nombreEssai = 10;
var compteur = document.getElementById("essais");
var saisie = document.getElementById("perdu");
var utilises = document.getElementById("utilises");

var msg1 = "Incorrect, le nombre est trop haut";
var msg2 = "Incorrect, le nombre est trop bas";
var msg3 ="Gagné!";

console.log (nb);

submit.addEventListener("click", function () {
    var spanStyle = document.createElement("span");
    nombreEssai--;

    if (nombreUtilisateur.value > nb) {
        saisie.innerHTML = msg1;

        spanStyle.style.color = "red";

    } else if (nombreUtilisateur.value < nb){
        saisie.innerHTML = msg2;

        spanStyle.style.color = "blue";

    }  else if (nombreUtilisateur.value == nb) {
        saisie.innerHTML = msg3;

        spanStyle.style.color = "green";
    }

    spanStyle.style.marginLeft = "10px";
    spanStyle.innerHTML = nombreUtilisateur.value;
    utilises.appendChild(spanStyle);
    compteur.innerHTML = "Nombre d'essais restant: " + nombreEssai;
});









//var i=0;
//
// for (i; i<20; i++) {
// if (nombreAleatoire<50) {
//     console.log(i+" le capitaine est jeune, il a "+nombreAleatoire+" ans");
// }
// else if (nombreAleatoire>50) {
//     console.log(i+" le capitaine est âgé, il a"+nombreAleatoire+" ans");
// }
// else if (nombreAleatoire===50)
// {console.log(i+" Bon anniversaire")}