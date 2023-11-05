"use strict";
"iffy";

const regsiterButtons = document.querySelectorAll('.card__cta');
const dialogEl = document.querySelector('.register__form');
const cancelButton = document.querySelector('.form__button__cancel');

const emailEl = document.querySelector('.form__email__input');
const validEmail = document.querySelector('.form__email__valid');
const confirmEmailEl = document.querySelector('.form__confirm__email__input');
const validConfirmEmail = document.querySelector('.form__confirm__email__valid');

const formEl = document.querySelector('.form');


let validPattern = false;
let valid = false;

(function(){
    showDialog();
    closeDialog();
    checkEmail();
    submitForm();
})();

function showDialog(){
    for(const registerButton of regsiterButtons){
        registerButton.addEventListener('click', () =>{
            dialogEl.showModal();
        });
    }
}

function closeDialog(){
    cancelButton.addEventListener('click',() =>{
        dialogEl.close();
    });
}

function checkEmail(){
    emailEl.addEventListener('input', validateEmail);

    // emailEl.addEventListener('input', (e) => {
    //     validEmail.innerText = "This field is required";
    //     const emailInput = e.target.value;
    //     const emailInputLength = emailInput.length;

    //     if(emailInputLength < 1){
    //         validEmail.style.setProperty('display', 'initial');
    //     }else{
    //         validEmail.style.setProperty('display', 'None');
    //     }

    //     var pattern= /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
    //     var check = pattern.test(emailValue);

    //     if (check){
    //         valid = true;
    //         validEmail.style.setProperty('display','None');
    //     }else {
    //         validEmail.innerText = "This field be a valid email address including a @ "
    //         validEmail.style.setProperty('display','initial');
    //         valid = false;
    //     }
    // });
}

function submitForm() {
    formEl.addEventListener('submit', (event) => {
        validateEmail();
        validateConfirmEmail();
    
        if (!validPattern || !valid) {
            event.preventDefault();
        }
    });
}

//     formEl.addEventListener('submit',(event) => {
//         //show validation information about email
//         const emailValue = emailEl.value;
//         const lengthEmail = emailValue.length;
//         validEmail.innerText = "Please input valid Email";
//         //如果email没输入，就显示提示信息，标识位为false
//         if (lengthEmail < 1){
//             validEmail.style.setProperty('display','initial');
//             valid = false;
//         }else {
//             validEmail.style.setProperty('display','None');
//         }

//         var pattern= /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
//         var check = pattern.test(emailValue);
//         if (check){
//             valid = true;
//             validEmail.style.setProperty('display','None');
//         }else {
//             validEmail.innerText = "This field be a valid email address including a @ "
//             validEmail.style.setProperty('display','initial');
//             valid = false;
//         }
        
//         //show validation information about confirm-email 
//         const confirmEmailValue = confirmEmailEl.value;
//         validConfirmEmail.innerText = "Please input the same Email";
//         //如果两个value不相等，就显示提示信息，标识位false
//         if (confirmEmailValue.length < 1 || confirmEmailValue !== emailValue){
//             valid = false;
//             validConfirmEmail.style.setProperty('display','initial');
//         }else {
//             valid = true;
//             validConfirmEmail.style.setProperty('display','None');
//         }
        
//         //只要有一个标识位为false，就不让提交表单
//         if (!valid){
//             event.preventDefault();
//         }
//     });
// }

function validateEmail() {
    const emailValue = emailEl.value;
    validEmail.innerText = "This field is required";

    if (emailValue.length < 1) {
        validEmail.style.display = 'initial';
        validPattern = false;
    } else {
        validEmail.style.display = 'none';
    }

    if (emailValue.includes('@')) {
        validPattern = true;
        validEmail.style.display = 'none';
    } else {
        validEmail.innerText = "This field be a valid email address including a @ ";
        validEmail.style.display = 'initial';
        validPattern = false;
    }
}

function validateConfirmEmail() {
    const emailValue = emailEl.value;
    const confirmEmailValue = confirmEmailEl.value;
    validConfirmEmail.innerText = "This field is required";

    if (confirmEmailValue.length < 1) {
        validConfirmEmail.style.display = 'initial';
        valid = false;
    } else {
        validConfirmEmail.style.display = 'none';
    }

    if ( confirmEmailValue != emailValue ) {
        valid = false;
        validConfirmEmail.innerText = "This field should be same as email";
        validConfirmEmail.style.display = 'initial';
    } else {
        valid = true;
        validConfirmEmail.style.display = 'none';
    }
}




