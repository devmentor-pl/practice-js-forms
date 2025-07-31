const formEl = document.querySelector('form');
const ulEl = document.querySelector('.users-list');

formEl && formEl.addEventListener('submit', showData);

function showData(e) {
  e.preventDefault();
  let name = e.target.elements.firstName.value;
  let lastName = e.target.elements.lastName.value;
  if (ulEl && name && lastName) {
    const liEl = document.createElement('li');
    liEl.classList.add('user-list__person');
    liEl.innerText = `${name} ${lastName}`;
    ulEl.appendChild(liEl);
    e.target.elements.firstName.value = '';
    e.target.elements.lastName.value = '';
  }
}
