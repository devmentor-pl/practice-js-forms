const form = document.querySelector("form");
const inputFirstName = document.querySelector('input[name="firstName"]');
const inputLastName = document.querySelector('input[name="lastName"]');

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const inputFirstNameValue = inputFirstName.value;
  const inputLastNameValue = inputLastName.value;

  const ulEl = document.querySelector("ul");
  if (ulEl) {
    const liEl = document.createElement("li");
    liEl.classList.add("user-list__person");
    ulEl.appendChild(liEl);
    liEl.innerText = inputFirstNameValue + " " + inputLastNameValue;
  }
});
