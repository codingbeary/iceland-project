const scrollButton = document.getElementById("scrollDown");
const aboutSection = document.getElementById("about");

scrollButton.addEventListener("click", () => {
  aboutSection.scrollIntoView({ behavior: "smooth" });
});
