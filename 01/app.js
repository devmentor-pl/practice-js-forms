const formEl = document.querySelector('form');
const ulEl = document.querySelector('ul');

formEl.addEventListener('submit', getValue);

function getValue(event) {
    event.preventDefault();
    let firstInputValue = formEl.elements[0].value;
    let secondInputValue = formEl.elements[1].value;

    if (firstInputValue === '' || secondInputValue === '') {
        alert('Uzupełnij dane!');
    }
    else {

        const newLi = document.createElement('li');
        newLi.classList.add('user-list__person');

        newLi.innerText = firstInputValue + ' ' + secondInputValue;
        ulEl.appendChild(newLi);

        formEl.elements[0].value = '';
        formEl.elements[1].value = '';
    }


}