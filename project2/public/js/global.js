"use strict";
"iffy"

const menuButton = document.querySelector('.nav__button');
const dropdownMenu = document.querySelector('.nav__dropdown');

(function(){
    showDropdown();
})();

// click menu
function showDropdown(){
    menuButton.addEventListener('click',() =>{  
        dropdownMenu.classList.toggle('close');
    });
}