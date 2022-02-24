const formEl = document.querySelector('form');
const input = document.querySelector('input');
formEl.noValidate = true;
var regExEmailInput = /^([a-z0-9]){1}([\w-])*([a-z0-9]){1}([@]){1}([a-z0-9]){1}([\w\-\.])*(\.)([a-z0-9]){1}([a-z0-9]){1}$/i;

formEl.addEventListener('submit', validatation);

function validatation (e) {
    e.preventDefault();
    const emailValue = formEl.login.value;
    const emailCheck = regExEmailInput.test(emailValue);
    const password1Value = formEl.pass1.value;
    const password2Value = formEl.pass2.value;
    const checkboxValue = formEl.accept.checked;
    const errors = [];

    if(!emailCheck) {
        errors.push(formEl.login);
    }

    if(password1Value.length < 6 || password2Value.length < 6 ) {
        errors.push(formEl.pass1, formEl.pass2);
    }

    if(password1Value !== password2Value) {
        errors.push(formEl.pass1, formEl.pass2);
    }

    if(!checkboxValue) {
        errors.push(formEl.accept);
    }
    
    if(errors.length === 0) {
        console.log('DONE');
        
    } else {
        errors.forEach(function(el) {
            el.previousElementSibling.style.color = 'red';
        });
    }
    
    for(const el of formEl.elements) {
        if(!errors.includes(el) && el.previousElementSibling){
            el.previousElementSibling.style.color = 'black';
        }
    };
}