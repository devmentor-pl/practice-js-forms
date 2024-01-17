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
            if (fieldValue === '') {
                const fieldName = input.name;
                errorHandle(fieldName, event);
            }
        }
    });
});

function getFieldValue(input) {
    if (input.tagName === 'SELECT') {
        // Dla pola typu <select>, sprawdź, czy coś zostało wybrane
        return input.value;
    } else {
        // Dla innych pól, po prostu pobierz wartość
        return input.value.trim();
    }
}

function errorHandle(fieldName, event) {
    event.preventDefault();
    const errorMsg = document.createElement('div');
    errorMsg.classList.add('error-msg');
    errorMsg.textContent = `Proszę wprowadź poprawne dane dla pola: ${fieldName}`;
    messagesEl.appendChild(errorMsg);
}
