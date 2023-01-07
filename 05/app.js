const formEl = document.querySelector('form');
const messagesList = document.querySelector('.messages');
formEl.noValidate = true;

if (formEl) {
    formEl.addEventListener('submit', checkData)
}

function createMessageItem(message) {
    const listItem = document.createElement('li');

    listItem.classList.add('messages__item');
    listItem.innerText = message;

    return listItem;
}

function checkData(e) {
    e.preventDefault();

    const messages = [];

    for (const key of formEl) {
        const label = key.previousSibling;
        const labelParent = key.parentElement;

        if (key.hasAttribute('required') && key.value.length === 0) {
            labelParent.style.color = 'red';
            messages.push(`Pole: ${label.textContent} jest wymagane!`);
        } else {
            labelParent.style.color = 'black';
        }
        if (key.type === 'number' && key.value.length > 0 && key.value <= 0) {
            labelParent.style.color = 'red';
            messages.push(`Podaj poprawny ${label.textContent}!`);
        }
        if (key.name === 'zip') {
            const value = key.value;
            const isValidZip = /^[0-9]{2}(?:-[0-9]{3})?$/.test(value);

            if (!isValidZip) {
                labelParent.style.color = 'red';
                messages.push(`Podaj poprawny ${label.textContent}!`)
            }
        }
    }

    if (messages.length > 0) {

        messagesList.innerHTML = '';
        messages.forEach(function (message) {
            const error = createMessageItem(message);

            messagesList.appendChild(error);
        });
    } else if (messages.length === 0) {
        messagesList.innerHTML = '';

        const info = createMessageItem('Pomyślnie wysłano formularz.');

        messagesList.appendChild(info);
    }
}