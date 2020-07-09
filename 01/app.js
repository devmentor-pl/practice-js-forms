const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const firstName = form.querySelector('input[name="firstName"]').value;
  const lastName = form.querySelector('input[name="lastName"]').value;

  const ulElement = document.querySelector('.users-list');
  const liElement = document.createElement('li');
  liElement.classList.add('users-list__person');

  liElement.innerText = firstName + ' ' + lastName;
  ulElement.appendChild(liElement);
})
