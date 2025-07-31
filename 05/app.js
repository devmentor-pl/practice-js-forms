const form = document.querySelector("form");
const msgList = document.querySelector("ul");
form.addEventListener("submit", handleSubmit);
const fields = [
  { name: "firstName", label: "Imię", required: true },
  { name: "lastName", label: "Nazwisko", required: true },
  { name: "street", label: "Ulica", required: true },
  {
    name: "houseNumber",
    label: "Numer budynku",
    type: "number",
    required: true,
  },
  { name: "flatNumber", label: "Numer mieszkania", type: "number" },
  {
    name: "zip",
    label: "Kod pocztowy",
    pattern: "^[0-9]{2}-[0-9]{3}$",
    required: true,
  },
  { name: "city", label: "Miejscowość", required: true },
  { name: "voivodeship", label: "Województwo", required: true },
];

function handleSubmit(e) {
  e.preventDefault();

  const errors = [];
  fields.forEach(function (field) {
    const value = form.elements[field.name].value;
    if (field.required) {
      if (value.length === 0) {
        errors.push(`${field.label} is required`);
      }
    }
    if (field.type === "number") {
      if (Number.isNaN(Number(value))) {
        errors.push(`${field.label} must be a number`);
      }
    }

    if (field.pattern) {
      const reg = new RegExp(field.pattern);
      if (!reg.test(value)) {
        errors.push(`${field.label} is not valid`);
      }
    }
  });
  msgList.innerHTML = ""
  if (errors.length === 0) {
    alert("data is valid");
    fields.forEach(function (el) {
      form[el.name].value = "";
    });
  } else {
    showMessage(errors);
  }
}

function showMessage(errors) {
  errors.forEach(function (text) {
    const liMsg = document.createElement("li");
    liMsg.innerText = text;
    msgList.appendChild(liMsg);
    console.log(errors)
  });
}
