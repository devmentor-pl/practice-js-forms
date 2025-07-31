const formEl = document.querySelector("form");
if (formEl) {
  formEl.addEventListener("submit", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();

  const firstNameEl = e.target.elements.firstName;
  const lastNameEl = e.target.elements.lastName;

  const firstName = firstNameEl.value;
  const lastName = lastNameEl.value;

  if (firstName !== "" && lastName !== "") {
    const ulElement = document.querySelector(".users-list");
    const liElement = document.createElement("li");

    liElement.classList.add("users-list__person");
    liElement.innerText = firstName + " " + lastName;

    ulElement.appendChild(liElement);

    firstNameEl.value = "";
    lastNameEl.value = "";
  } else {
    alert("Wprowadź wszystkie dane do formularza!");
  }
}
