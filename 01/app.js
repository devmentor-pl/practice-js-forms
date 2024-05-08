const form = document.querySelector('form');
const ulEl = document.querySelector('.users-list');

const handleClick = function (e) {
  e.preventDefault();
  const firstName = document.querySelector('input[name="firstName"]').value;
  const lastName = document.querySelector('input[name="lastName"]').value;
  const fullName = `${firstName} ${lastName}`;
  const newLi = document.createElement('li');
  newLi.classList.add('users-list__person')
  newLi.textContent = fullName;
  ulEl.appendChild(newLi);
  form.reset();
}

form.addEventListener('submit', handleClick);