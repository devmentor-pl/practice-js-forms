
const ul = document.querySelector('ul');
document.querySelector('form').addEventListener('submit', addUserName);

function addUserName(el) {
	let inputs = [ ...document.querySelectorAll('input') ].filter((input) => input.type != 'submit');
	let addedLi = document.createElement('li');
	let nameData = [];

    for (let i = 0; i < inputs.length; i++) {
        nameData.push(inputs[i].value);
    }
    // alternative solution with forEach
    // inputs.forEach((input) => nameData.push(input.value));

    if (nameData[0] !== '' && nameData[1] !== '') {
        addedLi.classList.add('user-list__person');
        addedLi.textContent = nameData.join(' ');
	    ul.appendChild(addedLi);

        // clear inputs values
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].value = '';
        }
        // alternative solution with forEach
        // inputs.forEach((input) => (input.value = ''));
    } else {
        alert('Podaj pełne dane!');
    }

    el.preventDefault();
}
