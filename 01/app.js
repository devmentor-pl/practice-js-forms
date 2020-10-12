const formEl = document.querySelector('form');
const usersListEl = document.querySelector('.users-list');

formEl.addEventListener('submit', submitHandler);

function submitHandler(e) {
   e.preventDefault();

    const firstName = e.target.elements['firstName'].value;
    const lastName = e.target.elements['lastName'].value;
    const liEl = document.createElement('li');
    
    liEl.innerText = firstName + ' ' + lastName;
    liEl.classList.add('user-list__person');
    usersListEl.appendChild(liEl);
}