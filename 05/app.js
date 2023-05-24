const form = document.querySelector("form");
const firstName = form.querySelector('input[name="firstName"]');
form.noValidate = true;
const formInputs = form.elements;
// formInputs.pop();
let errors = [];

form.addEventListener("submit", function (e) {
  e.preventDefault();
  //clear all errors sent previously
  deleteErrorStyling(errors);
  errors = [];
  for (const input of formInputs) {
    // console.log(`is input ${input.value}`, isInputText(input));
    if (isRequired(input) && isInputEmpty(input)) {
      errors.push(input);
    } else if (
      isRequired(input) &&
      !(
        !isInputNumber(input) ||
        !isInputText(input) ||
        !isPostalCodeValid(input)
      )
    ) {
      errors.push(input);
    } else {
      styleSuccess(input);
    }
  }
  styleErrors(errors);
});

function styleErrors(errors) {
  for (const error of errors) {
    if (error.type !== "submit") {
      error.setAttribute("style", "border: 1px solid red;");
      // error.classList.add("error");
    }
  }
}

function styleSuccess(input) {
  input.setAttribute("style", "border: 1px solid green;");
  // error.classList.add("error");
}

function deleteErrorStyling(errors) {
  for (const error of errors) {
    error.setAttribute("style", "");
    // error.classList.remove("error");
  }
}

function isRequired(input) {
  return input.required;
}

function isInputEmpty(input) {
  return input.value === "";
}

function isInputText(input) {
  const regex = /^[a-zA-Z]{3,}$/;
  const result = regex.test(input.value);
  return result;
}

function isInputNumber(input) {
  const regex = /^[0-9]{1,}$/;
  const result = regex.test(input.value);
  return result;
}

function isPostalCodeValid(input) {
  const regex = /^[0-9]{2}-[0-9]{3}$/;
  const result = regex.test(input.value);
  return result;
}
