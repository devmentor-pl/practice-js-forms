const formEl = document.querySelector("form");

formEl.addEventListener("submit", addLi);

function addLi(e) {
	e.preventDefault();

	const firstName = formEl.elements[0].value;
	const lastName = formEl.elements[1].value;

	if (firstName.length !== 0 && lastName.length !== 0) {
		const ulList = document.querySelector(".users-list");
		const liElement = document.createElement("li");

		liElement.classList.add("user-list__person");
		liElement.innerText = `${firstName} ${lastName}`;

		ulList.appendChild(liElement);
	} else {
		alert("You must fill both fields");
	}
}
