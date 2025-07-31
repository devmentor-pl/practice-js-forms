const ulElement = document.querySelector(".messages");
const registerForm = document.querySelector("form");

registerForm.addEventListener("submit", checkData);

function checkData(e) {
  //   data variables
  const firstName = e.target.elements.firstName.value;
  const lastName = e.target.elements.lastName.value;
  const street = e.target.elements.street.value;
  const houseNumber = e.target.elements.houseNumber.value;
  const flatNumber = e.target.elements.flatNumber.value;
  const zipCode = e.target.elements.zip.value;
  const city = e.target.elements.city.value;
  const voivodeship = e.target.elements.voivodeship.value;

  const isValidZip = function (sZip) {
    return /[0-9]{2}-[0-9]{3}/.test(sZip);
  };

  //   errors arr
  const errors = [];

  // conditions
  if (firstName.length === 0) {
    errors.push("Imię musi posiadać przynajmniej jedną literę!");
  }
  if (lastName.length === 0) {
    errors.push("Nazwisko musi posiadać przynajmniej jedną literę!");
  }
  if (street.length === 0) {
    errors.push("Ulica musi posiadać przynajmniej jedną literę!");
  }
  if (houseNumber.length === 0) {
    errors.push("Musisz podać numer budynku/domu!");
  }
  if (zipCode.length === 0) {
    errors.push("Pole z kodem pocztowym nie moze być puste!");
  }
  if (!isValidZip(zipCode)) {
    errors.push("Kod pocztowy powinien zachować formę XX-XXX!");
  }
  if (city.length === 0) {
    errors.push("Nazwa miejscowości musi posiadać przynajmniej jedną literę!");
  }
  if (voivodeship.length === 0) {
    errors.push("Wybierz województwo!");
  }

  if (errors.length > 0) {
    e.preventDefault();
    ulElement.innerHTML = "";
    errors.forEach(function (item) {
      const errorInfo = document.createElement("li");
      errorInfo.innerText = item;
      ulElement.appendChild(errorInfo);
    });
  }
}
