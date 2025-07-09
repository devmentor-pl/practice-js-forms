const formEl = document.querySelector('form');
const ulEl = document.querySelector('ul');

formEl.addEventListener('submit', addUser);

function addUser(e) {
  e.preventDefault();

  const firstName = e.target.elements.firstName.value;
  const lastName = e.target.elements.lastName.value;

  if (firstName === '' || lastName === '') {
    alert('Proszę uzupełnić oba pola: imię i nazwisko.');
  }

  const li = document.createElement('li');
  li.classList.add('user-list__person');
  li.textContent = `${firstName} ${lastName}`;
  ulEl.appendChild(li);
  e.target.reset();
}
