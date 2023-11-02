"use strict";
"iffy";

const regsiterButtons = document.querySelector('.card__cta');
const dialogEl = document.querySelector('.register__form');
const cancelButton = document.querySelector('.form__button__cancel');

const emailEl = document.querySelector('.form__email__input');
const validEmail = document.querySelector('.form__email__valid');
const confirmEmailEl = document.querySelector('.form__confirm__email__input');
const validConfirmEmail = document.querySelector('.form__confirm__email__valid');

const formEl = document.querySelector('.form');


let valid = false;

(function(){
    showDialog();
    checkEmail();
    closeDialog();
    submitForm();
})();

function showDialog(){
    for(const btn of regsiterButtons){
        btn.addEventListener('click', () =>{
            dialogEl.showDialog();
        });
    }
}

function closeDialog(){
    cancelButton.addEventListener('click',() =>{
        dialogEl.close();
    });
}



