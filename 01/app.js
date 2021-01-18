/* Zadanie 1 + rozszerzenie zadania o obsługę błędu*/

const ulErrorsEl = document.querySelector('.errors');
const formEl = document.querySelector('form');
const ulEl = document.querySelector('.users-list');

formEl.addEventListener('submit', checkData);

function checkData(e) {
    const firstName = e.target.elements.firstName.value;
    const lastName = e.target.elements.lastName.value;
    const errors = [];

    if (firstName.length === 0) {
        errors.push('Field name: First Name is required!');
    }
    if (lastName.length === 0) {
        errors.push('Field name: Last Name is required!');
    }
    if (errors.length > 0) {
        e.preventDefault();

        ulErrorsEl.innerHTML = '';

        errors.forEach(function (err) {
            const newErrorLi = document.createElement('li');
            newErrorLi.innerText = err;
            ulErrorsEl.appendChild(newErrorLi);

        });
    } else {
        const newLi = document.createElement('li');
        newLi.classList.add('user-list__person');
        newLi.innerText = firstName + ' ' + lastName;
        ulEl.appendChild(newLi);

        e.preventDefault();
    }
}