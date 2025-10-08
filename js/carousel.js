async function loadCarousel() {
  try {
    const res = await fetch("data/carousel.json");
    const images = await res.json();
    const container = document.getElementById("carousel-inner");

    // Create image elements
    images.forEach((imgSrc, index) => {
      const el = document.createElement("img");
      el.src = imgSrc.src;
      el.alt = imgSrc.alt || `Carousel Image ${index + 1}`;
      if (index === 0) el.classList.add("active"); // Show first image initially
      container.appendChild(el);
    });

    const slides = container.querySelectorAll("img");
    let currentIndex = 0;

    function showNextImage() {
      slides[currentIndex].classList.remove("active");
      currentIndex = (currentIndex + 1) % slides.length;
      slides[currentIndex].classList.add("active");
    }

    setInterval(showNextImage, 3000); // Change image every 3 seconds
  } catch (error) {
    console.error("Error loading carousel images:", error);
  }
}

document.addEventListener("DOMContentLoaded", loadCarousel);
