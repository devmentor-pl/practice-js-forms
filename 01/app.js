const form = document.querySelector("form");
const firstName = document.querySelector('input[name="firstName"]');
const lastName = document.querySelector('input[name="lastName"]');
const userList = document.querySelector(".users-list");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  //   console.log(e.target);
  const firstNameInput = firstName.value;
  const lastNameInput = lastName.value;
  if (lastName && firstName && isNaN(firstName) && isNaN(lastName)) {
    const liTag = document.createElement("li");
    liTag.classList.add("user-list__person");
    liTag.textContent = firstNameInput + " " + lastNameInput;
    userList.appendChild(liTag);
  }
});
