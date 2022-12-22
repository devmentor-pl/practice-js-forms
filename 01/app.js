const formEl = document.querySelector('form');
const ul = document.querySelector('.users-list');

formEl.addEventListener('submit', function (e) {
	e.preventDefault();

	const userName = e.target.elements.firstName.value;
	const userLastName = e.target.elements.lastName.value;

	if (userName !== '' && userLastName !== '') {
		const li = document.createElement('li');
		li.classList.add('users-list__person');
		li.innerText = `${userName} ${userLastName}`;

		ul.appendChild(li);

		formEl.reset();
	} else {
		alert('Proszę wypełnić pola!');
	}
});
