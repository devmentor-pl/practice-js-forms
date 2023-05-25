const form = document.querySelector("form");
const firstName = form.querySelector('input[name="firstName"]');
const lastName = form.querySelector('input[name="lastName"]');
const street = form.querySelector('input[name="street"]');
const houseNumber = form.querySelector('input[name="houseNumber"]');
const flatNumber = form.querySelector('input[name="flatNumber"]');
const zip = form.querySelector('input[name="zip"]');
const city = form.querySelector('input[name="city"]');
const voivodeship = form.querySelector('select[name="voivodeship"]');
form.noValidate = true;
const formInputs = form.elements;
const arr = Array.from(formInputs);
//remove button from array
arr.pop();
//remove apartment number from array
arr.splice(4, 1);
console.log(arr);
let errors = [];

form.addEventListener("submit", checkInputs);

function checkInputs(e) {
  e.preventDefault();
  deleteErrorStyling(errors);
  errors = [];
  if (!isInputEmpty(firstName) && isInputText(firstName.value)) {
    styleSuccess(firstName);
  } else {
    errors.push(firstName);
  }
  if (!isInputEmpty(lastName) && isInputText(lastName.value)) {
    styleSuccess(lastName);
  } else {
    errors.push(lastName);
  }
  if (!isInputEmpty(street) && isStreetNameValid(street.value)) {
    styleSuccess(street);
  } else {
    errors.push(street);
  }
  if (isInputNumber(houseNumber.value)) {
    styleSuccess(houseNumber);
  } else {
    errors.push(houseNumber);
  }
  if (!isInputEmpty(flatNumber.value) && isInputNumber(flatNumber.value)) {
    styleSuccess(flatNumber);
  } else if (!isInputEmpty(flatNumber) && !isInputNumber(flatNumber.value)) {
    errors.push(flatNumber);
  }
  if (isPostalCodeValid(zip.value)) {
    styleSuccess(zip);
  } else {
    errors.push(zip);
  }
  if (!isInputEmpty(city) && isInputText(city.value)) {
    styleSuccess(city);
  } else {
    errors.push(city);
  }
  //nie wiem dlaczego ten if nie działa
  if (!isInputEmpty(voivodeship.value)) {
    styleSuccess(voivodeship);
  } else {
    errors.push(voivodeship);
  }
  if (errors.length > 0) {
    styleErrors(errors);
  }
}

// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   //clear all errors sent previously
//   deleteErrorStyling(errors);
//   errors = [];
//   for (const input of arr) {
//     // console.log(`is input ${input.value}`, isInputText(input));
//     if (isRequired(input) && isInputEmpty(input)) {
//       errors.push(input);
//     } else if (
//       isRequired(input) &&
//       !(
//         !isFlatNumberValid(input) ||
//         !isInputText(input) ||
//         !isPostalCodeValid(input)
//       )
//     ) {
//       errors.push(input);
//     } else {
//       styleSuccess(input);
//     }
//   }
//   styleErrors(errors);
// });

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

// function isFlatNumberValid(input) {
//   const regex = /^\d+[a-zA-Z]?$/;
//   const result = regex.test(input.value);
//   return result;
// }

function isPostalCodeValid(input) {
  const regex = /^[0-9]{2}-[0-9]{3}$/;
  const result = regex.test(input.value);
  return result;
}
function isStreetNameValid(input) {
  const regex = /^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ\s\d]+$/;
  const result = regex.test(input.value);
  return result;
}
