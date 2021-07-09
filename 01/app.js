// 1) stara wersja
/*
const form = document.querySelector("form");
const list = document.querySelector(".users-list");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = e.target.elements.firstName.value;
  const surname = e.target.elements.lastName.value;

  const newPerson = document.createElement("li");
  newPerson.innerText = name + " " + surname;
  list.appendChild(newPerson);
});
*/

// 2)

document.addEventListener("DOMContentLoaded", init);

function init() {
  const form = document.querySelector("form");
}

const form = document.querySelector("form");

// nie moge bez ponownego zadeklarowania "form" miec dostepu do tej zmiennej, nie moge jej zadeklarowac wewnatrz eventu poniewaz to na niej potrzebuje uzyc event listenera. Zwrocenie jej funckji tez nie zadziala poniewaz nie uzywam jej jako parametru.
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = e.target.elements.firstName.value;
  const surname = e.target.elements.lastName.value;

  const newPerson = document.createElement("li");
  newPerson.innerText = name + " " + surname;
  const list = document.querySelector(".users-list");
  list.appendChild(newPerson);
});
