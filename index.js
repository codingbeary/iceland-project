const scrollButton = document.getElementById("scrollDown");
const aboutSection = document.getElementById("about");
const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

scrollButton.addEventListener("click", () => {
  aboutSection.scrollIntoView({ behavior: "smooth" });
});

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    navLinks.forEach((link) => {
      link.classList.remove("active");
    });
    e.target.classList.add("active");
  });
});
