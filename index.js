// Selectionner les elements
let boutton = document.querySelector("button");
let p = document.querySelector("p");
let hidden = true;

// Cacher le paragraphe
p.style.display = "none";

// Fonction executer après le click dtecter
function afficher() {
  if(hidden == true) {
    p.style.display = "block";
    boutton.textContent = "Cacher";
    hidden = false;
  } else {
    p.style.display = "none";
    boutton.textContent = "Afficher";
    hidden = true;
  }
};

// Detecter le click
boutton.addEventListener('click', afficher);