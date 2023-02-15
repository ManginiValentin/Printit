const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine: "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];
//*TABLEAU*//
slides.length;
console.log(slides.length);

//*ARROW *//
const arrow_right = document.querySelector(".arrow_right");
arrow_right.addEventListener("click", function () {
  alert("bonjour 2");
});

const arrow_left = document.querySelector(".arrow_left");
arrow_left.addEventListener("click", function () {
  alert("bonjour");
});

//* DOTS *//
const els = document.querySelector(".dots");

let four = "";
for (let i = 0; i < 4; i++) {
  four += '<div class="dot"></div>';
}

els.innerHTML = four;

//* parcourir les élements du tableau*//
for (let i = 0; i < slides.length; i++) {
  console.log(i);
}
