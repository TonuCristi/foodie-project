const burgerBtn = document.querySelector(".burger-btn");
const nav = document.querySelector(".nav");
const headerEl = document.querySelector(".header");

burgerBtn.addEventListener("click", () => {
  const visibility = nav.getAttribute("data-visible");
  nav.style.transition = "all 0.5s";

  if (visibility === "false") {
    nav.setAttribute("data-visible", true);
    burgerBtn.classList.add("open");
  } else {
    nav.setAttribute("data-visible", false);
    burgerBtn.classList.remove("open");
  }
});
