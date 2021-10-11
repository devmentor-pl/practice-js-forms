const formEl = document.querySelector('form');
const ul = document.querySelector('.users-list');
const liClassName = 'users-list__person';
formEl.addEventListener('submit', getDatas);
// console.log(formEl.elements)
function getDatas(e){
    e.preventDefault()

    // console.log(e.target.elements.firstName.value);
    let firstName = e.target.elements.firstName.value;
    let lastName = e.target.elements.lastName.value;

    const newLi = document.createElement('li');
    newLi.classList.add(liClassName)
    newLi.innerText = firstName + ' ' + lastName;
    ul.appendChild(newLi);
}
