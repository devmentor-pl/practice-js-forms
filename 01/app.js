const formEl = document.querySelector('form')
const usersList = document.querySelector('.users-list')
formEl.addEventListener('submit', getFormData)

console.log(formEl.elements);


// const elementsOfForm = Array.form(formEl.elements)
// console.log(elementsOfForm);

function getFormData (e) {
    e.preventDefault();
// console.log(formEl.elements);
    for (el of formEl.elements ) {
        // console.log(el.value);
        const userData = document.createElement('li')
        userData.innerText = el.value
        // console.log(userData);
    }
}




