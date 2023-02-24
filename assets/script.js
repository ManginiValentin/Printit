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

//* parcourir les élements du tableau*//
for (let i = 0; i < slides.length; i++) {
  console.log(slides[i].image);
}

//*ARROW *//
const bannerImg = document.querySelector(".banner-img");
const arrow_right = document.querySelector(".arrow_right");
const arrow_left = document.querySelector(".arrow_left");

arrow_right.addEventListener("click", function () {
  alert("clique");
});

arrow_left.addEventListener("click", function () {
  alert("bonjour");
});

//* DOTS *//
const dots = document.querySelector(".dots");

for (let i = 0; i < slides.length; i++) {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  dots.appendChild(dot);
}

const dot = document.querySelectorAll(".dot");
const dot_selected = document.querySelector(".dot_selected");

dot[currentIndex].classList.add(".dot_selected");

let currentIndex = 0;

function setCurrentSlide(index) {
  dot[currentIndex].classList.remove(".dot_selected");
  currentIndex = index;
  dot[currentIndex].classList.add(".dot_selected");
}

for (let i = 0; i < slides.length; i++) {
  dot[i].addEventListener("click", function () {
    setCurrentSlide(i);
  });
}
