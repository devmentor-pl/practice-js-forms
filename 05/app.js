document.addEventListener('DOMContentLoaded', init)

function init() {
    const messages = [];

    const form = document.forms[0];

    form.setAttribute('novalidate', '')
    form.addEventListener('submit', validateForm)

    const errorList = document.querySelector('.messages')

    function validateForm(e) {
        e.preventDefault();
        messages.length = 0;
        console.log('Validating...');

        const firstName = form.elements.firstName;
        const lastName = form.elements.lastName;
        const street = form.elements.street;
        const houseNumber = form.elements.houseNumber;
        const flatNumber = form.elements.flatNumber;
        const zip = form.elements.zip;
        const city = form.elements.city;
        const voivodeship = form.elements.voivodeship;

        validate(firstName, 'First name', /^[A-Z][a-z]{2,}$/g);
        validate(lastName, 'Second name', /^[A-Z][a-z]{2,}$/g);
        validate(street, 'Street name', /\w+/g);
        validate(houseNumber, 'House number', /^\d{1,4}$/g);
        validate(flatNumber, 'Flat name', /^\d{1,4}$/g);
        validate(zip, 'Zip code', /^[0-9]{2}-[0-9]{3}$/);
        validate(city, 'City', /.+/);
        validate(voivodeship, 'Voivodeship', /.+/);

        if (messages.length === 0) {
            window.confirm("Form filled properly")
            clearErrorsList();
        } else {
            createErrorsList();
        }
    }

    function isFilled(field) {
        if (field.value.trim().length === 0) {
            return false;
        }
        return true;
    }

    function validate(field, fieldName, regex) {
        const fieldValue = field.value.trim();
        if (field.required && !isFilled(field)) {
            messages.push(fieldName + ' not inputted');
        }
        if (isFilled(field) && !regex.test(fieldValue)) {
            messages.push(fieldName + ' invalid: ' + fieldValue);
        }
    }

    function clearErrorsList() {
        errorList.innerHTML = ''
    }

    function createErrorsList() {
        errorList.innerHTML = ''
        errorList.style.color = 'red';
        messages.forEach(function (message) {
            const item = document.createElement('li');
            errorList.appendChild(item);
            item.innerText = message;
        })
    }
}



