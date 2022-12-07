const formEl = document.querySelector('form');
const ulEl = document.querySelector('ul');

formEl.addEventListener('submit', createUser);

function createUser(e) {

    e.preventDefault();

    const firstName = e.target.elements.firstName.value;
    const lastName = e.target.elements.lastName.value;

    if(firstName.length === 0) {
        alert('field required');
    } else if (lastName.length === 0) {
        alert('field required');
    } else {
        const userName = firstName + ' ' + lastName;
        const liEl = document.createElement('li');
        liEl.classList.add('user-list__person');
        liEl.innerText = userName;
        ulEl.appendChild(liEl);
    }
}