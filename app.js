const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion) => {
  accordion.addEventListener("click", () => {
    if (accordion.classList.contains("active")) {
      accordion.classList.remove("active");
    } else {
      accordions.forEach((item) => item.classList.remove("active"));
      accordion.classList.add("active");
    }
  });
});
