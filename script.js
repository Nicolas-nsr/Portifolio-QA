const menuButton = document.querySelector(".nav-toggle");
const menu = document.querySelector("#nav-menu");
const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();
menuButton?.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!open));
  menu?.classList.toggle("open", !open);
});
menu?.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    menu.classList.remove("open");
    menuButton?.setAttribute("aria-expanded", "false");
  }),
);
