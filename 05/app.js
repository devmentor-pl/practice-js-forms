const validationRules = {
  firstName: { required: "Proszę podać imię." },
  lastName: { required: "Proszę podać nazwisko." },
  street: { required: "Proszę podać ulicę." },
  houseNumber: {
    required: "Proszę podać numer budynku.",
    number: "Proszę podać numer budynku.",
  },
  zip: {
    required: "Proszę podać kod pocztowy.",
    zip: "Proszę podać kod pocztowy w formacie NN-NNN.",
  },
  city: { required: "Proszę podać miasto." },
  voivodeship: { required: "Proszę podać województwo." },
};

const form = document.querySelector("form");

if (form) {
  form.noValidate = true;

  form.addEventListener("submit", onSubmit);
}

function onSubmit(e) {
  e.preventDefault();

  const form = e.target;
  const errorMessages = [];

  for (const [field, rules] of Object.entries(validationRules)) {
    let validationFailed = false;

    const addValidationError = (errorMessage) => {
      if (!validationFailed) {
        errorMessages.push(errorMessage);
        validationFailed = true;
      }
    };

    for (const [rule, errorMessage] of Object.entries(rules)) {
      switch (rule) {
        case "required":
          if (!isRequiredFieldFilledIn(form.elements[field])) {
            addValidationError(errorMessage);
          }

          break;
        case "number":
          if (!hasFieldANumber(form.elements[field])) {
            addValidationError(errorMessage);
          }

          break;
        case "zip":
          if (!isZipValid(form.elements[field].value)) {
            addValidationError(errorMessage);
          }

          break;
      }
    }
  }

  if (errorMessages.length > 0) {
    showErrorMessages(errorMessages);
  } else {
    alert("Formularz został wysłany.");
  }
}

function isRequiredFieldFilledIn(field) {
  if (typeof field !== "undefined") {
    return field.value.trim().length > 0;
  }

  return false;
}

function hasFieldANumber(field) {
  if (typeof field !== "undefined") {
    return !isNaN(field.valueAsNumber);
  }

  return false;
}

function isZipValid(zip) {
  return /^[0-9]{2}-[0-9]{3}$/.test(zip);
}

function showErrorMessages(errorMessages) {
  const messagesList = document.querySelector(".messages");

  if (messagesList) {
    messagesList.innerHTML = "";

    errorMessages.forEach((message) => {
      messagesList.appendChild(createErrorListItemElement(message));
    });
  }
}

function createErrorListItemElement(errorMessage) {
  const li = document.createElement("li");
  li.innerText = errorMessage;

  return li;
}
