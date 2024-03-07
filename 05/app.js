const form = document.querySelector('form');
const messagesEl = document.querySelector('.messages');

form.setAttribute('novalidate', '');

form.addEventListener('submit', function(event) {
    messagesEl.innerHTML = '';

    const formFields = Array.from(form.querySelectorAll('input, select'));

    formFields.forEach(function(input) {
        if (input.type !== 'submit') {
            const fieldValue = getFieldValue(input);
            const fieldName = input.name;
            
            if (fieldValue === '') {
                errorHandle(`Podaj poprawne dane dla: ${fieldName}`, event);
            } else if (fieldName === 'zip' && !validateZipCode(fieldValue)) {
                errorHandle('Podaj poprawny kod pocztowy', event);
            }
        }
    });
});


function getFieldValue(input) {
    if (input.tagName === 'SELECT') {
        return input.value;
    } else {
        return input.value.trim();
    }
}


function errorHandle(errorMessage, event) {
    event.preventDefault();
        const errorMsg = document.createElement('div');
        errorMsg.classList.add('error-msg');
        errorMsg.textContent = errorMessage;
        messagesEl.appendChild(errorMsg);
}

function validateZipCode(zipCode) {
    const zipCodePattern = /^[0-9]{2}-[0-9]{3}$/;
    return zipCodePattern.test(zipCode);
}