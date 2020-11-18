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

form.setAttribute('novalidate', true);
//  || firstName[0][0] !== firstName[0][0].toUpperCase()
form.addEventListener('submit', (e) => {
    if (firstName[0].value === '' || firstName[0].value == null) {
      const liElement = document.createElement("li");
      ulElement.appendChild(liElement);
      liElement.innerText = "Pole 'Imię' nie może być puste.";
      e.preventDefault();
    }

    if (firstName[0].value[0] !== firstName[0].value[0].toUpperCase()) {
      const liElement = document.createElement("li");
      ulElement.appendChild(liElement);
      liElement.innerText = "Imię musi zaczynać się dużą literą.";
      e.preventDefault();

    }

    if (lastName[0].value === '' || lastName[0].value == null) {
      const liElement = document.createElement("li");
      ulElement.appendChild(liElement);
      liElement.innerText = "Pole 'Nazwisko' nie może być puste.";
      e.preventDefault();


    }

    if (lastName[0].value[0] !== lastName[0].value[0].toUpperCase()) {
      const liElement = document.createElement("li");
      ulElement.appendChild(liElement);
      liElement.innerText = "Nazwisko musi zaczynać się dużą literą.";
      e.preventDefault();

    }
    if (street[0].value === '' || street[0].value == null) {
      const liElement = document.createElement("li");
      ulElement.appendChild(liElement);
      liElement.innerText = "Pole 'Ulica' nie może być puste.";
      e.preventDefault();


    }
    if (street[0].value[0] !== street[0].value[0].toUpperCase()) {
      const liElement = document.createElement("li");
      ulElement.appendChild(liElement);
      liElement.innerText = "Ulica musi zaczynać się dużą literą.";
      e.preventDefault();

    }
    if (houseNumber[0].value === '' || houseNumber[0].value == null) {
      const liElement = document.createElement("li");
      ulElement.appendChild(liElement);
      liElement.innerText = "Pole 'Nuer budynku' nie może być puste.";
      e.preventDefault();
    }
    if (zip[0].value === '' || zip[0].value == null) {
      const liElement = document.createElement("li");
      ulElement.appendChild(liElement);
      liElement.innerText = "Pole 'Kod pocztowy' nie może być puste.";
      e.preventDefault();// tutaj sprawdzilbym czy podane wartosci (wylaczajac myslnik) sa liczba za pomoca isNaN. ale trzeba by ingerowac w html.
    }
    if (city[0].value === '' || city[0].value == null) {
      const liElement = document.createElement("li");
      ulElement.appendChild(liElement);
      liElement.innerText = "Pole 'Miejscowość' nie może być puste.";
      e.preventDefault();


    }
    if (city[0].value[0] !== city[0].value[0].toUpperCase()) {
      const liElement = document.createElement("li");
      ulElement.appendChild(liElement);
      liElement.innerText = "Miejscowość musi zaczynać się dużą literą.";
      e.preventDefault();

    }
    if (voivodeship[0].value === '' || voivodeship[0].value == null) {
      const liElement = document.createElement("li");
      ulElement.appendChild(liElement);
      liElement.innerText = "Pole 'Województwo' nie może być puste.";
      e.preventDefault();


    }
    
  
    
  })


