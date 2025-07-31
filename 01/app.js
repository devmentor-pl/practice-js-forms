const formEl = document.querySelector('form');
const ulEl = document.querySelector('ul');

formEl.addEventListener('submit', createUser);

function createUser(e) {

    e.preventDefault();

    const firstName = e.target.elements.firstName.value;
    const lastName = e.target.elements.lastName.value;

    const errors = [];

    if(firstName.length === 0) {
        errors.push('field required');
    }
    if(lastName.length === 0) {
        errors.push('field required');
    } 
    if(errors.length > 0) {
        e.preventDefault();
        const userName = firstName + ' ' + lastName;
        const liEl = document.createElement('li');
        liEl.classList.add('user-list__person');
        liEl.innerText = userName;
        ulEl.appendChild(liEl);
        liEl.style.color = 'red';
    } else {
        alert('Your form is completed correctly :) ');
    }
}