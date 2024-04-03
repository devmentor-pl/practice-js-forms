//BŁĄD  w sprawdzaniu kodu zgodnego z patternem (było ok i przestało działać)
const form = document.querySelector('form');
form.noValidate = true;
console.log(form);

const messages = document.querySelector('.messages');
const zipType = document.querySelector('[name="zip"]');
console.log(zipType);

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const userInput = e.target.value;
    // console.log(e.target.value);
    // console.log(checkPostalCode());
    console.log(checkIsFilled());
    
    if(checkPostalCode() && checkIsFilled()) { 
        alert('Formularz został wypełniony poprawnie'); 
    } else {
        const newLi = document.createElement('li');
        newLi.innerText = userInput;
        messages.appendChild(newLi);
        // console.log(messages);
        alert('Formularz NIE został wypełniony poprawnie');
    } 
})

function checkPostalCode(value) { 
    const patternValue = zipType.getAttribute('pattern');
    //sprawdzam czy zip jest zgodny z patternem
    const regex = new RegExp(patternValue);
    const result = regex.test(value); //true
    console.log(result);
    return result;
}

//sprawdzam czy jest wypełnione pole //OK
function checkIsFilled() {
    const firstNameValue = form.querySelector('[name="firstName"]').value;
    const lastNameValue = form.querySelector('[name="lastName"]').value;
    const streetValue = form.querySelector('[name="street"]').value;
    const houseNumberValue = form.querySelector('[name="houseNumber"]').value;
    const cityValue = form.querySelector('[name="city"]').value;
    const voivodeshipValue = form.querySelector('[name="voivodeship"]').value;
    
    if(firstNameValue && lastNameValue && streetValue && houseNumberValue && cityValue && voivodeshipValue) {
        return true;
    } else {
        return false;
    }
}
