const formEl = document.querySelector("form");
const firstNameEl = document.querySelector('input[name="firstName"]');
const lastNameEl = document.querySelector('input[name="lastName"]');
const ulEl = document.querySelector("ul");

formEl.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
	e.preventDefault();
	const firstNameValue = firstNameEl.value;
	const lastNameValue = lastNameEl.value;

	if ((firstNameValue !== "") & (lastNameValue !== "")) {
		const newLi = document.createElement("li");
		ulEl.appendChild(newLi);
		newLi.classList.add("users-list__person");
		newLi.innerText = firstNameValue + " " + lastNameValue;
	} else {
		return alert("Wypełnij wszystkie pola!");
	}
}
