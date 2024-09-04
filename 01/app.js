document.addEventListener('DOMContentLoaded', function(){

    const form = document.querySelector('form');
    const usersList = document.querySelector('.users-list');

form.addEventListener('submit', function(event){

    event.preventDefault();


    const firstName = form.elements['firstName'].value;
    const lastName = form.elements['lastName'].value;

    const newUser = document.createElement('li');
    newUser.classList.add('users-list__person');
    newUser.textContent = `${firstName} ${lastName}`;

    usersList.appendChild(newUser)
})


})