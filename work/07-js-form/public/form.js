"use strict"

let valid = false;
let isName = false;

const dropDowns = document.querySelector('.nav__dropdown');
const nameEl = document.querySelector('.name__input');
const nameValid = document.querySelector('.name__valid');
const emailEl = document.querySelector('.email__input');
const emailValid = document.querySelector('.email__valid');
const confirmEmailEl = document.querySelector('.confirm__email__input');
const confirmEmailValid = document.querySelector('.confirm__email__valid');
const formEl = document.querySelector('.form');


(function(){
    navListener();
    submitForm();
    checkName();
})();

function checkName(){
    nameEl.addEventListener('input', (event) => {
        const nameValue = event.target.value;
        const nameLength = nameValue.length;
        
        nameValid.innerText = "Please enter valid name";
        if(nameLength > 2  && nameLength <= 30){
            nameValid.style.setProperty('display','None');
            isName = true;
        }else{
            nameValid.style.setProperty('display', 'initial');
            isName = false;
        }
    });

    nameEl.addEventListener('keydown', (event) => {
        if(event.key == "-"){
            event.preventDefault();
        }
    });
}

function submitForm(){
    formEl.addEventListener('submit', (event) =>{
        const emailInput = emailEl.value;
        const emailLength = emailInput.length;

        emailValid.innerText = "Please enter valid email";
        if (window.innerWidth > 640) {
            emailValid.style.setProperty('grid-column', 'span initial');
            if(emailLength > 1 && emailLength <= 40){
                emailValid.style.setProperty('display', 'None');
                valid = true;
            }else{
                emailValid.style.setProperty('display', 'initial');
                valid = true;
            }
        }else{
            emailValid.style.setProperty('grid-column', 'span 12');
            if(emailLength > 1 && emailLength <= 40){
                emailValid.style.setProperty('display', 'None');
                valid = true;
            }else{
                emailValid.style.setProperty('display', 'initial');
                valid = true;
            }
        }

        const confirmEmailInput = confirmEmailEl.value;
        const confirmEmailLength = confirmEmailInput.length;
        confirmEmailValid.innerText = "Email and Confirm Email are not same";

        if (window.innerWidth > 640) {
            confirmEmailValid.style.setProperty('grid-column','span initial');
            if (confirmEmailLength >= 1 && confirmEmailLength <= 30){
                confirmEmailValid.style.setProperty('display','None');
                valid = true;
            } 
            if (confirmEmailLength < 1 || confirmEmailLength > 30 || confirmEmailEl.value !== emailEl.value){
                confirmEmailValid.style.setProperty('display','initial');
                valid = false;
            }
        }else {
            confirmEmailValid.style.setProperty('grid-column','span 12');
            if (confirmEmailLength >= 1 && confirmEmailLength <= 30){
                confirmEmailValid.style.setProperty('display','None');
                valid = true;
            }
            if (confirmEmailLength < 1 || confirmEmailLength > 30 || confirmEmailEl.value !== emailEl.value){
                confirmEmailValid.style.setProperty('display','initial');
                valid = false;
            }
        }
        
        
        if (!isName || !valid){
            event.preventDefault();
        }

    });
}

function navListener(){
    const buttonEls = document.querySelectorAll(".nav__button");
    const submenus = document.querySelectorAll(".nav__submenu");
    for (let i = 0; i < buttonEls.length; i++){
        buttonEls[i].addEventListener("click",function show() {
            submenus[i].classList.toggle("nav__submenu__onclick");
        });
    }
}