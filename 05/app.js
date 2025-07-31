const fields = [
  {
    name: "firstName",
    label: "Imię",
    required: true,
    minLength: 3,
    clear: true,
  },
  {
    name: "lastName",
    label: "Nazwisko",
    required: true,
    minLength: 3,
    clear: true,
  },
  {
    name: "street",
    label: "Street",
    required: true,
    minLength: 3,
    clear: true,
  },
  {
    name: "houseNumber",
    label: "Numer budynku",
    type: "number",
    required: true,
    clear: true,
  },
  {
    name: "flatNumber",
    label: "Numer mieszkania",
    type: "number",
    clear: true,
  },
  {
    name: "zip",
    label: "Kod pocztowy",
    pattern: "[0-9]{2}-[0-9]{3}",
    required: true,
    clear: true,
  },
  {
    name: "city",
    label: "Miejscowość",
    required: true,
    minLength: 3,
    clear: true,
  },
  {
    name: "voivodeship",
    label: "Województwo",
    required: true,
  },
];

const form = document.querySelector("form");

if (form) {
  // Turn off HTML validation
  form.noValidate = true;
  form.addEventListener("submit", handleSubmit);
}

function handleSubmit(e) {
  e.preventDefault();

  const errors = [];

  fields.forEach((field) => {
    const {
      name,
      label,
      type = "text",
      required = false,
      pattern = null,
      minLength,
    } = field;
    const value = form.elements[name].value.trim();

    if (required) {
      if (value.length === 0) {
        errors.push("Dane w polu " + label + " są wymagane.");
      }
    }

    if (minLength) {
      if (value.length < minLength) {
        errors.push(
          "Dane w polu " +
            label +
            " musza zawierać " +
            minLength +
            " lub więcej znaków"
        );
      }
    }

    if (type === "number") {
      if (Number.isNaN(Number(value))) {
        errors.push("Dane w polu " + label + " muszą być liczbą.");
      }
    }

    if (pattern) {
      const reg = new RegExp(pattern);
      if (!reg.test(value)) {
        errors.push("Dane w polu " + label + " posiadają nieprawidłowe znaki.");
      }
    }
  });

  if (errors.length === 0) {
    clearInputs([...form.elements]);
    renderFormSuccess(form);
  } else {
    renderFormErrors(errors);
  }
}

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

function renderFormSuccess() {
  const listEl = document.querySelector(".messages");

  if (listEl) {
    listEl.innerHTML = "";
  }

  alert("The form was sent successfully");
}

function clearInputs(inputs) {
  const fieldNamesToClear = fields
    .filter((field) => !!field.clear)
    .map((field) => field.name);

  inputs.forEach((element) => {
    if (fieldNamesToClear.includes(element.name)) element.value = "";
  });
}
