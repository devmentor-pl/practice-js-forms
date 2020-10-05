const form = document.querySelector("form");

const isEmailValid = (form) => {
  const loginElem = form.elements.login;

  if (typeof loginElem !== "undefined") {
    const email = loginElem.value;
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailRe.test(email);
  }

  return false;
};

const isPasswordValid = (passwordElem) => {
  if (typeof passwordElem !== "undefined") {
    const minPasswordLength = 6;
    const password = passwordElem.value.trim();

    return password.length > minPasswordLength;
  }

  return false;
};

const arePasswordsTheSame = (passwordElem, confirmPasswordElem) => {
  if (
    typeof passwordElem !== "undefined" &&
    typeof confirmPasswordElem !== "undefined"
  ) {
    return passwordElem.value === confirmPasswordElem.value;
  }

  return false;
};

const regulationsAccepted = (form) => {
  const acceptElem = form.elements.accept;

  if (typeof acceptElem !== "undefined") {
    return acceptElem.checked;
  }

  return false;
};

const clearErrors = (form) => {
  const labels = form.querySelectorAll("label");

  labels.forEach((label) => {
    label.classList.remove("has-error");
  });
};

const onSubmit = (e) => {
  e.preventDefault();

  const errors = [];
  const form = e.target;
  const loginLabelSelector = "label[for='formLogin']";
  const passwordLabelSelector = "label[for='formPass1']";
  const confirmPasswordLabelSelector = "label[for='formPass2']";
  const acceptLabelSelector = "label[for='formAccept']";
  const errorClass = "has-error";

  if (!isEmailValid(form)) {
    errors.push(loginLabelSelector);
  }

  const passwordElem = form.elements.pass1;

  if (!isPasswordValid(passwordElem)) {
    errors.push(passwordLabelSelector);
  }

  const confirmPasswordElem = form.elements.pass2;

  if (!isPasswordValid(confirmPasswordElem)) {
    errors.push(confirmPasswordLabelSelector);
  }

  if (!arePasswordsTheSame(passwordElem, confirmPasswordElem)) {
    errors.push(passwordLabelSelector);
    errors.push(confirmPasswordLabelSelector);
  }

  if (!regulationsAccepted(form)) {
    errors.push(acceptLabelSelector);
  }

  clearErrors(form);

  if (errors.length === 0) {
    console.log("done");
  } else {
    errors.forEach((selector) => {
      const elem = document.querySelector(selector);

      if (elem) {
        elem.classList.add(errorClass);
      }
    });
  }
};

if (form) {
  form.addEventListener("submit", onSubmit);
}
