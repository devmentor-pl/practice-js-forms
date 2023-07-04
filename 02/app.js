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
  },
  accept: {
    validation: validateCheckbox,
    errorMsg: "regulations must be accepted",
  },
};

function handleSubmit(e) {
  const errors = [];
  const self = e.target;
  const inputs = self.elements;
  checkInputs(inputs, validations, errors);

  checkErrors(e, errors);
  // skoro jest formularz wysłany, czy powinienem czyścić inputy?
}

function checkInputs(inputs, validations, errorArr) {
  for (const element of inputs) {
    const keys = Object.keys(validations);
    if (keys.includes(element.name)) {
      // nie wiem jak zrobić to zgrabniej
      // problem z tym, że pass2 musi mieć dwa argumenty
      // może przekazywać argumenty w obiekcie?
      let isElValid;
      if (element.name === "pass2") {
        isElValid = validations[element.name].validation(element, inputs.pass1);
      } else {
        isElValid = validations[element.name].validation(element);
      }

      if (!isElValid) {
        errorArr.push({
          element,
          errorMsg: validations[element.name].errorMsg,
        });
        // wydaje mi się, że zmiana styli również nie powinna być w tym miejscu
        element.previousElementSibling.style.color = "red";
      } else {
        element.previousElementSibling.style.color = "black";
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
    console.log("done");
  }
}
