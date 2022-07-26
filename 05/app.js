const formEL = document.querySelector('form');
const messagesUlEl = document.querySelector('.messages');

formEL.addEventListener('submit', validateData);

function validateData(e) {

    e.preventDefault();
    const errors = [];

    const firstName = e.target.elements.firstName;
    const lastName = e.target.elements.lastName;
    const streetName = e.target.elements.street;
    const houseNumber = e.target.elements.houseNumber;
    const flatNumber = e.target.elements.flatNumber;
    const zip = e.target.elements.zip;
    const city = e.target.elements.city;
    const voivodeship = e.target.elements.voivodeship;

    if (firstName.value.length === 0) {
        errors.push('Field Imię is required')
    }

    if (lastName.value.length === 0) {
        errors.push('Field Nazwisko is required')
    }

    if (houseNumber.value.length === 0 || Number(houseNumber.value) === NaN) {
        errors.push('House has to have a numeric value')
    }

    if (Number(flatNumber.value) === NaN) {
        errors.push('Flat has to have a numeric value')
    }

    const zipPattern = /[0-9]{2}-[0-9]{3}/
    if (zip.value.length === 0 || zipPattern.test(zip.value) === false) {
        errors.push('Zip code is required')
    }

    if (streetName.value.length === 0) {
        errors.push('Field Ulica is required')
    }

    if (city.value.length === 0) {
        errors.push('Field Miasto is required')
    }

    if (voivodeship.value.length === 0) {
        errors.push('Selection of voivodesip is required')
    }

    messagesUlEl.innerText = '';

    if (errors.length === 0) {
        alert('Form sent correctly!')
    } else {
        errors.forEach(function (error) {
            const newLi = document.createElement('li');
            newLi.innerText = error;
            messagesUlEl.appendChild(newLi);
        })
    }
}

