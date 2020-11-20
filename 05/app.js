const firstName = document.getElementsByName("firstName");
const lastName = document.getElementsByName("lastName");
const street = document.getElementsByName("street");
const houseNumber = document.getElementsByName("houseNumber");
const flatNumber = document.getElementsByName("flatNumber");
const zip = document.getElementsByName("zip");
const city = document.getElementsByName("city");
const voivodeship = document.getElementsByName("voivodeship");
const form = document.querySelector("form");
const ulElement = document.querySelector(".messages");

var liElementFirstName = document.createElement("li");
var liElementFirstNameUpper = document.createElement("li");
var liElementLastName = document.createElement("li");
var liElementLastNameUpper = document.createElement("li");
var liElementStreet = document.createElement("li");
var liElementStreetUpper = document.createElement("li");
var liElementHouse = document.createElement("li");
var liElementZip = document.createElement("li");
var liElementCity = document.createElement("li");
var liElementCityUpper = document.createElement("li");
var liElementVoivodeship = document.createElement("li");

form.setAttribute('novalidate', true);
//  || firstName[0][0] !== firstName[0][0].toUpperCase()
form.addEventListener('submit', (e) => {
    if (firstName[0].value === '' || firstName[0].value == null) {
      ulElement.appendChild(liElementFirstName);
      liElementFirstName.innerText = "Pole 'Imię' nie może być puste.";
      e.preventDefault();
    }
    else {
      e.preventDefault();
      liElementFirstName.remove();
      console.log("removed");
    }
    
    if (firstName[0].value[0] !== firstName[0].value[0].toUpperCase()) {
      ulElement.appendChild(liElementFirstNameUpper);
      liElementFirstNameUpper.innerText = "Imię musi zaczynać się dużą literą.";
      e.preventDefault();

    }
    else {
      e.preventDefault();
      liElementFirstNameUpper.remove();
      console.log("removed");
    }
    

    if (lastName[0].value === '' || lastName[0].value == null) {
      ulElement.appendChild(liElementLastName);
      liElementLastName.innerText = "Pole 'Nazwisko' nie może być puste.";
      e.preventDefault();
    }
    else {
      e.preventDefault();
      liElementLastName.remove();
      console.log("removed");
    }

    if (lastName[0].value[0] !== lastName[0].value[0].toUpperCase()) {
      ulElement.appendChild(liElementLastNameUpper);
      liElementLastNameUpper.innerText = "Nazwisko musi zaczynać się dużą literą.";
      e.preventDefault();

    }
    else {
      e.preventDefault();
      liElementLastNameUpper.remove();
      console.log("removed");
    }

    if (street[0].value === '' || street[0].value == null) {
      ulElement.appendChild(liElementStreet);
      liElementStreet.innerText = "Pole 'Ulica' nie może być puste.";
      e.preventDefault();
    }
    else {
      e.preventDefault();
      liElementStreet.remove();
      console.log("removed");
    }

    if (street[0].value[0] !== street[0].value[0].toUpperCase()) {
      ulElement.appendChild(liElementStreetUpper);
      liElementStreetUpper.innerText = "Ulica musi zaczynać się dużą literą.";
      e.preventDefault();
    }
    else {
      e.preventDefault();
      liElementStreetUpper.remove();
      console.log("removed");
    }

    if (houseNumber[0].value === '' || houseNumber[0].value == null) {
      ulElement.appendChild(liElementHouse);
      liElementHouse.innerText = "Pole 'Nuer budynku' nie może być puste.";
      e.preventDefault();
    }
    else {
      e.preventDefault();
      liElementHouse.remove();
      console.log("removed");
    }

    if (zip[0].value === '' || zip[0].value == null) {
      ulElement.appendChild(liElementZip);
      liElementZip.innerText = "Pole 'Kod pocztowy' nie może być puste.";
      e.preventDefault();
    }
    else {
      e.preventDefault();
      liElementZip.remove();
      console.log("removed");
    }

    if (city[0].value === '' || city[0].value == null) {
      ulElement.appendChild(liElementCity);
      liElementCity.innerText = "Pole 'Miejscowość' nie może być puste.";
      e.preventDefault();
    }
    else {
      e.preventDefault();
      liElementCity.remove();
      console.log("removed");
    }

    if (city[0].value[0] !== city[0].value[0].toUpperCase()) {
      ulElement.appendChild(liElementCityUpper);
      liElementCityUpper.innerText = "Miejscowość musi zaczynać się dużą literą.";
      e.preventDefault();
    }
    else {
      e.preventDefault();
      liElementCityUpper.remove();
      console.log("removed");
    }

    if (voivodeship[0].value === '' || voivodeship[0].value == null) {
      ulElement.appendChild(liElementVoivodeship);
      liElementVoivodeship.innerText = "Pole 'Województwo' nie może być puste.";
      e.preventDefault();
    }
    else {
      e.preventDefault();
      liElementVoivodeship.remove();
      console.log("removed");
    }
    /* if (firstName[0].value !== '' || firstName[0].value == null) {
      
      liElement.innerText = "Pole 'Imię' nie może być puste.";
      e.preventDefault();
    } */
  
    
  })


