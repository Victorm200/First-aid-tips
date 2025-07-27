// Toggle dark mode
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

// Toggle tip content visibility
const titles = document.querySelectorAll(".tip-title");

titles.forEach(title => {
  title.addEventListener("click", () => {
    const content = title.nextElementSibling;
    content.classList.toggle("show");
  });
});
