const formEl = document.querySelector('form');


const addUserToList = function (firstName, lastName) {
    const usersList = document.querySelector('.users-list');
    const listItem = document.createElement('li');
    listItem.classList.add('users-list__person');

    listItem.innerText = `${firstName} ${lastName}`;

    usersList.appendChild(listItem);
}

const checkData = function (firstName, lastName) {
    if (firstName.value.length === 0 || lastName.value.length === 0) {
        alert('Wprowadziłeś błędne dane!')
    } else {
        addUserToList(firstName.value, lastName.value);
    }
}

const clearInput = function (firstName, lastName) {
    firstName.value = '';
    lastName.value = '';
}

const printData = function (e) {
    e.preventDefault();

    const firstName = formEl.elements['firstName'];
    const lastName = formEl.elements['lastName'];

    checkData(firstName, lastName);
    clearInput(firstName, lastName);
}

formEl.addEventListener('submit', printData)


