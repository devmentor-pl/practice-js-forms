const fields = [
  {
    name: "firstName",
    label: "Imię",
    required: true,
    pattern: "[a-zA-ZąĄćĆęĘłŁńŃóÓśŚźŹżŻ -]",
  },
  {
    name: "lastName",
    label: "Nazwisko",
    required: true,
    pattern: "[a-zA-ZąĄćĆęĘłŁńŃóÓśŚźŹżŻ -]",
  },
  {
    name: "street",
    label: "Ulica",
    required: true,
    pattern: "[a-zA-ZąĄćĆęĘłŁńŃóÓśŚźŹżŻ -]",
  },
  {
    name: "houseNumber",
    label: "Numer budynku",
    type: "number",
    required: true,
    pattern: "[1-9 -/]",
  },
  {
    name: "flatNumber",
    label: "Numer mieszkania",
    type: "number",
    required: true,
    pattern: "[1-9 -/]",
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
    pattern: "[a-zA-ZąĄćĆęĘłŁńŃóÓśŚźŹżŻ -]",
  },
  {
    name: "voivodeship",
    label: "Województwo",
    required: true,
    pattern: "[a-zA-ZąĄćĆęĘłŁńŃóÓśŚźŹżŻ -]",
  },
];

const formEl = document.querySelector("form");
formEl.setAttribute("novalidate", true);
const ulEl = document.querySelector("ul");

if (formEl) {
  formEl.addEventListener("submit", handleSubmit);
}

function handleSubmit(e) {
  e.preventDefault();

  const errors = [];
  ulEl.innerHTML = "";

  fields.forEach(function (field) {
    const value = formEl.elements[field.name].value;

    if (field.required) {
      if (value.length === 0) {
        errors.push(`Dane z pola ${field.label} nie mogą byc puste`);
      }
    }

    if (field.type === "number") {
      if (Number.isNaN(Number(value))) {
        errors.push(`Dane z pola ${field.label} muszą byc liczbą`);
      }
    }

    if (field.pattern) {
      const reg = new RegExp(field.pattern);
      if (!reg.test(value)) {
        errors.push(
          `Dane z pola ${field.label} zawierają niedozwolone znaki lub nie są zgodne z przyjętym w Polsce wzorem.`
        );
      }
    }
  });
  handleError(errors);
}

function handleError(errors) {
  if (errors.length === 0) {
    alert("Dane zostały wypełnione prawidłowo");
    // Array.from(formEl.elements).forEach(function (el) {
    //   el.value = "";
    // });
    formEl.reset();
  } else {
    showErrorMessage(errors);
  }
}

function showErrorMessage(errors) {
  errors.forEach(function (error) {
    const newLi = document.createElement("li");
    newLi.innerText = error;
    newLi.style.color = "red";
    ulEl.appendChild(newLi);
  });
}
