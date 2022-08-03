const formEl = document.querySelector("form");
formEl.setAttribute("noValidate", true);
const ulEl = document.querySelector(".messages");

formEl.addEventListener("submit", checkData);

function addStyle(element) {
  element.style.border = "2px solid red";
}
function removeStyle(element) {
  element.removeAttribute("style");
}

function checkData(e) {
  e.preventDefault();
  const errors = [];

  const nameEl = e.target.elements.firstName;
  if (nameEl.value.length === 0) {
    errors.push("Wpisz poprawne imię");
    addStyle(nameEl);
  } else {
    removeStyle(nameEl);
  }
  const lastNameEL = e.target.elements.lastName;
  if (lastNameEL.value.length === 0) {
    errors.push("Wpisz poprawne nazwisko");
    addStyle(lastNameEL);
  } else {
    removeStyle(lastNameEL);
  }
  const streetEl = e.target.elements.street;
  if (streetEl.value.length === 0) {
    errors.push("Wpisz poprawną nazwę ulicy");
    addStyle(streetEl);
  } else {
    removeStyle(streetEl);
  }
  const houseNumberEl = e.target.elements.houseNumber;
  if (houseNumberEl.value.length === 0) {
    errors.push("Pole z numerem budynku nie zostało uzupełnione");
    addStyle(houseNumberEl);
  } else {
    removeStyle(houseNumberEl);
  }
  const zipEl = e.target.elements.zip;
  const zipPattern = zipEl.getAttribute("pattern");
  const reZip = new RegExp(zipPattern);

  if (zipEl.value.length === 0) {
    errors.push("Pole z kodem pocztowym nie zostało uzupełnione");
    addStyle(zipEl);
  }
  if (zipEl.value.length > 0 && reZip.test(zipEl.value) === false) {
    errors.push("Pole z kodem pocztowym zostało błędnie uzupełnione");
    addStyle(zipEl);
  }
  if (zipEl.value.length > 0 && reZip.test(zipEl.value)) {
    removeStyle(zipEl);
  }

  const cityEl = e.target.elements.city;
  const cityPattern =
    "^(?:[A-Za-z]{2,}(?:(.s|'ss|s?-s?|s)?(?=[A-Za-z]+))){1,2}(?:[A-Za-z]+)?$";
  const reCity = new RegExp(cityPattern);

  if (cityEl.value.length === 0) {
    errors.push("Pole miejscowością nie zostało uzupełnione");
    addStyle(cityEl);
  }
  if (cityEl.value.length > 0 && reCity.test(cityEl.value) === false) {
    errors.push("Pole z kodem pocztowym zostało błędnie uzupełnione");
    addStyle(cityEl);
  }
  if (cityEl.value.length > 0 && reCity.test(cityEl.value)) {
    removeStyle(cityEl);
  }
  const voivodeshipEl = e.target.elements.voivodeship;
  if (voivodeshipEl.selectedIndex === 0) {
    errors.push("Nie wybrano województwa");
    addStyle(voivodeshipEl);
  } else {
    removeStyle(voivodeshipEl);
  }

  if (errors.length > 0) {
    e.preventDefault();

    ulEl.innerHTML = " ";
    ulEl.innerText = "Formularz został wypełniony niepoprawnie:";

    errors.forEach(function (item) {
      const liEl = document.createElement("li");
      liEl.innerText = item;
      ulEl.appendChild(liEl);
    });
  }
  if (errors.length === 0) {
    ulEl.innerText = "Formularz został wypełniony poprawnie";
  }
}
