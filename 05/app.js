const formEl = document.querySelector('form');
const errorsList = document.querySelector('.messages');
formEl.noValidate = true;

formEl.addEventListener('submit' , checkFormFields);

function checkFormFields(e) {
    e.preventDefault();

    if( errorsList.children.length > 0 ) {
        clearErrors();
    }

    const regFirstName = /^[A-Za-z]{3,}$/;
    const firstName = formEl.elements.firstName;
    if(firstName.value.length < 3 || regFirstName.test(firstName.value) === false ) {
        addError('FirstName must have minimum three characters and must consist of letters');
    }

    const lastName = formEl.elements.lastName;
    if(lastName.value.length === 0) {
        addError('Enter your last name')
    }

    const street = formEl.elements.street;
    if(street.value.length === 0) {
        addError('Enter the street name correctly');
    }

    const houseNumber = formEl.elements.houseNumber;
    if(houseNumber.value.length === 0 || Number(houseNumber.value) <= 0) {
        addError('Enter the houseNumber correctly');
    }

    const zipCode = document.querySelector('[name=zip');
    const regZip = /^[0-9]{2}-[0-9]{3}$/;
    if(regZip.test(zipCode.value) === false) {
        addError('Inncorect zipCode');
    }

    const city = document.querySelector('[name=city');
    if(city.value.length === 0) {
        addError('Enter the name of the city correctly');
    }

    const voivodeship = document.querySelector('[name=voivodeship');
    if(voivodeship.value === "") {
        addError('Please choose the voivodeship');
    }

    if(errorsList.children.length === 0) {
        addError('Good job, the form has been completed correctly');
    }
}

function addError(errorText) {
   const li = document.createElement('li');
   li.innerText = errorText;
   errorsList.appendChild(li);
}

function clearErrors() {
   Array.from(errorsList.children).forEach( function(error) {
       error.remove();
   })
}