document.addEventListener("DOMContentLoaded", () => {
  const bubbleNav = document.getElementById("bubble-nav");
  const bubbleButton = document.getElementById("menu-bubble");

  if (!bubbleNav || !bubbleButton) {
    return;
  }

  //Toggle Menu
  bubbleButton.addEventListener("click", (e) => {
    e.stopPropagation();
    const isHidden = bubbleNav.classList.toggle("hidden");
    bubbleButton.classList.toggle("active", !isHidden);
  });

  //close if clicking outside
  document.addEventListener("click", (e) => {
    if (bubbleNav.classList.contains("hidden")) {
      if (!bubbleNav.contains(e.target) && !bubbleButton.contains(e.target)) {
        bubbleNav.classList.add("hidden");
        bubbleButton.classList.remove("active");
      }
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      bubbleNav.classList.add("hidden");
      bubbleButton.classList.remove("active");
    }
  });
});
