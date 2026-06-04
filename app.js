const hearts = document.querySelectorAll(".heart");
const cat = document.querySelector(".cat");
const line = document.querySelector(".final-line");

let index = 0;

const interval = setInterval(() => {
  if (index < hearts.length) {
    hearts[index].style.opacity = 0;
    index++;
  } else {
    clearInterval(interval);
    cat.classList.remove("hidden");
    setTimeout(() => (line.style.opacity = 1), 600);
  }
}, 600);
