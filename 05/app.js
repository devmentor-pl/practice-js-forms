

const formEl = document.querySelector('form'); 
const errorsList = document.querySelector('.messages');

formEl.addEventListener('submit', validateForm);

function validateForm(e) {

    e.preventDefault();
    errorsList.innerHTML = '';

    const firstName = formEl.elements['firstName'].value;
    const lastName = formEl.elements['lastName'].value;
    const street = formEl.elements['street'].value;
    const houseNumber = formEl.elements['houseNumber'].value;
    const flatNumber = formEl.elements['flatNumber'].value;
    const zip = formEl.elements['zip'].value;
    const city = formEl.elements['city'].value;
    const voivodeship = formEl.elements['voivodeship'].value;

    let isValid = true;
    const errors = [];

    if (!firstName) {
        errors.push('Brak Imienia');
    }

    if (!lastName) {
        errors.push('Brak Nazwiska');
    }

    if (!street) {
        errors.push('Brak Ulicy');
    }

    if (!houseNumber || isNaN(houseNumber) || houseNumber <= 0) {
        errors.push('Brak Numeru budynku lub niewłaściwy format');
    }

    if (flatNumber && (isNaN(flatNumber) || flatNumber <= 0)) {
        errors.push('Niewłaściwy format');
    }

    if (!zip.match(/^\d{2}-\d{3}$/)) {
        errors.push('Niewłaściwy format kodu pocztowego');
    }

    if (!voivodeship) {
        errors.push('Brak Województwa');
    }

    if (errors.length > 0) {
        isValid = false;
        errors.forEach(error => {
            const li = document.createElement('li');
            li.textContent = error;
            errorsList.appendChild(li);
        });
    }

    if (isValid) {
        errorsList.innerText = 'Dane zostały wysłane prawidłowo!';
        formEl.reset();
    }

}