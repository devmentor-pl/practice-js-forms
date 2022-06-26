document.addEventListener("DOMContentLoaded", init);

const init = function () {
	const formByQuery = document.querySelector("form");
	if (formByQuery) {
		formByQuery.addEventListener("submit", checkData);
	}
};

const checkData = function (e) {
	const ulEl = document.querySelector(".messages");
	const firstName = e.target.elements.firstName;
	const lastName = e.target.elements.lastName;
	const street = e.target.elements.lastName;
	const houseNumber = e.target.elements.houseNumber;
	const flatNumber = e.target.elements.flatNumber;
	const zip = e.target.elements.zip;
	const city = e.target.elements.city;
	const voivodeship = e.target.elements.voivodeship;
	const messages = [];

	const arr1 = [firstName, lastName, street, zip, city, voivodeship];
	arr1.forEach(function (el) {
		const value = el.value;
		const name = el.name;
		checkLength(value, name, messages);
	});

	const arr2 = [houseNumber, flatNumber];
	arr2.forEach(function (el) {
		const value = el.value;
		const name = el.name;
		checkNumber(value, name, messages);
	});

	if (messages.length > 0) {
		e.preventDefault();
		messages.forEach(function (el) {
			const liEl = document.createElement("li");
			liEl.innerText = element;
			liEl.style.color = "red";
			ulEl.appendChild(liElement);
		});
	} else {
		if (ulEl) {
			while (ulEl.children.length > 0) {
				ulEl.removeChild(ulEl.lastElementChild);
			}
			alert("The form has been sent!");
			e.preventDefault();
		}
	}
};

const checkLength = function (value, name, arr) {
	if (value.length === 0) {
		const info = name + " is required";
		arr.push(info);
	}
};

const checkNumber = function (value, name, arr) {
	if (value.length === 0 && value <= 0) {
		const info = name + " is incorrect";
		arr.push(info);
	}
};
