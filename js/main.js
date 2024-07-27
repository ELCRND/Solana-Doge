const menuBtn = document.querySelector(".header__menu-btn");
const menu = document.querySelector(".header__menu");
// const code = document.querySelector(".token__code");
// const tooltip = document.querySelector(".tooltip");

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

// копирование кода в буфер обмена
// document.querySelector(".token__copy").addEventListener("click", () => {
//   navigator.clipboard.writeText(code.innerText);
//   tooltip.classList.add("visible");
//   setTimeout(() => tooltip.classList.remove("visible"), 600);
// });

const slider = document.querySelector(".slider");
let step = 1;
let offset = 0;
const gap = +window.getComputedStyle(slider).gap.replaceAll(/[a-z]/g, "");

document.querySelector("#prev").addEventListener("click", () => {
  if (offset == 0) return;

  offset -= slider.firstElementChild.offsetWidth + gap;

  slider.classList.remove("move");
  slider.style.translate = `-${offset}px 0`;
  setTimeout(() => slider.classList.add("move"));

  step -= 1;
});

document.querySelector("#next").addEventListener("click", () => {
  if (step >= slider.childElementCount) return;

  offset += slider.firstElementChild.offsetWidth + gap;
  console.log(slider.firstElementChild.offsetWidth);

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
  slider.classList.remove("move");
  slider.style.translate = `-${(slider.offsetWidth + gap) * (step - 1)}px 0`;
  console.log(gap);
  slider.classList.add("move");
});
