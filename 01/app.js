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
    else if (lastName.length === 0) {
        alert('Last Name is required!');
    } else {
        const userName = firstName + ' ' + lastName;
        const newLi = document.createElement('li');
        newLi.classList.add('user-list__person');
        newLi.innerText = userName
        ulEl.appendChild(newLi);
    }
}