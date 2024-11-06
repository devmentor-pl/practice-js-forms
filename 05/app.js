document.addEventListener("DOMContentLoaded", init);

let errors = [];

function init() {
  const formElement = document.querySelector("form");
  const ulElement = document.querySelector(".messages");

  formElement.addEventListener("submit", handleSubmit);

  function handleSubmit(e) {
    e.preventDefault();

    const fields = [
      { name: "firstName", label: "Imię", required: true },
      { name: "lastName", label: "Nazwisko", required: true },
      { name: "street", label: "Ulica", required: true },
      {
        name: "houseNumber",
        label: "Numer domu",
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
        pattern: /^[0-9]{2}-[0-9]{3}$/,
        required: true,
      },
      { name: "city", label: "Miejscowość", required: true },
      { name: "voivodeship", label: "Wojewodztwo", required: true },
    ];

    errors = [];

    fields.forEach(function (field) {
      const value = formElement.elements[field.name].value;

      if (field.required === true) {
        if (value.length === 0) {
          errors.push(`Dane w polu ${field.label} są niepoprawne!`);
        }
      }

      if (field.type === "number") {
        if (Number.isNaN(Number(value))) {
          errors.push(`Dane w polu ${field.label} muszą być liczbą!`);
        }
      }

      if (field.pattern) {
        const reg = new RegExp(field.pattern);
        if (!reg.test(value)) {
          errors.push(`Dane w polu ${field.label} są niepoprawne`);
        }
      }
    });

    ulElement.innerHTML = "";

    if (errors.length === 0) {
      console.log("Dane zostały wysłane!");
    } else {
      errors.forEach(function (item) {
        const liElement = document.createElement("li");
        liElement.innerText = item;
        liElement.style.color = "red";
        ulElement.appendChild(liElement);
      });
    }
  }
}
