const registerForm = document.querySelector("form");
registerForm.noValidate = true;

const checkForm = function (e) {
  e.preventDefault();

  const emailInput = e.target.elements.login;
  const passwordInput = e.target.elements["pass1"];
  const passwordConfirmInput = e.target.elements["pass2"];
  const acceptCheckbox = e.target.elements["accept"];

  let errors = [];
  // email
  if (!emailInput.value.includes("@")) {
    errors.push(emailInput);
  }
  if (emailInput.value.includes("@")) {
    emailInput.previousElementSibling.style.color = "black";
  }
  // passwords
  if (passwordInput.value !== passwordConfirmInput.value) {
    errors.push(passwordInput, passwordConfirmInput);
  }
  if (passwordInput.value === passwordConfirmInput.value) {
    passwordInput.previousElementSibling.style.color = "black";
    passwordConfirmInput.previousElementSibling.style.color = "black";
  }

  if (
    passwordInput.value.length <= 6 &&
    passwordConfirmInput.value.length <= 6
  ) {
    errors.push(passwordInput, passwordConfirmInput);
  }
  if (
    passwordInput.value.length <= 6 &&
    passwordConfirmInput.value.length <= 6
  ) {
    passwordInput.previousElementSibling.style.color = "black";
    passwordConfirmInput.previousElementSibling.style.color = "black";
  }
  // accept regulations
  if (!acceptCheckbox.checked) {
    errors.push(acceptCheckbox);
  }
  if (acceptCheckbox.checked) {
    acceptCheckbox.previousElementSibling.style.color = "black";
  }

  if (errors.length > 0) {
    e.preventDefault();

    errors.forEach(function (item, index) {
      const label = item.previousElementSibling;
      label.style.color = "red";
      console.log(label);
    });
  }
  // if it's ok
  else {
    console.log("done!");
  }
};

registerForm.addEventListener("submit", checkForm);
