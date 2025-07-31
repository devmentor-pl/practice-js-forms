document.addEventListener("DOMContentLoaded", init);

function init() {
  const form = document.querySelector("form");
  form.addEventListener("submit", handleSubmit);
}

const handleSubmit = function (e) {
  e.preventDefault();

  const name = e.target.elements.firstName.value;
  const surname = e.target.elements.lastName.value;

  const newPerson = document.createElement("li");
  newPerson.innerText = name + " " + surname;
  const list = document.querySelector(".users-list");
  list.appendChild(newPerson);
};

/*
const init = function () {
  const form = document.querySelector("form");
  form.addEventListener("submit", handleSubmit);
};

document.addEventListener("DOMContentLoaded", init);

const handleSubmit = function (e) {
  e.preventDefault();

  const name = e.target.elements.firstName.value;
  const surname = e.target.elements.lastName.value;

  const newPerson = document.createElement("li");
  newPerson.innerText = name + " " + surname;
  const list = document.querySelector(".users-list");
  list.appendChild(newPerson);
};
*/
