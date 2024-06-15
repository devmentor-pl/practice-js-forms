const formEl = document.querySelector('form')
const msgList = document.querySelector('.messages');
const submit = document.querySelector('input[type="submit"]')
formEl.setAttribute('novalidate', true)

formEl.addEventListener('submit', function (e) {
    validateInfo(e);
})

function validateInfo(e) {
    e.preventDefault();
    msgList.innerHTML = '';
    const errors = [];

    const firstNameEl = e.target.elements.firstName
    const lastNameEl = e.target.elements.lastName
    const streetEl = e.target.elements.street
    const houseNumberEl = e.target.elements.houseNumber
    const zipEl = e.target.elements.zip
    const cityEl = e.target.elements.city
    const regionEl = e.target.elements.voivodeship

    const firstNameValue = firstNameEl.value.trim();
    const lastNameValue = lastNameEl.value.trim();
    const streetValue = streetEl.value.trim();
    const houseNumberValue = houseNumberEl.value.trim();
    const zipCodeValue = zipEl.value.trim();
    const cityValue = cityEl.value.trim();
    const regionValue = regionEl.value.trim();
    const zipPattern = /^[0-9]{2}-[0-9]{3}$/

    if (firstNameValue === '') {
        errors.push('Podaj imię')
    }
    if (lastNameValue === '') {
        errors.push('Podaj nazwisko')
    }
    if (streetValue === '') {
        errors.push('Podaj ulicę')
    }
    if (houseNumberValue === '') {
        errors.push('Podaj nr domu')
    }
    if (!zipPattern.test(zipCodeValue)) {
        errors.push('Podaj kod pocztowy')
    }
    if (cityValue === '') {
        errors.push('Podaj miasto')
    }
    if (regionValue === '') {
        errors.push('Wybierz wojewodztwo')
    }

    if( errors.length > 0) {
        errors.forEach(function(error) {
            displayErrors(msgList, error)
        })
    } else {
        displaySuccess(msgList)
    }
}

function displayErrors(element, error) {
    const liElement = document.createElement('li');
    liElement.textContent = error;
    element.appendChild(liElement)
}

function displaySuccess(element) {
    const liElement = document.createElement('li');
    liElement.textContent = 'Formularz wyslany!';
    element.appendChild(liElement);
}

