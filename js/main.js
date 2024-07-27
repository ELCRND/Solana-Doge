const menuBtn = document.querySelector(".header__menu-btn");
const menu = document.querySelector(".header__menu");
const slider = document.querySelector(".slider");

// открыть/закрыть меню
menuBtn.addEventListener("click", () => {
  menu.classList.toggle("visible");
  menuBtn.classList.toggle("close");
  document.body.classList.toggle("scroll-off");
});

// закрытие меню при нажатии на ссылку
document.querySelectorAll(".menu__link").forEach((link) =>
  link.addEventListener("click", () => {
    menu.classList.remove("visible");
    menuBtn.classList.remove("close");
    document.body.classList.remove("scroll-off");
  })
);

let step = 1;
let offset = 0;
const gap = +window.getComputedStyle(slider).gap.replaceAll(/[a-z]/g, "");

document.querySelector("#prev").addEventListener("click", () => {
  if (offset == 0) return;

  offset -= slider.offsetWidth + gap;

  slider.classList.remove("move");
  slider.style.translate = `-${offset}px 0`;
  setTimeout(() => slider.classList.add("move"));

  step -= 1;
});

document.querySelector("#next").addEventListener("click", () => {
  if (step >= slider.childElementCount) return;

  offset += slider.offsetWidth + gap;

  slider.classList.remove("move");
  slider.style.translate = `-${offset}px 0`;
  setTimeout(() => slider.classList.add("move"));

  step += 1;
});

window.addEventListener("resize", () => {
  if (window.matchMedia("(min-width:1440px)").matches) {
    slider.style.translate = `0 0`;
    offset = 0;
    step = 1;
    return;
  }

  if (offset == 0) return;

  offset = (slider.offsetWidth + gap) * (step - 1);
  slider.classList.remove("move");
  slider.style.translate = `-${offset}px 0`;
  slider.classList.add("move");
});
