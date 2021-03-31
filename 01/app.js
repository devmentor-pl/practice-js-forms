

const formEl = document.querySelector('form');
formEl.addEventListener('submit', function (e) {
    e.preventDefault();

    const firstName = e.target.elements.firstName;

    const lastName = e.target.elements.lastName;

    const usersList = document.querySelector('.users-list');

    const newLi = document.createElement('li');
    newLi.classList.add('users-list__person');
    newLi.innerText = firstName.value + " " + lastName.value;

    usersList.appendChild(newLi);
})