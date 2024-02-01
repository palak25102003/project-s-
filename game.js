let screens = document.querySelectorAll(".screen");
let btn = document.querySelector("button");
let monster = document.querySelectorAll(".monster");


btn.addEventListener("click", () => {
     screens[1].style.transform = "translateY(-100%)";
});
monster.forEach((elem) => {
     elem.addEventListener("click", () => {
          screens[2].style.transform = "translateY(-200%)";
     });
});