const form = document.querySelector('form');
const ul = document.querySelector('ul');

const getInputsValue = function (e) {
    e.preventDefault()
    const inputs = [...this.elements];
    const [firstName,lastName] = [...this.elements];
    const liElement = document.createElement('li');
    liElement.classList.add('user-list__person');
    liElement.textContent = `${firstName.value} ${lastName.value}`;
    ul.appendChild(liElement);
    firstName.value = ''
    lastName.value = ''

}

form.addEventListener('submit', getInputsValue);