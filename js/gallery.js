async function loadGallery() {
  try {
    const res = await fetch("data/gallery.json");
    const images = await res.json();
    const container = document.getElementById("image-gallery");
    if (!container) {
      console.error("Gallery container not found");
      return;
    }
    // Create image elements
    images.forEach((imgSrc, index) => {
      const el = document.createElement("img");
      el.src = imgSrc.src;
      el.alt = imgSrc.alt || `Gallery Image ${index + 1}`;
      container.appendChild(el);
    });
  } catch (error) {
    console.error("Error loading gallery images:", error);
  }
}
document.addEventListener("DOMContentLoaded", loadGallery);
