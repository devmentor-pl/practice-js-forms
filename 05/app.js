const formElement = document.querySelector("form");
const messagesElement = document.querySelector(".messages");
const firstName = formElement.querySelector("input[name=firstName]");
const lastName = formElement.querySelector("input[name=lastName]");
const street = formElement.querySelector("input[name=street]");
const houseNumber = formElement.querySelector("input[name=houseNumber]");
const flatNumber = formElement.querySelector("input[name=flatNumber]");
const zip = formElement.querySelector("input[name=zip]");
const city = formElement.querySelector("input[name=city]");
const voivodeship = formElement.querySelector("select[name=voivodeship]");

let errors = [];
const fields = [
  {
    element: firstName,
    isRequired: true,
    regexp: false,
    error: "Pole Imię jest wymagane",
  },
  {
    element: lastName,
    isRequired: true,
    regexp: false,
    error: "Pole Nazwisko jest wymagane",
  },
  {
    element: street,
    isRequired: true,
    regexp: false,
    error: "Pole Ulica jest wymagane",
  },
  {
    element: houseNumber,
    isRequired: true,
    regexp: false,
    error: "Pole Numer budunku jest wymagane",
  },
  {
    element: flatNumber,
    isRequired: false,
    regexp: false,
    error: "Pole Numer mieszkania jest wymagane",
  },
  {
    element: zip,
    isRequired: true,
    regexp: /[0-9]{2}-[0-9]{3}/,
    error: "Pole Kod pocztowy jest wymagane",
    errorRegexp: "Niepoprawny format w polu Kod Pocztowy",
  },
  {
    element: city,
    isRequired: true,
    regexp: false,
    error: "Pole Miejscowość jest wymagane",
  },
  {
    element: voivodeship,
    isRequired: true,
    regexp: false,
    error: "Pole Województwo jest wymagane",
  },
];

formElement.addEventListener("submit", function (e) {
  e.preventDefault();
  if (isFormValid()) {
    alert("Formularz wyslany prawidłowo.");
  }
});

function isFormValid() {
  fields.forEach((field) => {
    const { isRequired, regexp, error, errorRegexp, element } = field;
    if (isRequired) {
      if (element.value) {
        removeError(error);
        if (regexp) {
          if (!regexp.test(element.value)) {
            if (!isInArray(errors, errorRegexp)) {
              errors.push(errorRegexp);
            }
          } else {
            removeError(errorRegexp);
          }
        }
      } else {
        if (!isInArray(errors, error)) {
          errors.push(error);
        }
      }
    }
  });
  if (errors.length > 0) {
    renderErrors(errors);
  } else {
    clearInputs(fields);
    messagesElement.innerHTML = "";
    return true;
  }
}

function removeError(message) {
  errors = [...errors.filter((error) => error !== message)];
}
function renderErrors(errors) {
  messagesElement.innerHTML = "";

  errors.forEach((error) => {
    const newLi = document.createElement("li");
    newLi.style.color = "red";
    newLi.textContent = error;
    messagesElement.appendChild(newLi);
  });
}

function isInArray(array = [], text = []) {
  return array.includes(text);
}

function clearInputs(fieldsArray = []) {
  fieldsArray.forEach((field) => (field.element.value = ""));
}
