const registerForm = document.querySelector("form");
registerForm.noValidate = true;

const checkForm = function (e) {
  e.preventDefault();

  const emailInput = e.target.elements.login;
  const passwordInput = e.target.elements["pass1"];
  const passwordConfirmInput = e.target.elements["pass2"];
  const acceptCheckbox = e.target.elements["accept"];

  const errors = [];

  if (!emailInput.value.includes("@")) {
    emailInput.previousElementSibling.style.color = "red";
    errors.push(emailInput);
    console.log(emailInput);
  }

  if (passwordInput.value !== passwordConfirmInput.value) {
    passwordInput.previousElementSibling.style.color = "red";
    passwordConfirmInput.previousElementSibling.style.color = "red";
    errors.push(e.target);
    console.log(passwordInput, passwordConfirmInput);
  }

  if (
    passwordInput.value.length <= 6 &&
    passwordConfirmInput.value.length <= 6
  ) {
    passwordInput.previousElementSibling.style.color = "red";
    passwordConfirmInput.previousElementSibling.style.color = "red";
    errors.push(e.target);
    console.log(passwordInput, passwordConfirmInput);
  }

  if (!acceptCheckbox.checked) {
    acceptCheckbox.previousElementSibling.style.color = "red";
    errors.push(e.target);
    console.log(acceptCheckbox);
  }

  if (errors.length > 0) {
    e.preventDefault();
    errors.forEach(function (item) {
      console.log(item);
    });
  } else {
    emailInput.previousElementSibling.style.color = "black";
    passwordInput.previousElementSibling.style.color = "black";
    passwordConfirmInput.previousElementSibling.style.color = "black";
    acceptCheckbox.previousElementSibling.style.color = "black";
    console.log("done!");
  }
};

registerForm.addEventListener("submit", checkForm);
