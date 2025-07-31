const formElement = document.querySelector("form");
const ulElement = document.querySelector(".users-list");
const firstNameInputElement = formElement.querySelector(
  "input[name=firstName]"
);
const lastNameInputElement = formElement.querySelector("input[name=lastName]");
formElement.addEventListener("submit", (e) => {
  e.preventDefault();
  const liElement = createNewPersonElement(
    firstNameInputElement.value,
    lastNameInputElement.value
  );

  ulElement.appendChild(liElement);
  clearInputField(firstNameInputElement);
  clearInputField(lastNameInputElement);
  firstNameInputElement.focus();
});

function createNewPersonElement(firstName, lastName) {
  const newLiElement = document.createElement("li");
  newLiElement.classList.add("user-list__person");
  newLiElement.textContent = `${firstName} ${lastName}`;
  return newLiElement;
}

function clearInputField(inputElement) {
  inputElement.value = "";
}
