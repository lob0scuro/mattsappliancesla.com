let lastScroll = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll === 0) {
    // Scrolling down
    header.classList.remove("hidden");
  } else if (currentScroll > lastScroll) {
    // Scrolling down
    header.classList.add("hidden");
  } else {
    // Scrolling up
    header.classList.remove("hidden");
  }
  lastScroll = currentScroll;
});
