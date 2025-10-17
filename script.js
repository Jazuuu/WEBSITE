
var games = [
  { src: "img/Silksong.png", alt: "Silksong" },
  { src: "img/apex.png", alt: "Apex Legends" },
  { src: "img/Expedition.png", alt: "Expedition" }
];


var currentIndex = 1;

var leftImage = document.querySelector("#left-game img");
var mainImage = document.querySelector("#main-game");
var rightImage = document.querySelector("#right-game img");
var prevButton = document.querySelector(".carousel-btn.prev");
var nextButton = document.querySelector(".carousel-btn.next");

 function updateCarousel() {
  var total = games.length;

  var leftIndex = currentIndex - 1;
  if (leftIndex < 0) leftIndex = total - 1;

  var rightIndex = currentIndex + 1;
  if (rightIndex >= total) rightIndex = 0;

 
  leftImage.classList.add("fade-out");
  mainImage.classList.add("fade-out");
  rightImage.classList.add("fade-out");

  
  setTimeout(function () {
    leftImage.src = games[leftIndex].src;
    leftImage.alt = games[leftIndex].alt;

    mainImage.src = games[currentIndex].src;
    mainImage.alt = games[currentIndex].alt;

    rightImage.src = games[rightIndex].src;
    rightImage.alt = games[rightIndex].alt;

  
    leftImage.classList.remove("fade-out");
    leftImage.classList.add("fade-in");

    mainImage.classList.remove("fade-out");
    mainImage.classList.add("fade-in");

    rightImage.classList.remove("fade-out");
    rightImage.classList.add("fade-in");

   
    setTimeout(() => {
      leftImage.classList.remove("fade-in");
      mainImage.classList.remove("fade-in");
      rightImage.classList.remove("fade-in");
    }, 500); 
  }, 300); 
 }


function nextGame() {
  currentIndex = currentIndex + 1;
  if (currentIndex >= games.length) {
    currentIndex = 0;
  }
  updateCarousel();
}


function prevGame() {
  currentIndex = currentIndex - 1;
  if (currentIndex < 0) {
    currentIndex = games.length - 1;
  }
  updateCarousel();
}


document.addEventListener("DOMContentLoaded", function () {
  updateCarousel(); 

 
  nextButton.addEventListener("click", nextGame);
  prevButton.addEventListener("click", prevGame);

  
  setInterval(nextGame, 4000);
});

