const formEl = document.querySelector('form');
const ulEl = document.querySelector('.users-list');

formEl.addEventListener('submit', (e) => {
  e.preventDefault();
  const firstName = e.target.elements.firstName;
  const lastName = e.target.elements.lastName;
  const liEl = document.createElement('li');
  liEl.classList.add('users-list__person');
  liEl.innerText = `${firstName.value} ${lastName.value}`;
  ulEl.appendChild(liEl);
  firstName = '';
  lastName = '';
});