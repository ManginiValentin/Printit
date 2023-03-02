const pathImg = "./assets/images/slideshow/";

const slides = [
  {
    image: `${pathImg}slide1.jpg`,
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: `${pathImg}slide2.jpg`,
    tagLine: "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: `${pathImg}slide3.jpg`,
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: `${pathImg}slide4.png`,
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

//* DOTS *//
const dots = document.querySelector(".dots");

for (let i = 0; i < slides.length; i++) {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  dots.appendChild(dot);
}

const dot = document.querySelectorAll(".dot");
const dot_selected = document.querySelector(".dot_selected");

let currentIndex = 0;

dot[currentIndex].classList.add("dot_selected");

//*ARROW *//
const bannerImg = document.querySelector(".banner-img");
const tagLine = document.querySelector(".tagLine");
const arrow_right = document.querySelector(".arrow_right");
const arrow_left = document.querySelector(".arrow_left");

let nextIndex = 1;

arrow_right.addEventListener("click", function () {
  if (currentIndex === slides.length - 1) {
    nextIndex = 0;
  } else {
    nextIndex = currentIndex + 1;
  }

  bannerImg.src = slides[nextIndex].image;
  tagLine.innerHTML = slides[nextIndex].tagLine;
  dot[currentIndex].classList.remove("dot_selected");
  dot[nextIndex].classList.add("dot_selected");
  currentIndex = nextIndex;
});

arrow_left.addEventListener("click", function () {
  previousIndex = currentIndex - 1;
  if (previousIndex < 0) {
    previousIndex = slides.length - 1;
  }

  bannerImg.src = slides[previousIndex].image;
  tagLine.innerHTML = slides[previousIndex].tagLine;
  dot[currentIndex].classList.remove("dot_selected");
  dot[previousIndex].classList.add("dot_selected");
  currentIndex = previousIndex;
});
