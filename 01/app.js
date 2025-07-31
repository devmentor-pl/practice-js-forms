const formEl = document.querySelector('form');


const handleSubmit = function(e) {
    e.preventDefault();
    const firstName = e.target.elements.firstName.value;
    const lastName = e.target.elements.lastName.value;
    console.log(firstName, lastName);
    const ulEl = document.querySelector('.users-list');
    const newLiEl = document.createElement('li');
    newLiEl.classList.add('user-list__person');
    newLiEl.innerText = firstName + ' ' + lastName;
    ulEl.appendChild( newLiEl );
}

formEl.addEventListener('submit', handleSubmit);