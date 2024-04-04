const form = document.querySelector('form');
form.noValidate = true;
// console.log(form);

const messages = document.querySelector('.messages');
const zipType = document.querySelector('[name="zip"]');
// console.log(zipType);

form.addEventListener('submit', function(e) {
    e.preventDefault();
    // const userInput = e.target.value;  
    // do modyfikacji - warunki + message na dole
    const userPostalCode = e.target.elements.zip.value;
    console.log(checkPostalCode(userPostalCode));
    console.log(checkIsFilled());
    
    if(checkPostalCode(e.target.elements.zip.value) && checkIsFilled()) { 
        alert('Formularz został wypełniony poprawnie'); 
    } else {
        // const newLi = document.createElement('li');
        // newLi.innerText = userInput;
        // messages.appendChild(newLi);
        // // console.log(messages);
        alert('Formularz NIE został wypełniony poprawnie');
    } 
})

function checkPostalCode(value) { 
    console.log(value);
    const patternValue = zipType.getAttribute('pattern');
    //sprawdzam czy zip jest zgodny z patternem
    const regex = new RegExp(patternValue);
    console.log(patternValue);
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
    
    // if(firstNameValue && lastNameValue && streetValue && houseNumberValue && cityValue && voivodeshipValue) {
    //     return true;
    // } else {
    //     return false;
    // }
    const arr = [];
    if(firstNameValue.length === 0) {
        arr.push('Wypełnij pole imię');
    } 
    if (lastNameValue.length === 0) {
        arr.push('Wypełnij pole nazwisko');
    } 
    if (streetValue.length === 0) {
        arr.push('Wypełnij pole ulica');
    } 
    if (houseNumberValue.length === 0) {
        arr.push('Wypełnij pole numer domu');
    } 
    if (cityValue.length === 0) {
        arr.push('Wypełnij pole miasto');
    } 
    if (voivodeshipValue.length === 0) {
        arr.push('Wypełnij pole województwo');
    } 
    
    arr.forEach(function(value) {
        const newLi = document.createElement('li');
        newLi.innerText = value;
        console.log(messages);
        messages.appendChild(newLi);
    }) 


    if (arr.length === 0) {
        return true;
    } else {
        return false;
    }

}
