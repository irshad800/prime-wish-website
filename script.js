const slides = document.querySelector('.slides');
let index = 0;

function showNextSlide() {
    index = (index + 1) % 3; // Loop through 3 slides
    slides.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(showNextSlide, 3000); // Change slide every 3 seconds
