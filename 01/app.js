const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const userName =
    e.target.elements.firstName.value + " " + e.target.elements.lastName.value;

  const usersList = form.nextElementSibling;
  const person = document.createElement("li");
  person.setAttribute("class", ".user-list-person");
  person.textContent = userName;
  usersList.appendChild(person);
});
