// W pliku `index.html` znajdziesz formularz.
"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const formEl = document.querySelector("form");
  const userList = document.querySelector(".users-list");

  formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    const firstName = formEl.elements.firstName.value;
    const lastName = formEl.elements.lastName.value;

    const liUser = document.createElement("li");
    liUser.classList.add("user-list__person");
    liUser.textContent = `${firstName} ${lastName}`;
    userList.appendChild(liUser);
  });
});
