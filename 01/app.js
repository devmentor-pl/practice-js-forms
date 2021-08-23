const userList = document.querySelector('ul');
const formEl = document.querySelector('form');

formEl.addEventListener('submit', addUserData);

function addUserData(e) {
    e.preventDefault();
    const fullName = getUserData(e.target);
    if (fullName) {
        const newLi = createNewLi(fullName, 'user-list__person');
        userList.appendChild(newLi);
    } else {
        alert('Both fields are required!');
    }
}

function createNewLi(fullName, className) {
    const newLi = document.createElement('li');
    newLi.classList.add(className);
    newLi.innerText = `${fullName}`;
    return newLi;
}

function getUserData(form) {
    const formInputs = form.elements;
    const name = formInputs.firstName.value;
    const surname = formInputs.lastName.value;
    return (isDataValid(name, surname)) ? `${name} ${surname}` : '';
}

function isDataValid(name, surname) {
    return (name.length > 0 && surname.length > 0) ? true : false;
}