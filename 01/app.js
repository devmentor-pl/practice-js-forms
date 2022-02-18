const formEl = document.querySelector('form');
const usersList = formEl.nextElementSibling;
const firstUser = usersList.firstElementChild;
const firstNameInput = formEl.firstElementChild.firstElementChild.firstElementChild;


const stopEvent = function(e) {
    e.preventDefault();
    const firstName = e.target.elements.firstName.value;
    const lastName = e.target.elements.lastName.value;
    const newUser = document.createElement('li');
    const firstUserClass = firstUser.className;
    newUser.classList.add(firstUserClass);
    newUser.innerText = firstName + ' ' + lastName;
    usersList.appendChild(newUser);
    e.target.elements.firstName.value = '';
    e.target.elements.lastName.value = '';
    firstNameInput.select();
}

formEl.addEventListener('submit', stopEvent);
