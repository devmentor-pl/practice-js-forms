const formEl = document.querySelector('form');
const ulList = document.querySelector('.users-list');

formEl.addEventListener('submit', addUser);

function addUser(e) {
	e.preventDefault();
	const firstName = e.target.elements.firstName.value;
	const lastName = e.target.elements.lastName.value;

	fullName(firstName, lastName);
}

function fullName(firstName, lastName) {
	if (firstName && lastName) {
		const li = document.createElement('li');
		li.classList.add('user-list__person');
		li.innerText = `${firstName} ${lastName}`;
		ulList.appendChild(li);
	} else {
		alert('Fill given fields.');
	}
}
