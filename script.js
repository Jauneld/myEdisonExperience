// Scroll down to cards section
function scrollToCards() {
  document.getElementById("cards-section").scrollIntoView({ behavior: "smooth" });
}

// Scroll up to top
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Show back-to-top button on scroll
window.onscroll = function() {
  const backToTopButton = document.querySelector(".back-to-top");
  if (window.scrollY > 300) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
};
