const formEl = document.querySelector("form");
formEl.noValidate = true;
const ulElement = document.querySelector(".messages");

formEl.addEventListener("submit", formValidate);

function formValidate(e) {
  e.preventDefault();
  const firstName = formEl.elements["firstName"].value;
  const lastName = formEl.elements["lastName"].value;
  const street = formEl.elements["street"].value;
  const city = formEl.elements["city"].value;

  errors = [];

  if (firstName.length === 0) {
    errors.push("Imię: to pole jest obowiązkowe");
  }
  if (lastName.length === 0) {
    errors.push("Nazwisko: to pole jest obowiązkowe");
  }
  if (street.length === 0) {
    errors.push("Ulica: to pole jest obowiązkowe");
  }

  if (city.length === 0) {
    errors.push("Miasto: wprowadź nazwę miasta");
  }

  if (errors.length > 0) {
    errors.forEach(function (err) {
      const liElement = document.createElement("li");
      ulElement.appendChild(liElement);
      liElement.innerText = err;
    });
  } else alert("Dane zostały wysłane");
}
