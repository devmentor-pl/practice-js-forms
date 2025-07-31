document.querySelector('form').addEventListener('submit', addUserName);

const ul = document.querySelector('ul');

function addUserName(e) {
	e.preventDefault();
	// let inputs = [ ...document.querySelectorAll('input') ].filter((input) => input.getAttribute('type') != 'submit');
	let inputs = [ ...document.querySelectorAll('input') ].filter((input) => input.type != 'submit');
	let newLi = document.createElement('li');
	let name = [];

	inputs.forEach((input) => name.push(input.value));

	newLi.classList.add('user-list__person');
	newLi.textContent = name.join(' ');
	ul.appendChild(newLi);

	inputs.forEach((input) => (input.value = ' '));
}
