const formEl = document.querySelector('form');
const firstName = document.querySelector('[name="firstName"]')
const lastName = document.querySelector('[name="lastName"]')
const usersList = document.querySelector('.users-list');

formEl.addEventListener('submit', function(e) {
  e.preventDefault();
  usersList.insertAdjacentHTML('beforeend', `<li class="users-list__person">${firstName.value} ${lastName.value}</li>`);
  firstName.value = '';
  lastName.value = '';
})