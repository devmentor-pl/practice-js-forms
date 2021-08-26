const form = document.querySelector("form");
form.noValidate = true;

const firstName = form.querySelector('[name="firstName"]');
const lastName = form.querySelector('[name="lastName"]');
const street = form.querySelector('[name="street"]');
const houseNumber = form.querySelector('[name="houseNumber"]');
const flatNumber = form.querySelector('[name="flatNumber"]');
const zip = form.querySelector('[name="zip"]');
const city = form.querySelector('[name="city"]');
const voivodeship = form.querySelector('[name="voivodeship"]');
const messages = form.querySelector(".messages");

form.addEventListener("submit", validate);

function validate(e) {
  e.preventDefault();
  const errors = [];

  validateFirstName(errors);
  validateLastName(errors);
  validateStreet(errors);
  validateHouseNumber(errors);
  validateFlatNumber(errors);
  validateZip(errors);
  validateCity(errors);
  validateVoivodeship(errors);

  messages.innerHTML = "";

  if (errors.length > 0) {
    renderErrors(errors);
  } else {
    renderValidMessage();
  }
}

function validateVoivodeship(errors) {
  if (voivodeship.value === "") {
    errors.push("Please select your voivodeship");
  }
}

function validateCity(errors) {
  if (city.value.length === 0) {
    errors.push("Please input your city");
  }
}

function validateZip(errors) {
  const zipRegex = /[0-9]{2}-[0-9]{3}/;

  if (zip.value.length === 0) {
    errors.push("Please input your zip code");
  } else if (!zipRegex.test(zip.value)) {
    errors.push("Please input correct zip code");
  }
}

function validateFlatNumber(errors) {
  if (flatNumber.value.length > 0 && flatNumber.value < 1) {
    errors.push("Please, input correct flat number");
  }
}

function validateHouseNumber(errors) {
  if (houseNumber.value.length === 0) {
    errors.push("Please, input your house number");
  } else if (houseNumber.value < 1) {
    errors.push("Please, input correct house number");
  }
}

function validateStreet(errors) {
  if (street.value.length === 0) {
    errors.push("Please, input your street");
  }
}

function validateLastName(errors) {
  if (lastName.value.length === 0) {
    errors.push("Please input your last name");
  }
}

function validateFirstName(errors) {
  if (firstName.value.length === 0) {
    errors.push("Please, input your first name");
  }
}

function renderErrors(errors) {
  errors.forEach(function (error) {
    const li = document.createElement("li");
    li.textContent = error;
    messages.appendChild(li);
  });
}

function renderValidMessage() {
  const li = document.createElement("li");
  li.textContent = "all data is valid!";
  messages.appendChild(li);
}
