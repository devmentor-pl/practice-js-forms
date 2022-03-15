const ulEl = document.querySelector('ul');
const formAdress = document.querySelector('form');

formAdress.addEventListener('submit', checkData);

function checkData(e) {
    const firstName = e.target.elements.firstName.value;
    const lastName = e.target.elements.lastName.value;
    const street = e.target.elements.street.value;
    const houseNumber = e.target.elements.houseNumber.value;
    const flatNumber = e.target.elements.flatNumber.value;
    const zip = e.target.elements.zip.value;
    const city = e.target.elements.city.value;
    const voivodeship = e.target.elements.voivodeship.value;
    const errors = [];


    if(firstName.length === 0) {
        errors.push('Wprowadzone imię jest nieprawidłowe!');
    }
    if(lastName.length === 0) {
        errors.push('Wprowadzone nazwisko jest nieprawidłowe!');
    }
    if(street.length === 0) {
        errors.push('Wprowadzona ulica jest nieprawidłowa!');
    }
    if(houseNumber.length === 0 && flatNumber.length === 0) {
        errors.push('Wprowadzony numer jest nieprawidłowy!');
    }
    if(zip.length !== 6) {
        errors.push('Wprowadzony kod pocztowy jest nieprawidłowy!');
    }
    if(city.length === 0) {
        errors.push('Wprowadzone miasto jest nieprawidłowe!');
    }
    if(voivodeship.length === 0) {
        errors.push('Wprowadzone województwo jest nieprawidłowe!');
    }

    if(errors.length > 0) {
        e.preventDefault();
        ulEl.innerHTML = '';

        errors.forEach(function(element) {
            const newLi = document.createElement('li');
            newLi.innerText = element;
            newLi.style.color = 'red';
            ulEl.appendChild(newLi);
        })
    } else {
        alert('Dane zostały wysłane prawidłowo!');
    }
}