
// Toggle tip visibility when title is clicked
const titles = document.querySelectorAll(".tip-title");

titles.forEach(title => {
  title.addEventListener("click", () => {
    const content = title.nextElementSibling;
    const isVisible = content.style.display === "block";
    content.style.display = isVisible ? "none" : "block";
  });
});
