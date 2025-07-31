const formEl = document.querySelector("form");
const ulEl = document.querySelector("ul");

formEl.addEventListener("submit", addUser);

function addUser(e) {
  e.preventDefault();
  const firstName = e.target.elements.firstName.value;
  const lastName = e.target.elements.lastName.value;
  if (firstName && lastName) {
    const newLi = document.createElement("li");
    newLi.classList.add("users-list__person");
    newLi.innerText = `${firstName} ${lastName}`;
    ulEl.appendChild(newLi);
    formEl.reset();
  } else {
    alert("Proszę wypełnic pola First Name i Last Name");
  }
}
