const formEl = document.querySelector('form')
const ulEl = document.querySelector('ul')
formEl.addEventListener('submit', function(e) {
    e.preventDefault();
    const firstName = e.target.elements.value
    const lastName = e.target.elements.value
    if(firstName.length === 0) {
        alert('Please, get text')
    } else {
        userName = firstName + ' ' + lastName;
        const newLi = document.createElement('li');
        newLi.classList.add('user-list__person');
        newLi.innerText = userName;
        ulEl.appendChild(newLi)
    }
})