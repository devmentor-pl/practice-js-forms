const formEl = document.querySelector('form');
const ulEl = document.querySelector('ul');
formEl.addEventListener('submit', validateData);

function validateData(e) {
    const errors = [];
    const firstName = e.target.elements.firstName.value;
    const lastName = e.target.elements.lastName.value;
    const street = e.target.elements.street.value;
    const houseNumber = Number(e.target.elements.houseNumber.value);
    const zip = e.target.elements.zip.value;
    const city = e.target.elements.city.value;
    const voivodeship = e.target.elements.voivodeship.value;
    if (firstName.length < 2) {
        errors.push('Błędnie podano Imię');
    }
    if (lastName.length < 2) {
        errors.push('Błędnie podano Nazwisko');
    }
    if (street.length < 2) {
        errors.push('Błędnie podano Nazwę ulicy');
    }
    if (houseNumber <= 0) {
        errors.push('Błędnie podano Numer budynku');
    }
    if (zip.length !== 6 || zip.match(/[0-9][0-9]-[0-9][0-9][0-9]/) === null) {
        errors.push('Błędnie podano Kod pocztowy');
    }
    if (city.length < 2) {
        errors.push('Błędnie podano Miejscowość');
    }
    if (voivodeship.length < 1) {
        errors.push('Wybierz województwo');
    }

    if (errors.length > 0) {
        e.preventDefault();
        ulEl.innerHTML = '';
        errors.forEach(function (item) {
            const liEl = document.createElement('li');
            liEl.innerText = item;
            ulEl.appendChild(liEl);
        })
    } else {
        alert('Formularz został wysłany');
    }
}