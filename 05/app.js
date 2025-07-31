document.addEventListener("DOMContentLoaded", init);

function init() {
  console.log("DOM");
  const formEl = document.querySelector("form");
  const ulElement = formEl.querySelector(".messages");

  if (formEl) {
    formEl.addEventListener("submit", handleSubmit);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const firstNameEl = formEl.elements.firstName;
    const lastNameEl = formEl.elements.lastName;
    const streetNameEl = formEl.elements.street;
    const houseNumberEl = formEl.elements.houseNumber;
    const flatNumberEl = formEl.elements.flatNumber;
    const zipEl = formEl.elements.zip;
    const cityEl = formEl.elements.city;
    const voivodeshipEl = formEl.elements.voivodeship;

    const errors = [];

    function validateEmptyField(field, fieldName) {
      if (field.value.length === 0) {
        field.style.border = "1px solid red";
        errors.push(`Pole "${fieldName}" nie może być puste!`);
      } else {
        field.style.border = "1px solid black";
      }
    }

    function validateEmptyAndNoNumbersField(field, fieldName) {
      if (field.value.length === 0) {
        field.style.border = "1px solid red";
        errors.push(`Pole "${fieldName}" nie może być puste!`);
      } else if (/\d/.test(field.value)) {
        field.style.border = "1px solid red";
        errors.push(`Pole "${fieldName}" nie może zawierać liczb!`);
      } else {
        field.style.border = "1px solid black";
      }
    }

    function validateNumberField(field, fieldName) {
      if (field.value.length === 0) {
        field.style.border = "1px solid red";
        errors.push(`Pole "${fieldName}" nie może być puste!`);
      } else if (isNaN(field.value)) {
        field.style.border = "1px solid red";
        errors.push(
          `W polu "${fieldName}" wprowadzona wartość nie jest liczbą!`
        );
      } else {
        field.style.border = "1px solid black";
      }
    }

    function validateOptionalNumberField(field, fieldName) {
      if (isNaN(field.value)) {
        field.style.border = "1px solid red";
        errors.push(
          `W polu "${fieldName}" wprowadzona wartość nie jest liczbą!`
        );
      } else {
        field.style.border = "1px solid black";
      }
    }

    function validateZipCode(field, fieldName) {
      if (field.value.length === 0) {
        field.style.border = "1px solid red";
        errors.push(`Pole "${fieldName}" nie może być puste!`);
      } else if (!/^(\d{2}[ -]?\d{3}|\d{5})$/.test(field.value)) {
        field.style.border = "1px solid red";
        errors.push(
          `Pole "${fieldName}" jest niepoprawne. Prawidłowy zapis to XXXXX, XX-XXX lub XXXXX!`
        );
      } else {
        field.style.border = "1px solid black";
      }
    }

    validateEmptyAndNoNumbersField(firstNameEl, "Imię");
    validateEmptyAndNoNumbersField(lastNameEl, "Nazwisko");
    validateEmptyField(streetNameEl, "Ulica");
    validateNumberField(houseNumberEl, "Numer budynku");
    validateOptionalNumberField(flatNumberEl, "Numer mieszkania");
    validateZipCode(zipEl, "Kod pocztowy");
    validateEmptyField(cityEl, "Miejscowość");
    validateEmptyField(voivodeshipEl, "Województwo");

    ulElement.innerHTML = "";
    if (errors.length === 0) {
      correctSubmitInfo();
    } else {
      showErrors(errors);
    }

    function correctSubmitInfo() {
      ulElement.innerHTML = "";
      const liElement = document.createElement("li");
      liElement.innerText = "Dane zostały wysłane prawidłowo!";
      liElement.style.color = "green";
      ulElement.appendChild(liElement);
    }

    function showErrors(errors) {
      ulElement.innerHTML = "";
      errors.forEach((error) => {
        const liElement = document.createElement("li");
        liElement.innerText = error;
        liElement.style.color = "red";
        ulElement.appendChild(liElement);
      });
    }
  }
}
