"use strict";
"iffy";
const buttonEls = document.querySelectorAll(".nav__button");
const submenus = document.querySelectorAll(".nav__submenu");
for (let i = 0; i < buttonEls.length; i++){
    buttonEls[i].addEventListener("click",function show() {
        submenus[i].classList.toggle("nav__submenu__onclick");
    });
}
