const message = document.querySelector(".messages");

const form = document.querySelector("form");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const street = form.street.value;
    const houseNumber = form.houseNumber.value;
    const flatNumber = form.flatNumber.value;
    const zip = form.zip.value;
    const city = form.city.value;
    const voivodeship = form.voivodeship.value;

    isCorrectFirstName = firstName.length !== 0;
    isCorrectLastName = lastName.length !== 0;
    isCorrectStreet = street.length !== 0;
    isCorrectHouseNumber = houseNumber > 0;
    isCorrectFlatNumber = flatNumber > 0;
    isCorrectZip = /^\d{2}-\d{3}$/.test(zip);
    isCorrectCity = city.length !== 0;
    isCorrectVoivodeship = voivodeship.length !== 0;

    const errors = [];

    if (!isCorrectFirstName) {
      errors.push("Wpisz imię");
    }
    if (!isCorrectLastName) {
      errors.push("Wpisz nazwisko");
    }
    if (!isCorrectStreet) {
      errors.push("Wpisz ulicę");
    }
    if (!isCorrectHouseNumber) {
      errors.push("Wpisz poprawnie numer domu");
    }
    if (!isCorrectFlatNumber) {
      errors.push("Wpisz poprawnie numer mieszkania");
    }
    if (!isCorrectZip) {
      errors.push("Wpisz poprawnie kod pocztowy");
    }
    if (!isCorrectCity) {
      errors.push("Wpisz miasto");
    }
    if (!isCorrectVoivodeship) {
      errors.push("Wybierz województwo");
    }
    if (errors.length === 0) {
      message.textContent = "Dane zostały prawidłowo uzupełnione i wysłane";
    } else {
      message.innerHTML = "";
      errors.forEach((element) => {
        const listItem = document.createElement("li");
        listItem.textContent = element;
        message.appendChild(listItem);
      });
    }
  });
}
