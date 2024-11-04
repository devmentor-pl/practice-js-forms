const formElement = document.querySelector("form");
const loginInput = formElement.querySelector("#formLogin");
const passwordInput = formElement.querySelector("#formPass1");
const confirmPasswordInput = formElement.querySelector("#formPass2");
const acceptRegulationsCheckbox = formElement.querySelector("#formAccept");

const emailRegexp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
let errors = [];

formElement.addEventListener("submit", (e) => {
  e.preventDefault();
  validateForm();
});

function validateForm() {
  const loginInputLabel = loginInput.previousElementSibling;
  const passwordInputLabel = passwordInput.previousElementSibling;
  const confirmPasswordInputLabel = confirmPasswordInput.previousElementSibling;
  const acceptRegulationsCheckboxLabel =
    acceptRegulationsCheckbox.previousElementSibling;
  if (!isEmailCorrect(loginInput.value)) {
    errors.push(loginInputLabel);
  } else {
    removeError(loginInputLabel);
  }
  if (!isPasswordValid(passwordInput.value)) {
    errors.push(passwordInputLabel);
  } else {
    removeError(passwordInputLabel);
  }
  if (!isPasswordsEqual(passwordInput.value, confirmPasswordInput.value)) {
    errors.push(confirmPasswordInputLabel);
  } else {
    removeError(confirmPasswordInputLabel);
  }
  if (!isAccepted(acceptRegulationsCheckbox)) {
    errors.push(acceptRegulationsCheckboxLabel);
  } else {
    removeError(acceptRegulationsCheckboxLabel);
  }

  errors.length > 0 ? displayErrors(errors) : console.log("done");
}

function isEmailCorrect(email = "") {
  return emailRegexp.test(email);
}
function isPasswordValid(password = "") {
  return password.length >= 6 ? true : false;
}
function isPasswordsEqual(pass1 = "", pass2 = "") {
  return pass1 === pass2 ? true : false;
}
function isAccepted(checkboxElement) {
  return checkboxElement.checked;
}
function displayErrors(errors = []) {
  errors.forEach((error) => {
    error.style.color = "red";
  });
}
function removeError(errorElement) {
  errors = errors.filter((error) => error !== errorElement);
  errorElement.style.color = "inherit";
}
