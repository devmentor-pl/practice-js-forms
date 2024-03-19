//BŁĄD

const form = document.querySelector('form').noValidate;

const messages = document.querySelector('.messages');
const zipType = document.querySelector('[name="zip"]');

//BŁĄD // form.addEvent... is not a function
form.addEventListener('submit', function(e) {
    const userInput = e.target.value;
    if(!checkPostalCode() && !checkIsFilled()) { 
        console.log('ok');
        const newLi = document.createElement('li');
        newLi.innerText = userInput;
        messages.appendChild(newLi);
        console.log(messages);
        alert('Formularz NIE został wypełniony poprawnie');
    } else {
        alert('Formularz został wypełniony poprawnie'); //ok
    } 
})

const patternValue = zipType.getAttribute('pattern');

function checkPostalCode(value) {
    //sprawdzam czy zip jest zgodny z patternem
    const regex = new RegExp(patternValue);
    const result = regex.test(value); //true
}


//sprawdzam czy jest wypełnione pole
function checkIsFilled() {
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
