const form = document.querySelector('form');
const firstName = document.querySelector('input[name="firstName"]');
const lastName = document.querySelector('input[name="lastName"]');
const street = document.querySelector('input[name="street"]');
const houseNumber = document.querySelector('input[name="houseNumber"]');
const flatNumber = document.querySelector('input[name="flatNumber"]');
const zip = document.querySelector('input[name="zip"]');
const city = document.querySelector('input[name="city"]');
const voivodeship = document.querySelector('select[name="voivodeship"]');
const submit = document.querySelector('input[type="submit"]');
const ulErrors = document.querySelector('.messages');

const errorMessages = [];
const namePattern = /^[a-ż]+$/i;
const housePattern = /^[0-9]+[a-ż]*$/i;

function validation(condition, errorMsg){

    if(!condition){
        errorMessages.push(errorMsg);
    }
}

function handleSubmit(e){
    
    e.preventDefault();
    ulErrors.innerHTML = '';
    errorMessages.length = 0;

    validation(firstName.value.length >= 2, 'Given name is too short!');
    validation(namePattern.test(firstName.value), `Given name can't contain digits!`);

    validation(lastName.value.length >= 2, 'Given surname is too short!');
    validation(namePattern.test(lastName.value), `Given name can't contain digits!`);

    validation(street.value.length >= 2, 'Given street name is too short!');

    validation(housePattern.test(houseNumber.value), 'House number has to contain number!');

    validation((flatNumber.value.length === 0 || flatNumber.value >= 1), `Flat number can't be lower than 1`);

    const zipPattern = new RegExp(`^${zip.getAttribute('pattern')}$`);
    validation(zipPattern.test(zip.value), 'Given ZIP code format is invalid!')

    validation(city.value.length >= 2, 'Given city name is too short!');

    validation(voivodeship.value !== '', 'You must select a voivodeship!');

    if (errorMessages.length > 0){

        errorMessages.forEach((msg) => {
            const newLi = document.createElement('li');
            newLi.textContent = msg;
            ulErrors.appendChild(newLi);
        })
    } else {
        alert('Data was filled correct. The form has been sent!');
    }

}

form.addEventListener('submit', handleSubmit);
