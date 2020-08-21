// get elements
const form = document.querySelector('form');
const firName = form.querySelector('input[name="firstName"]');
const secName = form.querySelector('input[name="lastName"]');
const users = document.querySelector('.users-list');

// set listener on submit button and prevent default
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const firstName = firName.value;
  const lastName = secName.value;

  const liEl = document.createElement('li');
  liEl.classList.add('users-list__person');

  // set li Element and add it to the list
  liEl.innerText = firstName + ' ' + lastName;
  users.appendChild(liEl);
})
