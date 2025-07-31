const formEl = document.querySelector('form');
const usersList = document.querySelector('.users-list');
const firstUser = document.querySelector('.users-list__person');
const firstNameInput = formEl.elements.firstName;

const createNewListEl = function(userClass, firstName, lastName) {
    const newUser = document.createElement('li');
    newUser.classList.add(userClass);
    newUser.innerText = firstName + ' ' + lastName;
    return newUser;
}

const clearInputs = function(e) {
    e.target.elements.firstName.value = '';
    e.target.elements.lastName.value = '';
    firstNameInput.select()
}

const addUserToList = function(e) {
    e.preventDefault();
    const firstName = e.target.elements.firstName.value;
    const lastName = e.target.elements.lastName.value;
    const userClass = firstUser.className;
    const newListEl = createNewListEl(userClass, firstName, lastName);
    usersList.appendChild(newListEl);
    clearInputs(e);
}

formEl.addEventListener('submit', addUserToList);
