const formEl = document.querySelector('form');
const ulEl = document.querySelector('.users-list');

formEl.addEventListener('submit', (e) => {
  e.preventDefault();
  const firstName = e.target.elements.firstName.value;
  const lastName = e.target.elements.lastName.value;
  const liEl = document.createElement('li');
  liEl.classList.add('users-list__person');
  liEl.innerText = `${firstName} ${lastName}`;
  ulEl.appendChild(liEl);
});
