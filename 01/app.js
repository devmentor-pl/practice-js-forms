document.addEventListener('DOMContentLoaded', function(){

    const form = document.querySelector('form');
    const usersList = document.querySelector('.users-list');

form.addEventListener('submit', function(event){

    event.preventDefault();


    const firstName = form.elements['firstName'].value;
    const lastName = form.elements['lastName'].value;

    if (firstName.length === 0 || lastName.length === 0) {
        alert('Proszę wypełnić oba pola!');
        return;
    }

    const newUser = document.createElement('li');
    newUser.classList.add('users-list__person');
    newUser.textContent = `${firstName} ${lastName}`;

    usersList.appendChild(newUser)
})


})