const formEl = document.querySelector("form");
const usersList = document.querySelector(".users-list");

const submitHandler = function (e) {
  e.preventDefault();
  const firstName = e.target.elements["firstName"];
  const lastName = e.target.elements["lastName"];

  const newLi = document.createElement("li");
  newLi.classList.add("user-list__person");
  newLi.innerText = firstName.value + " " + lastName.value;

  usersList.appendChild(newLi);
};

formEl.addEventListener("submit", submitHandler);
