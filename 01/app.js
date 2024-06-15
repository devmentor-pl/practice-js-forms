const formEl = document.querySelector('form');
const ulEl = document.querySelector('.users-list');

formEl.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
    e.preventDefault();

    const firstNameEl = formEl.elements.firstName;
    const lastNameEl = formEl.elements.lastName;

    let firstNameValue = firstNameEl.value;
    let lastNameValue = lastNameEl.value;

    if(firstNameValue !== '' && lastNameValue !== '') {
        const newLi = document.createElement('li');
        newLi.classList.add('user-list__person');
        newLi.textContent = firstNameValue + ' ' + lastNameValue;
        ulEl.appendChild(newLi);
        firstNameEl.value = '';
        lastNameEl.value = '';
    }
};
