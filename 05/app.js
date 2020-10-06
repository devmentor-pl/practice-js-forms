const form = document.querySelector("form");

if (form) {
  form.noValidate = true;

  form.addEventListener("submit", onSubmit);
}

function onSubmit(e) {
  e.preventDefault();

  const form = e.target;
  const errorMessages = [];

  if (!isRequiredFieldFilledIn(form.elements.firstName)) {
    errorMessages.push("Proszę podać imię.");
  }

  if (!isRequiredFieldFilledIn(form.elements.lastName)) {
    errorMessages.push("Proszę podać nazwisko.");
  }

  if (!isRequiredFieldFilledIn(form.elements.street)) {
    errorMessages.push("Proszę podać ulicę.");
  }

  if (
    !isRequiredFieldFilledIn(form.elements.houseNumber) ||
    !hasFieldANumber(form.elements.houseNumber)
  ) {
    errorMessages.push("Proszę podać numer budynku.");
  }

  if (!isRequiredFieldFilledIn(form.elements.zip)) {
    errorMessages.push("Proszę podać kod pocztowy.");
  } else if (!isZipValid(form.elements.zip.value)) {
    errorMessages.push("Proszę podać kod pocztowy w formacie NN-NNN.");
  }

  if (!isRequiredFieldFilledIn(form.elements.city)) {
    errorMessages.push("Proszę podać miasto.");
  }

  if (!isRequiredFieldFilledIn(form.elements.voivodeship)) {
    errorMessages.push("Proszę podać województwo.");
  }

  if (errorMessages.length > 0) {
    showErrorMessage(errorMessages);
  } else {
    alert("Formularz został wysłany.");
  }
}

function isRequiredFieldFilledIn(field) {
  if (typeof field !== "undefined") {
    return field.value.trim().length > 0;
  }

  return false;
}

function hasFieldANumber(field) {
  if (typeof field !== "undefined") {
    return !isNaN(field.valueAsNumber);
  }

  return false;
}

function isZipValid(zip) {
  return /^[0-9]{2}-[0-9]{3}$/.test(zip);
}

function showErrorMessage(errorMessages) {
  const messagesList = document.querySelector(".messages");

  if (messagesList) {
    messagesList.innerHTML = "";

    errorMessages.forEach((message) => {
      messagesList.appendChild(createErrorListItemElement(message));
    });
  }
}

function createErrorListItemElement(errorMessage) {
  const li = document.createElement("li");
  li.innerText = errorMessage;

  return li;
}
