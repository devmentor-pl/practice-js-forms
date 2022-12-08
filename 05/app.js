const formEl = document.querySelector('form');
const ulEl = document.querySelector('ul');
formEl.noValidate = true;
formEl.addEventListener('submit', checkData)

function checkData(e) {
    e.preventDefault();

    const errors = [];

    const firstName = e.target.elements.firstName.value;
    if(firstName.value.length < 2) {
        errors.push('enter correct first name');
    }

    const lastName = e.target.elements.lastName.value;
    if(lastName.value.length < 2) {
        errors.push('enter correct last name');
    }

    const street = e.target.elements.street.value;
    if(street.value.length === 0) {
        errors.push('enter correct street name');
    }

    const houseNumber = e.target.elements.houseNumber.value;
    if(houseNumber === 0 || Number(houseNumber) <= 0) {
        errors.push('enter correct house number');
    }

    const flatNumber = e.target.elements.flatNumber.value;
    if(flatNumber === 0 || Number(flatNumber) <= 0) {
        errors.push('enter correct flat number');
    }

    const zip = e.target.elements.zip.value;
    if (!(zip.match('^[0-9]{2}-[0-9]{3}$'))) {
        errors.push('enter correct zip code');
    }

    const city = e.target.elements.city.value;
    if(city.value.length === 0) {
        errors.push('enter correct city name' )
    }

    const voivodeship = e.target.elements.voivodeship.value;
    if(voivodeship.value.length < 1) {
        errors.push('choose correct voivodeship name');
    }

    // check if the form is completed correctly

    if(errors.length > 0) {
        e.preventDefault();
        ulEl.innerText = '';
        errors.forEach(function(err) {
            const newLiEl = document.createElement('li');
            newLiEl.innerText = err.message;
            ulEl.appendChild(newLiEl);
            newLiEl.style.color = 'red';
        })
    } else {
        alert('Your form is completed correctly :) ');
    }
}

