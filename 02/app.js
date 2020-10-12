const form = document.querySelector("form");

const isFormFieldDefined = (field) => {
  return typeof field !== "undefined";
};

const isEmailValid = (email) => {
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailRe.test(email);
};

const isPasswordValid = (password) => {
  const minPasswordLength = 6;

  return password.trim().length > minPasswordLength;
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

  const loginElem = form.elements.login;

  if (!isFormFieldDefined(loginElem) || !isEmailValid(loginElem.value)) {
    errors.push(loginLabelSelector);
  }

  const passwordElem = form.elements.pass1;

  if (
    !isFormFieldDefined(passwordElem) ||
    !isPasswordValid(passwordElem.value)
  ) {
    errors.push(passwordLabelSelector);
  }

  const confirmPasswordElem = form.elements.pass2;

  if (
    !isFormFieldDefined(confirmPasswordElem) ||
    !isPasswordValid(confirmPasswordElem.value)
  ) {
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
