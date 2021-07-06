const form = document.querySelector("form");
const list = document.querySelector(".users-list");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = e.target.elements.firstName.value;
  const surname = e.target.elements.lastName.value;

  const newPerson = document.createElement("li");
  newPerson.innerText = name + " " + surname;
  list.appendChild(newPerson);
});
