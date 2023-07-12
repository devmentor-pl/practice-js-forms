const formEl = document.querySelector("form");
const PASSWORD_LENGTH = 4;

const regexEmail =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

formEl.addEventListener("submit", handleSubmit);

const validations = {
  login: { validation: validateEmail, errorMsg: "Email is not valid" },
  pass1: {
    validation: checkPassword,
    errorMsg: `password must have ${PASSWORD_LENGTH} characters or more`,
  },
  pass2: {
    validation: checkMatchingPasswords,
    errorMsg: "passwords do not match",
    compareWith: "pass1",
  },
  accept: {
    validation: validateCheckbox,
    errorMsg: "regulations must be accepted",
  },
};

function handleSubmit(e) {
  e.preventDefault();
  const errors = [];
  const self = e.target;
  const inputs = self.elements;
  checkInputs(inputs, validations, errors);

  printErrors(errors, inputs);
  checkErrors(e, errors, inputs);
}

function checkInputs(inputs, validations, errorArr) {
  for (const element of inputs) {
    const keys = Object.keys(validations);
    if (keys.includes(element.name)) {
      const inputName = element.name;
      const hasCompareKey = "compareWith" in validations[inputName];
      let isElValid;

      if (hasCompareKey) {
        const validationObj = validations[inputName];
        const elToCompare = inputs[validationObj.compareWith];
        isElValid = validations[inputName].validation(element, elToCompare);
      } else {
        isElValid = validations[inputName].validation(element);
      }

      if (!isElValid) {
        errorArr.push({
          element,
          errorMsg: validations[element.name].errorMsg,
        });
      }
    }
  }
}

function validateEmail(emailInputEl) {
  const isValidEmail = regexEmail.test(emailInputEl.value);
  return isValidEmail;
}

function checkPassword(password) {
  const isString = typeof password.value === "string";
  if (!isString) throw new Error("not string type");

  const isValidPassLength = password.value.length > PASSWORD_LENGTH;
  return isValidPassLength;
}

function checkMatchingPasswords(pass2InputEl, pass1InputEl) {
  const isPass2ValidLength = checkPassword(pass2InputEl);
  const doesPassMatch = pass1InputEl.value === pass2InputEl.value;
  const isPass2Valid = isPass2ValidLength && doesPassMatch;
  return isPass2Valid;
}

function validateCheckbox(checkboxInputEl) {
  const isCheckbox = checkboxInputEl.type === "checkbox";
  if (!isCheckbox) throw new Error("input should be of type checkbox");

  const isChecked = checkboxInputEl.checked;
  return isChecked;
}

function checkErrors(e, errorsArr) {
  const isArray = Array.isArray(errorsArr);
  if (!isArray) throw new Error("not an array type");

  const clear = errorsArr.length === 0;
  if (!clear) {
    e.preventDefault();

    return;
  } else {
    alert("formularz został wsłany");
  }
}

function printErrors(errorsArr, inputs) {
  const isArray = Array.isArray(errorsArr);
  if (!isArray) throw new Error("not an array type");

  [...inputs].forEach((input) => {
    if (input.type !== "submit") {
      input.previousElementSibling.style.color = "green";
    }
  });

  errorsArr.forEach((error) => {
    error.element.previousElementSibling.style.color = "red";
  });
}
