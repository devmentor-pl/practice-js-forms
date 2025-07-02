const validator = {
  name: {
    re: /^[A-Za-zÀ-ÖØ-öø-ÿĄąĆćĘęŁłŃńÓóŚśŹźŻż\s\-]{3,}$/,
    error:
      "Pole musi zawierać co najmniej 3 znaki: dozwolone są tylko litery, spacje i myślniki.",
  },
  street: {
    re: /^[A-Za-zÀ-ÖØ-öø-ÿĄąĆćĘęŁłŃńÓóŚśŹźŻż0-9\s.\-]{5,}$/,
    error:
      "Ulica musi zawierać co najmniej 5 znaków: dozwolone są litery, cyfry, spacje, kropki i myślniki.",
  },
  homeNumber: {
    error: "Numer budynku jest wymagany i musi być liczbą większą niż 0.",
  },
  flatNumber: {
    error: "Jeśli podany, numer mieszkania musi być liczbą większą niż 0.",
  },
  zip: {
    re: /^\d{2}-\d{3}$/,
    error: "Kod pocztowy musi być w formacie XX-XXX.",
  },
  city: {
    re: /^[A-Za-zÀ-ÖØ-öø-ÿĄąĆćĘęŁłŃńÓóŚśŹźŻż]+(?:[\s\-][A-Za-zÀ-ÖØ-öø-ÿĄąĆćĘęŁłŃńÓóŚśŹźŻż]+)*$/,
    error:
      "Miejscowość musi zawierać co najmniej 3 znaki: dozwolone są tylko litery, spacje i myślniki.",
  },
  voivodeship: {
    error: "Wybierz województwo z listy.",
  },
};

const form = document.querySelector("form");
const messages = document.querySelector(".messages");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const errors = [];
  messages.innerHTML = "";

  const data = {
    firstName: form.elements["firstName"].value,
    lastName: form.elements["lastName"].value,
    street: form.elements["street"].value,
    houseNumber: form.elements["houseNumber"].value,
    flatNumber: form.elements["flatNumber"].value,
    zip: form.elements["zip"].value,
    city: form.elements["city"].value,
    voivodeship: form.elements["voivodeship"].value,
  };

  if (!data.firstName || !validator.name.re.test(data.firstName)) {
    errors.push("Imię: " + validator.name.error);
  }
  if (!data.firstName || !validator.name.re.test(data.lastName)) {
    errors.push("Nazwisko: " + validator.name.error);
  }
  if (!data.firstName || !validator.street.re.test(data.street)) {
    errors.push("Ulica: " + validator.street.error);
  }
  if (!data.zip || !validator.zip.re.test(data.zip)) {
    errors.push("Kod pocztowy: " + validator.zip.error);
  }
  if (!data.city || !validator.city.re.test(data.city)) {
    errors.push("Miejscowość: " + validator.city.error);
  }

  if (!data.houseNumber || parseInt(data.houseNumber) < 1) {
    errors.push("Numer budynku: " + validator.homeNumber.error);
  }

  if (data.flatNumber && parseInt(data.flatNumber) < 1) {
    errors.push("Numer mieszkania: " + validator.flatNumber.error);
  }
  if (!data.voivodeship) {
    errors.push("Województwo: " + validator.voivodeship.error);
  }

  if (errors.length > 0) {
    errors.forEach((error) => {
      const li = document.createElement("li");
      li.textContent = error;
      messages.appendChild(li);
    });
  } else {
    const li = document.createElement("li");
    li.textContent = "Dane zostały wysłane prawidłowo.";
    messages.appendChild(li);
  }
});
