//BŁĄD

const form = document.querySelector('form');
form.noValidate = true;
console.log(form);

const messages = document.querySelector('.messages');
const zipType = document.querySelector('[name="zip"]');

form.addEventListener('submit', function(e) {
    const userInput = e.target.value;
    if(!checkPostalCode() && !checkIsFilled()) { 
        const newLi = document.createElement('li');
        newLi.innerText = userInput;
        messages.appendChild(newLi);
        console.log(messages);
        alert('Formularz NIE został wypełniony poprawnie');
    } else {
        alert('Formularz został wypełniony poprawnie'); //ok
    } 
})

//BŁĄD
function checkPostalCode(value) {
    const patternValue = zipType.getAttribute('pattern');
    //sprawdzam czy zip jest zgodny z patternem
    const regex = new RegExp(patternValue);
    const result = regex.test(value); //true
    console.log(result);
    return result;
}


//sprawdzam czy jest wypełnione pole
function checkIsFilled() {
    const firstNameValue = document.querySelector('[name="firstName"]').value;
    const lastNameValue = document.querySelector('[name="lastName"]').value;
    const streetValue = document.querySelector('[name="street"]').value;
    const houseNumberValue = document.querySelector('[name="houseNumber"]').value;
    const cityValue = document.querySelector('[name="city"]').value;
    const voivodeshipValue = document.querySelector('[name="voivodeship"]').value;
    if(firstNameValue && lastNameValue && streetValue && houseNumberValue && cityValue && voivodeshipValue) {
        return true;
    } else {
        return false;
    }
}
