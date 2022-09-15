const form = document.querySelector('form');
const usersList = document.querySelector('.users-list');

const postData = function (e){
    e.preventDefault();
    const firstNameInput = e.target.elements.firstName;
    const lastNameInput = e.target.elements.lastName;

    if(firstNameInput.value.length > 0 && lastNameInput.value.length > 0){
        const item = document.createElement('li');
        item.classList.add('user-list__person');
        item.innerText = firstNameInput.value + ' ' + lastNameInput.value;
        usersList.appendChild(item);
    }else{
        alert('Invalid user data!')
    }
    firstNameInput.value = '';
    lastNameInput.value = '';

}
form.addEventListener('submit', postData);