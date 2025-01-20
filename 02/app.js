const form = document.querySelector('form');
const inputLogin = document.querySelector('#formLogin');
const labelForLogin = document.querySelector('label[for="formLogin"]');
const labelForPass1 = document.querySelector('label[for="formPass1"]');
const labelForPass2 = document.querySelector('label[for="formPass2"]');
const inputPass1 = document.querySelector('#formPass1');
const inputPass2 = document.querySelector('#formPass2');
const labelForRegulations = document.querySelector('label[for="formAccept"]');
const checkbox = document.querySelector('#formAccept');

const validation = function(condition, label, errorMessage, element){
    label.style.color = condition ? 'black' : 'red';

    if(!condition){
        errors.push(element);
        errorMessages.push(errorMessage);
    }
    return condition;
}

const errors = [];
const errorMessages = [];

const handleSubmit = function(e){
    e.preventDefault();

    // if (!inputLogin.value.includes('@')){
    //     labelForLogin.style.color = 'red';
    // } else {
    //     labelForLogin.style.color = 'black';
    // }

    // if (inputPass1.value.length < 6){
    //     labelForPass1.style.color = 'red';
    // } else {
    //     labelForPass1.style.color = 'black';
    // }

    // if (inputPass1.value !== inputPass2.value) {
    //     labelForPass2.style.color = 'red';
    // } else {
    //     labelForPass2.style.color = 'black';
    // }

    // if (!checkbox.checked){
    //     labelForRegulations.style.color = 'red';
    // } else {
    //     labelForRegulations.style.color = 'black';
    // }

    const validateEmail = validation(inputLogin.value.includes('@'), labelForLogin, 'Email musi zawierać @!', inputLogin);
    const validatePass1 = validation(inputPass1.value.length >= 6, labelForPass1, 'Hasło musi się składać z minimum 6 znaków!', inputPass1);
    const validatePass2 = validation(inputPass1.value === inputPass2.value, labelForPass2, 'Powtórzone hasło nie jest takie samo!', inputPass2);
    const validateRegulations = validation(checkbox.checked, labelForRegulations, 'Musisz zaakceptować regulamin!', checkbox);

    if (validateEmail && validatePass1 &&  validatePass2 && validateRegulations){
        console.log('done');
    }

    if (errors.length > 0){

        errors.forEach((element) => {
            element.style.border = '1px solid red';
        })
        console.log('Wypelniony formularz zawiera ponizsze bledy: ')
        errorMessages.forEach((msg) => {
            console.log(msg);
        })
    }
}

form.addEventListener('submit', handleSubmit);
