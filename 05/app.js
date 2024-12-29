const form = document.querySelector("form");

if (form) {
  // Turn off HTML validation
  form.noValidate = true;

  form.addEventListener("submit", handleSubmit);
}

function handleSubmit(e) {
  e.preventDefault();
  const formData = Object.fromEntries(new FormData(e.target));

  const errors = [];

  // Validation process
  Object.keys(formData).forEach((field) => {
    const fieldValidation = validations[field](formData[field]);

    if (!fieldValidation.valid) {
      errors.push(fieldValidation.message);
    }
  });

  if (errors.length === 0) {
    renderFormSuccess(form);
  } else {
    renderFormErrors(errors);
  }
}

// Validation helpers
const fieldRequiredMessage = (fieldName) => `${fieldName} field is required`;

const validateRequiredField = (value) => !!value.trim();

const validateSelectField = (value) => {
  const selectInput = document.querySelector("select");

  if (selectInput) {
    const optionsList = selectInput.querySelectorAll("option");
    const filteredOptionList = Array.from(optionsList)
      .map((option) => option.value)
      .filter((value) => !!value.trim());

    return filteredOptionList.includes(value);
  }

  return false;
};

// Validation nethods for each input names
const validations = {
  firstName: (value) => {
    return {
      valid: validateRequiredField(value),
      message: fieldRequiredMessage("First name"),
    };
  },
  lastName: (value) => {
    return {
      valid: validateRequiredField(value),
      message: fieldRequiredMessage("Last name"),
    };
  },
  street: (value) => {
    return {
      valid: validateRequiredField(value),
      message: fieldRequiredMessage("Street"),
    };
  },
  houseNumber: (value) => {
    return {
      valid: !isNaN(value) && value > 0,
      message: "House number must be a number greater than 0",
    };
  },
  flatNumber: (value) => {
    return {
      valid: !value.trim() || (!isNaN(value) && value > 0),
      message: "Flat number must be a number greater than 0",
    };
  },
  zip: (value) => {
    const pattern = /^[0-9]{2}-[0-9]{3}$/;
    return { valid: pattern.test(value), message: "Provide correct zip code" };
  },
  city: (value) => {
    return {
      valid: validateRequiredField(value),
      message: fieldRequiredMessage("Street"),
    };
  },
  voivodeship: (value) => {
    return {
      valid: validateSelectField(value),
      message: fieldRequiredMessage("Voivodeship"),
    };
  },
};

function renderFormErrors(errors) {
  const listEl = document.querySelector(".messages");
  if (listEl) {
    listEl.innerHTML = "";

    errors.forEach((error) => {
      const itemEl = document.createElement("li");
      itemEl.textContent = error;

      listEl.appendChild(itemEl);
    });
  }
}

function renderFormSuccess(formEl) {
  const listEl = document.querySelector(".messages");

  if (listEl) {
    listEl.innerHTML = "";
  }

  alert("The form was sent successfully");
  formEl.reset();
}
