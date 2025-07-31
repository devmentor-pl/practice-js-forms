const formEl = document.querySelector("form");
const errorListEl = document.querySelector(".messages");

const fields = [
  {
    name: "firstName",
    label: "Imię",
    required: true,
    pattern: "^[a-zA-Z –-]+$",
  },
  {
    name: "lastName",
    label: "Nazwisko",
    required: true,
    pattern: "^[a-zA-Z –-]+$",
  },
  {
    name: "street",
    label: "Ulica",
    required: true,
    pattern: "^[a-zA-Z –-]+$",
  },
  {
    name: "houseNumber",
    label: "Number budynku",
    required: true,
    type: "number",
  },
  {
    name: "flatNumber",
    label: "Number mieszkania",
    type: "number",
  },
  {
    name: "zip",
    label: "Kod pocztowy",
    required: true,
    pattern: "[0-9]{2}-[0-9]{3}",
  },
  {
    name: "city",
    label: "Miejscowość",
    required: true,
    pattern: "^[a-zA-Z –-]+$",
  },
  {
    name: "voivodeship",
    label: "Województwo",
    required: true,
  },
];

if (formEl) formEl.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  const errors = [];

  fields.forEach((field) => {
    const {
      name,
      label,
      required = false,
      type = "text",
      pattern = null,
    } = field;

    const value = formEl.elements[name].value;
    if (required) {
      if (value.length === 0) {
        errors.push(`Dane w polu ${label} są wymagane.`);
      }
    }

    if (type === "number") {
      if (Number.isNaN(Number(value))) {
        errors.push(`Dane w polu ${label} muszą być liczbą`);
      }
    }

    if (pattern) {
      const reg = new RegExp(pattern);
      if (!reg.test(value)) {
        errors.push(
          `Dane w polu ${label} zwierają niedozwoloe znaki lub nie są zgodne z przyjętym w Polsce wzorem`
        );
      }
    }
  });

  errorListEl.innerHTML = "";
  if (errors.length === 0) {
    alert("Dane zostały wypełnione prawidłowo");
    Array.from(formEl.elements).forEach((el) => (el.value = ""));
  } else {
    e.preventDefault();
    errors.forEach((errorMsg) => {
      console.log(errorMsg);
      const newLi = createErrorListItem(errorMsg);
      errorListEl.appendChild(newLi);
    });
  }
}

function createErrorListItem(text) {
  const liEl = document.createElement("li");
  liEl.innerText = text;
  return liEl;
}
