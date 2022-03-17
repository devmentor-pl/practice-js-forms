const userNameForm = document.querySelector('form');
const usersList = document.querySelector('.users-list')

userNameForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const firstName = e.target.elements.firstName;
    const lastName = e.target.elements.lastName;
    const errors = [];

    checkData(firstName, errors);
    checkData(lastName, errors);

    if(errors.length === 0) {
        const newUser = document.createElement('li');
        newUser.classList.add('user-list__person');
        newUser.innerText = firstName.value + ' ' + lastName.value;
        usersList.appendChild(newUser);
        firstName.value = '';
        lastName.value = '';
    } else {
        alert('Wpisz poprawne dane!')
    }
})

function checkData(element, arr) {
    if(element.value === '') {
        arr.push(element);
    }
}