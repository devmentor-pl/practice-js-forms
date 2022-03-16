const userNameForm = document.querySelector('form');
const usersList = document.querySelector('.users-list')

userNameForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const firstName = e.target.elements.firstName;
    const lastName = e.target.elements.lastName;

    if(firstName.value === '' && lastName.value === '') {
        alert('Wpisz imię i nazwisko!');
    } else if(firstName.value === '') {
        alert('Wpisz imię!');
    } else if(lastName.value === '') {
        alert('Wpisz nazwisko!');
    } else {
        const newUser = document.createElement('li');
        newUser.classList.add('user-list__person');
        newUser.innerText = firstName.value + ' ' + lastName.value;
        usersList.appendChild(newUser);
        firstName.value = '';
        lastName.value = '';
    }

})