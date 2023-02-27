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

//*TABLEAU*//
slides.length;
console.log(slides.length);

//* parcourir les élements du tableau*//
for (let i = 0; i < slides.length; i++) {
  console.log(slides[i].image);
}

//*ARROW *//
const bannerImg = document.querySelector(".banner-img");
const tagLine = document.querySelector(".tagLine");
const arrow_right = document.querySelector(".arrow_right");
const arrow_left = document.querySelector(".arrow_left");

let current = 0;

arrow_right.addEventListener("click", function () {
  if (current === slides.length - 1) {
    dot[currentIndex].classList.remove("dot_selected");
    currentIndex = 0;
    dot[currentIndex].classList.add("dot_selected");
  } else {
    dot[currentIndex].classList.remove("dot_selected");
    currentIndex++;
    dot[currentIndex].classList.add("dot_selected");
  }
  current++;

  bannerImg.src = slides[currentIndex].image;
  tagLine.innerHTML = slides[currentIndex].tagLine;
});

arrow_left.addEventListener("click", function () {
  if (current === 0) {
    dot[currentIndex].classList.remove("dot_selected");
    currentIndex = slides.length - 1;
    dot[currentIndex].classList.add("dot_selected");
  } else {
    dot[currentIndex].classList.remove("dot_selected");
    currentIndex--;
    dot[currentIndex].classList.add("dot_selected");
  }
  current--;

  bannerImg.src = slides[currentIndex].image;
  tagLine.innerHTML = slides[currentIndex].tagLine;

  if (current < 0) {
    current = slides.length - 1;
  }
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

let currentIndex = 0;

dot[currentIndex].classList.add("dot_selected");

function setCurrentSlide(index) {
  dot[currentIndex].classList.remove("dot_selected");
  currentIndex = index;
  dot[currentIndex].classList.add("dot_selected");
  current = index;
}

for (let i = 0; i < slides.length; i++) {
  dot[i].addEventListener("click", function () {
    setCurrentSlide(i);
  });
}
