// scripts.js

let currentSlide = 0;

function changeSlide(direction) {
  const slides = document.querySelectorAll(".slide");
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + direction + slides.length) % slides.length;
  slides[currentSlide].classList.add("active");
}

function searchProducts() {
  const query = document.getElementById("search-input").value;
  if (query) {
    alert(`Searching for: ${query}`);
    // Here you would typically perform a search or filter operation.
  } else {
    alert("Please enter a search term.");
  }
}

// Initialize the first slide as active
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  if (slides.length > 0) {
    slides[0].classList.add("active");
  }
});
