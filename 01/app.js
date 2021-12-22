const formEl = document.querySelector('form');
const ulEL = document.querySelector('.users-list')
const liEl = document.querySelector('.users-list__person');

formEl.addEventListener('submit', takeValue);

function takeValue(e){
    e.preventDefault();
    const firstName = e.target.elements.firstName.value;
    const lastName = e.target.elements.lastName.value;

    const cloneEl = liEl.cloneNode(false);
    ulEL.appendChild(cloneEl);

    cloneEl.innerText = firstName + ' ' + lastName;
}