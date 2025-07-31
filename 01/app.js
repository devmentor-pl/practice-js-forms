'use strict';
const formEl = document.querySelector('form');
const nameInput = document.querySelector('input[name="firstName"]');
const lastNameInput = document.querySelector('input[name="lastName"]');

formEl.addEventListener('submit', function (e) {
  e.preventDefault();
  const name = nameInput.value;
  const lastName = lastNameInput.value;
  if (name === '' || lastName === '') {
    throw console.error('Input field is empty!');
  } else {
    addNewUserData(name, lastName);
  }
});

// Functions
function addNewUserData(name, lastName) {
  const newLi = document.createElement('li');
  newLi.textContent = `${capitalizeFirstLetter(name)} ${capitalizeFirstLetter(
    lastName
  )}`;
  const ulEl = document.querySelector('ul');
  newLi.classList.add('user-list__person');
  ulEl.appendChild(newLi);
  nameInput.value = '';
  lastNameInput.value = '';
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
