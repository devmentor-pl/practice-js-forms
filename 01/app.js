const formEl = document.querySelector("form");
const ulElement = document.querySelector("ul");

formEl.addEventListener("submit", getUserData);

function getUserData(e) {
	e.preventDefault();

	const firstName = document.querySelector('input[name="firstName"]');
	const lastName = document.querySelector('input[name="lastName"]');

	if (firstName.value !== "" && lastName.value !== "") {
		const liElement = document.createElement("li");
		liElement.classList.add("user-list__person");
		liElement.innerText = firstName.value + " " + lastName.value;
		ulElement.appendChild(liElement);
		firstName.value = "";
		lastName.value = "";
	} else {
		alert("Proszę wypełnić pola!");
	}
}
