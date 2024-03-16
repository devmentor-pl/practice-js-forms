//ZROBIONE
//UWAGI: wydaje mi się, e jednak potrzebna będzie walidacja wszystkich inputów (required)
// i nie będzie potrzebne sprawdzanie imienia i nazwiska
// czyli zostawiamy tylko sprawdzenie kodu pocztowego - czy zgodny z patternem

const street = document.querySelector('[name="street"]');
const houseNumber = document.querySelector('[name="houseNumber"]');
const flatNumber = document.querySelector('[name="flatNumber"]');
const city = document.querySelector('[name="city"]');
const voivodeship = document.querySelector('[name="voivodeship"]');

street.noValidate;
houseNumber.noValidate;
flatNumber.noValidate;
city.noValidate;
voivodeship.noValidate;

const messages = document.querySelector('.messages');
const zipType = document.querySelector('[name="zip"]');

zipType.addEventListener('focusout', function(e) {
    const userInput = e.target.value;
    checkPostalCode(userInput);
    if(!checkPostalCode() && !checkNames()) { 
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

function checkNames() {
    //sprawdzam, czy nie ma liczb w imieniu i nazwisku
    const firstNameValue = document.querySelector('[name="firstName"]').value;
    const lastNameValue = document.querySelector('[name="lastName"]').value;
    if(isNaN(firstNameValue) && isNaN(lastNameValue)) {
        return true; //true
    }
}