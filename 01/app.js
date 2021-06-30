const formEl = document.querySelector('form');
const ulEl = document.querySelector('ul');
// console.log(btnEl);

formEl.addEventListener('submit', addUser);

function addUser(e) {
    e.preventDefault();
    const firstName = e.target.elements.firstName.value;
    const lastName = e.target.elements.lastName.value;
    if (firstName.length === 0) {
        alert('First Name is required!');
    }
    if (lastName.length === 0) {
        alert('Last Name is required!');
    }
    const userName = firstName + ' ' + lastName;
    const newLi = document.createElement('li');
    newLi.classList.add('user-list__person');
    newLi.innerText = userName
    ulEl.appendChild(newLi);
}