const formEl = document.querySelector('form');
const ulEl = document.querySelector('.users-list');

formEl.addEventListener('submit', addUser);




function addUser(e) {
    e.preventDefault();

    const firstName = formEl.elements.firstName.value;
    const lastName = formEl.elements.lastName.value;


    const listItem = document.createElement('li');
    listItem.classList.add('user-list__person');
    listItem.innerText = firstName + ' ' + lastName;
    ulEl.appendChild(listItem);

}