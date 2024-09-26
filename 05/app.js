const formEl = document.querySelector("form");
formEl.noValidate = true;
const ulElement = document.querySelector(".messages");

const fileds = [
  {
    name: "firstName",
    label: "Imię",
    required: true,
    pattern: "^[a-zA-Z –-]+$",
  },
  {
    name: "lastName",
    label: " Nazwisko",
    required: true,
    pattern: "^[a-zA-Z –-]+$",
  },
  { name: "street", label: "Ulica", required: true, pattern: "^[a-zA-Z –-]+$" },
  {
    name: "houseNumber",
    label: " Numer budunku",
    type: "number",
    required: true,
  },
  {
    name: "flatNumber",
    label: "Numer mieszkania",
    type: "number",
    required: true,
  },
  {
    name: "zip",
    label: "Kod pocztowy",
    pattern: "[0-9]{2}-[0-9]{3}",
    required: true,
  },
  { name: "city", label: "Miasto", required: true },
  { name: "voivodeship", label: "Województwo", required: true },
];

formEl.addEventListener("submit", formValidate);

function formValidate(e) {
  e.preventDefault();
  errors = [];

  fileds.forEach(function (field) {
    const value = formEl.elements[field.name].value;

    if (field.required) {
      if (value.length === 0) {
        errors.push("Dane w polu " + field.label + " są wymagane.");
      }
    }
    if (field.type === "number") {
      if (Number.isNaN(Number(value))) {
        errors.push("Dane w polu " + field.label + " muszą byc liczbą.");
      }
    }
    if (field.pattern) {
      const reg = new RegExp(field.pattern);
      if (!reg.test(value)) {
        errors.push(
          "Dane w polu " +
            field.label +
            " nie są poprawne. Uzyj wzoru zgodnegoz z przyjętym w Polsce"
        );
      }
    }
  });

  ulElement.innerHTML = "";
  if (errors.length === 0) {
    alert("Dane zostały wypełnione prawidłowo!");

    // czyszczę pola po prawidłowym wypełnieniu formularza
    fields.forEach(function (el) {
      formEl[el.name].value = "";
    });
  } else {
    errors.forEach(function (text) {
      const liEl = document.createElement("li");
      liEl.innerText = text;
      ulElement.appendChild(liEl);
    });
  }
}

/*function formValidate(e) {
  e.preventDefault();
  const firstName = formEl.elements["firstName"].value;
  const lastName = formEl.elements["lastName"].value;
  const street = formEl.elements["street"].value;
  const city = formEl.elements["city"].value;

  errors = [];

  if (firstName.length === 0) {
    errors.push("Imię: to pole jest obowiązkowe");
  }
  if (lastName.length === 0) {
    errors.push("Nazwisko: to pole jest obowiązkowe");
  }
  if (street.length === 0) {
    errors.push("Ulica: to pole jest obowiązkowe");
  }

  if (city.length === 0) {
    errors.push("Miasto: wprowadź nazwę miasta");
  } else alert("Dane zostały wysłane");

  if (errors.length > 0) {
    ulElement.innerText = "";

    errors.forEach(function (err) {
      const liElement = document.createElement("li");
      liElement.innerText = err;
      ulElement.appendChild(liElement);
    });
  }
}*/
