const form = document.querySelector('form');
const ul = document.querySelector('ul');
const firstNameData = form.querySelector('input[name="firstName"]');
const lastNameData = form.querySelector('input[name="lastName"]');


form.addEventListener('submit', handleChangeInput);

function handleChangeInput(e) {
    e.preventDefault();

    let firstName = firstNameData.value;
    let lastName = lastNameData.value;

    showFullData(firstName, lastName);
    firstName.value = '';
    lastName.value = '';
}

function showFullData(name, surname) {
    const newLi = document.createElement('li');
    newLi.classList.add('user-list__person');
    ul.appendChild(newLi);

    newLi.textContent = `${name} ${surname}`;
}