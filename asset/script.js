
/**
 * image
 * clique
 * change
 */
const btn = document.querySelector('#menu');
const nav = document.querySelector('.navbar');

btn.addEventListener('click', navbarClick);

//Afficher et masquer la navbar au click sur le bouton
function navbarClick() {
    nav.classList.toggle('hide')
};
/**
 * Fonction qui permet de changer l'image des voitures suivant la direction choisie
 */
function carousel(img, direction){
    let compteur;
    for(let i = 0; i < img.length; i++){
        if(!img[i].classList.contains("cacher")){
            compteur = i;
        }
    }
    if(direction == "d"){
        if(compteur == img.length -1){
            compteur = 0;
        }
        else{
            compteur++;
        }
    }
    
    if(direction == "g"){
        if(compteur == 0){
            compteur = img.length - 1;
        }
        else{
            compteur--;
        }
    }

    for(let i = 0; i < img.length; i++){
        img[i].classList.add("cacher");
    }

    img[compteur].classList.remove("cacher");
}

// on défini les fleches et images
let p208g = document.getElementById("p208g");
let p208d = document.getElementById("p208d");
let imgp208 = document.getElementById("p208").getElementsByTagName("img");

// On met un listener sur la fleche de droite
p208d.addEventListener("click", function(){
    carousel(imgp208, "d");
});

// On met un listener sur la fleche de gauche
p208g.addEventListener("click", function(){
    carousel(imgp208, "g");
});

// on défini les fleches et images
let ffg = document.getElementById("ffg");
let ffd = document.getElementById("ffd");
let imgff = document.getElementById("ff").getElementsByTagName("img");

ffd.addEventListener("click", function(){
    carousel(imgff, "d");
});

ffg.addEventListener("click", function(){
    carousel(imgff, "g");
});

// on défini les fleches et images
let audi1g = document.getElementById("audi1g");
let audi1d = document.getElementById("audi1d");
let imgaudi1 = document.getElementById("audi1").getElementsByTagName("img");

// On met un listener sur la fleche de droite
audi1d.addEventListener("click", function(){
    carousel(imgaudi1, "d");
});

// On met un listener sur la fleche de gauche
audi1g.addEventListener("click", function(){
    carousel(imgaudi1, "g");
});

// on défini les fleches et images
let opel1g = document.getElementById("opel1g");
let opel1d = document.getElementById("opel1d");
let imgopel1 = document.getElementById("opel1").getElementsByTagName("img");

// On met un listener sur la fleche de droite
opel1d.addEventListener("click", function(){
    carousel(imgopel1, "d");
});

// On met un listener sur la fleche de gauche
opel1g.addEventListener("click", function(){
    carousel(imgopel1, "g");
});







/*
let slide1 = document.getElementById('slide1');
slide1.addEventListener('click', function () {
    slide1.setAttribute('src', './img/vehicule3.png')
});

let slide2 = document.getElementById('slide2');
slide2.addEventListener('click', function () {
    slide2.setAttribute('src', './img/vehicule1.png')
});

let slide3 = document.getElementById('slide3');
slide3.addEventListener('click', function () {
    slide3.setAttribute('src', './img/vehicule2.png')
});
*/