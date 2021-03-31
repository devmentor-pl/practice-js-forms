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
        addMessageRequired(messages, e.target.elements.firstName.name);
    }
    if (lastName.length === 0) {
        addMessageRequired(messages, e.target.elements.lastName.name);
    }
    if (street.length === 0) {
        addMessageRequired(messages, e.target.elements.street.name);
    }
    if (houseNumber.length === 0) {
        addMessageRequired(messages, e.target.elements.houseNumber.name);
    }
    if (houseNumber.length >= 0 && Number(houseNumber) <= 0) {
        messages.push('Field name: Hause number must be > 0');
    }
    if (flatNumber.length != 0 && Number(flatNumber) <= 0) {
        messages.push('Field name: Flat number must be > 0');
    }
    if (zip.length === 0) {
        addMessageRequired(messages, e.target.elements.zip.name);
    }
    if (!zip.match(/^\d\d-\d\d\d$/)) {
        messages.push('Field name: Zip must be special number!');
    }
    if (city.length === 0) {
        addMessageRequired(messages, e.target.elements.city.name);
    }
    if (voivodeship.length === 0) {
        addMessageRequired(messages, e.target.elements.voivodeship.name);
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

        const field = e.target.elements;

        clearData(field);

        alert('Dane zostały wysłane prawidłowo');

        e.preventDefault();
    }
}

function addMessageRequired(arr, fieldName) {
    arr.push('Field name: ' + fieldName + ' is required!');
}

function clearData(field) {
    for (let i = 0; i < field.length - 1; i++) {
        //field[i]['value'] = '';
        field[i].value = '';
    }
}
