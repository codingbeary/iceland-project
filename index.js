const scrollButton = document.getElementById("scrollDown");
const aboutSection = document.getElementById("about");
const navLinks = document.querySelectorAll("");

scrollButton.addEventListener("click", () => {
  aboutSection.scrollIntoView({ behavior: "smooth" });
});
