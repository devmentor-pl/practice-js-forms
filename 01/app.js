const formElement = document.querySelector('form');

if(formElement){
    formElement.addEventListener('submit', function(e) {
        e.preventDefault();

        const firstName = formElement.elements['firstName'];
        const lastName = formElement.elements['lastName'];

        if(firstName !== '' && lastName !== ''){
            addUser(firstName.value, lastName.value)
            firstName.value = ''
            lastName.value = ''
        }
    });
}

function addUser(name, lastName){
    const ulList = document.querySelector('.users-list');

    if(ulList){
        const liEl = document.createElement('li');
        liEl.classList.add('user-list__person');
        liEl.innerText = name + ' ' + lastName;

        ulList.appendChild(liEl)
    }
}