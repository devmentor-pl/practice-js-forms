const formEl = document.querySelector('form');
const ulEl = document.querySelector('ul');
const firstNameEl = formEl.querySelector('input[name="firstName"]');
const lastNameEl = formEl.querySelector('input[name="lastName"]');

formEl.addEventListener('submit', handleInput);

function handleInput(e) {
    e.preventDefault();

    let firstName = firstNameEl.value;
    let lastName = lastNameEl.value;

    printFullName(firstName, lastName);
    firstNameEl.value = '';
    lastNameEl.value = '';

}

function printFullName(first, last) {
    const liEl = document.createElement('li');
    liEl.classList.add('user-list__person');
    ulEl.appendChild(liEl);

    liEl.textContent = `${first} ${last}`;
}