"use strict";

document.addEventListener("DOMContentLoaded", (e) => {
  const form = document.querySelector("form");
  const messages = document.querySelector(".messages");

  form.noValidate = true;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const firstName = form.elements.firstName.value;
    const lastName = form.elements.lastName.value;
    const street = form.elements.street.value;
    const houseNumber = form.elements.houseNumber.value;
    const flatNumber = form.elements.flatNumber.value;
    const zip = form.elements.zip.value;
    const city = form.elements.city.value;
    const voivodeship = form.elements.voivodeship.value;

    let isValid = true;

    function createLi(textError) {
      const liMessages = document.createElement("li");
      liMessages.innerHTML += textError;
      messages.appendChild(liMessages);
    }

    if (firstName === "") {
      isValid = false;
      createLi("The firstname is required");
    }

    if (firstName === "") {
      isValid = false;
      createLi("The lastname is required");
    }

    if (lastName === "") {
      isValid = false;
      createLi("The firstname is required");
    }

    if (street === "") {
      isValid = false;
      createLi("The street is required");
    }

    if (houseNumber === "") {
      isValid = false;
      createLi("The number of house is required");
    }

    if (flatNumber === "") {
      isValid = false;
      createLi("The number of flat is required");
    }

    const zipCodePattern = /^[0-9]{2}-[0-9]{3}$/;
    if (!zipCodePattern.test(zip) || zip === "") {
      isValid = false;
      createLi("The zip code is not correct");
    }

    if (city === "") {
      isValid = false;
      createLi("The city is required");
    }

    if (voivodeship === "") {
      isValid = false;
      createLi("The voidodeship is required");
    }

    if (isValid) {
      createLi("The date was sending correct");
    }
  });
});
