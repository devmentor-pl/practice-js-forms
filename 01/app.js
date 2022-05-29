const formEl = document.querySelector('form');
const firstName = document.querySelector("input[name='firstName']");
const lastName = document.querySelector("input[name='lastName']");
const submit = document.querySelector("input[type='submit']");
const usersList = document.querySelector('.users-list');

function addUser(e) {
	e.preventDefault();
	if (firstName.value && lastName.value) {
		let userName = firstName.value + ' ' + lastName.value;
		const newUser = document.createElement('li');
		newUser.innerText = userName;
		newUser.classList.add('.user-list__person');
		usersList.appendChild(newUser);
		firstName.value = '';
		lastName.value = '';
	} else {
		alert('Uzupełnij pola!');
	}
}

submit.addEventListener('click', addUser);
