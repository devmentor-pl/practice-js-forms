const ulMessagesEl = document.querySelector('.messages');
const formEl = document.querySelector('form');


formEl.addEventListener('submit', checkData);

function checkData(e) {
    const firstName = e.target.elements.firstName.value;
    const lastName = e.target.elements.lastName.value;
    const street = e.target.elements.street.value;
    const houseNumber = e.target.elements.houseNumber.value;
    const flatNumber = e.target.elements.flatNumber.value;
    const zip = e.target.elements.zip.value;
    const city = e.target.elements.city.value;
    const voivodeship = e.target.elements.voivodeship.value;
    const messages = [];

    if (firstName.length === 0) {
        messages.push('Field name: First Name is required!');
    }
    if (lastName.length === 0) {
        messages.push('Field name: Last Name is required!');
    }
    if (street.length === 0) {
        messages.push('Field name: Street is required!');
    }
    if (houseNumber.length === 0) {
        messages.push('Field name: Hause number is required!');
    }
    if (houseNumber.length >= 0 && Number(houseNumber) <= 0) {
        messages.push('Field name: Hause number must be > 0');
    }
    if (flatNumber.length != 0 && Number(flatNumber) <= 0) {
        messages.push('Field name: Flat number must be > 0');
    }
    if (zip.length === 0) {
        messages.push('Field name: Zip is required!');
    }
    if (!zip.match(/^\d\d-\d\d\d$/)) {
        messages.push('Field name: Zip must be special number!');
    }
    if (city.length === 0) {
        messages.push('Field name: City is required!');
    }
    if (voivodeship.length === 0) {
        messages.push('Field name: Voivodeship is required!');
    }


    if (messages.length > 0) {
        e.preventDefault();

        ulMessagesEl.innerHTML = '';

        messages.forEach(function (message) {
            const newMessageLi = document.createElement('li');
            newMessageLi.innerText = message;
            ulMessagesEl.appendChild(newMessageLi);

        });
    } else {
        ulMessagesEl.innerHTML = '';

        e.target.elements.firstName.value = '';
        e.target.elements.lastName.value = '';
        e.target.elements.street.value = '';
        e.target.elements.houseNumber.value = '';
        e.target.elements.flatNumber.value = '';
        e.target.elements.zip.value = '';
        e.target.elements.city.value = '';
        e.target.elements.voivodeship.value = '';

        alert('Dane zostały wysłane prawidłowo');

        e.preventDefault();
    }
}