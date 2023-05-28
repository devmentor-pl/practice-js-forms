const form = document.querySelector("form");
const firstName = document.querySelector('input[name="firstName"]');
const lastName = document.querySelector('input[name="lastName"]');
const userList = document.querySelector(".users-list");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const firstNameValue = firstName.value;
  const lastNameValue = lastName.value;
  if (
    lastNameValue &&
    firstNameValue &&
    isNaN(firstNameValue) &&
    isNaN(lastNameValue)
  ) {
    const liTag = document.createElement("li");
    liTag.classList.add("user-list__person");
    liTag.textContent = firstNameValue + " " + lastNameValue;
    userList.appendChild(liTag);
  }
});
