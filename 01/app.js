const formEl = document.querySelector('form');
const namesUlList = document.querySelector('.users-list');

formEl.addEventListener('submit', recordUser);

function recordUser(e) {
	const firstName = e.target.elements.firstName.value;
	const lastName = e.target.elements.lastName.value;

	if (lastName && firstName) {
		listingUser(firstName, lastName);
		e.target.elements.firstName.value = '';
		e.target.elements.lastName.value = '';
	}

	e.preventDefault();
}
function listingUser(firstName, surname) {
	const liElem = document.createElement('li');
	liElem.classList.add('user-list__person');
	liElem.textContent = `${firstName} ${surname}`;
	namesUlList.appendChild(liElem);
}
