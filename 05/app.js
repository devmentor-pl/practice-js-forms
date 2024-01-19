const form = document.querySelector('form');
const messagesEl = document.querySelector('.messages');

form.setAttribute('novalidate', '');

form.addEventListener('submit', function(event) {
    messagesEl.innerHTML = '';

    // Znajdź wszystkie pola formularza
    const formFields = Array.from(form.querySelectorAll('input, select'));

    // Iteruj przez pola i sprawdź ich wartości
    formFields.forEach(function(input) {
        // Sprawdź, czy element nie jest typu "submit"
        if (input.type !== 'submit') {
            const fieldValue = getFieldValue(input);
            const fieldName = input.name;

            if (fieldValue === '') {
                errorHandle(`Proszę wprowadź poprawne dane dla pola: ${fieldName}`, event);
            } else if (fieldName === 'zip' && !validateZipCode(fieldValue)) {
                errorHandle('Proszę wprowadź poprawny kod pocztowy (XX-XXX)', event);
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
    // Walidacja wzoru kodu pocztowego
    const zipCodePattern = /^[0-9]{2}-[0-9]{3}$/;
    return zipCodePattern.test(zipCode);
}
