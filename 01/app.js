const formEl = document.querySelector("form");

formEl.addEventListener("submit", getUserData);

function getUserData(e) {
	e.preventDefault();

	const firstName = document.querySelector('input[name="firstName"]').value;
	const lastName = document.querySelector('input[name="lastName"]').value;

	const ulElement = document.querySelector("ul");
	const liElement = document.createElement("li");
	liElement.classList.add("user-list__person");

	liElement.innerText = firstName + " " + lastName;

	ulElement.appendChild(liElement);
}
