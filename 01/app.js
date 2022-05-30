const formEl = document.querySelector('form');

formEl.addEventListener('submit', function(e) {
  e.preventDefault();
  
  const firstName = e.target.elements.firstName;
  const lastName = e.target.elements.lastName;
  
  const usersList = document.querySelector('.users-list');

  usersList.insertAdjacentHTML('beforeend', `<li class="users-list__person">${firstName.value} ${lastName.value}</li>`);
  
  firstName.value = '';
  lastName.value = '';
})