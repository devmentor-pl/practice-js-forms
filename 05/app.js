const form = document.querySelector("form");
const firstName = document.querySelector('input[name="firstName"]');
form.noValidate = true;
const formInputs = form.elements;
const errors = [];

form.addEventListener("submit", function (e) {
  e.preventDefault();
  for (const input of formInputs) {
    if (isRequired(input) && isInputEmpty(input)) {
      errors.push(input);
    }
  }
  errors.forEach((error) => {
    error.setAttribute("style", "border: 1px solid red;");
    // error.classList.add("error");
  });
});

function isRequired(input) {
  return input.required;
}

function isInputEmpty(input) {
  return input.textContent === "";
}
