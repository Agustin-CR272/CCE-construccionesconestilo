// Carrusel
let index = 0;
const images = document.querySelectorAll(".carousel img");

function showImage(i) {
  images.forEach(img => img.classList.remove("active"));
  images[i].classList.add("active");
}

function next() {
  index = (index + 1) % images.length;
  showImage(index);
}

function prev() {
  index = (index - 1 + images.length) % images.length;
  showImage(index);
}

setInterval(next, 3000);

// Menú hamburguesa
function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("show");
}
