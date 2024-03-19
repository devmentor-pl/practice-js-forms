//ZROBIONE
// alert pojawia sie za wcześnie czyli po wypełnieniu kodu

const form = document.querySelector('form');
form.noValidate;

const messages = document.querySelector('.messages');
const zipType = document.querySelector('[name="zip"]');

zipType.addEventListener('focusout', function(e) {
    const userInput = e.target.value;
    // checkPostalCode(userInput);
    // checkIfFilled();
    if(!checkPostalCode() && !checkIfFilled()) { 
        const newLi = document.createElement('li');
        newLi.innerText = userInput;
        messages.appendChild(newLi);
        console.log(messages);
        alert('Formularz NIE został wypełniony poprawnie');
    } else {
        alert('Formularz został wypełniony poprawnie'); //ok
    }
});

const patternValue = zipType.getAttribute('pattern');

function checkPostalCode(value) {
    //sprawdzam czy zip jest zgodny z patternem
    const regex = new RegExp(patternValue);
    const result = regex.test(value); //true
}

// function checkNames() {
//     //sprawdzam, czy nie ma liczb w imieniu i nazwisku
//     const firstNameValue = document.querySelector('[name="firstName"]').value;
//     const lastNameValue = document.querySelector('[name="lastName"]').value;
//     if(isNaN(firstNameValue) && isNaN(lastNameValue)) {
//         return true; //true
//     }
// }

//sprawdzam czy jest wypełnione pole
function checkIfFilled() {
    const firstNameValue = document.querySelector('[name="firstName"]').value;
    const lastNameValue = document.querySelector('[name="lastName"]').value;
    const streetValue = document.querySelector('[name="street"]').value;
    const houseNumberValue = document.querySelector('[name="houseNumber"]').value;
    const cityValue = document.querySelector('[name="city"]').value;
    if(firstNameValue && lastNameValue && streetValue && houseNumberValue && cityValue) {
        return true;
    } else {
        return false;
    }
}