const formEl = document.querySelector('form');
const ulEl = document.querySelector('ul');

formEl.addEventListener('submit', checkData);

function checkData(e) {
  e.preventDefault();
  const firstName = e.target.elements.firstName.value;
  const lastName = e.target.elements.lastName.value;

  const li = document.createElement('li');
  li.classList.add('user-list__person');
  li.textContent = `${firstName} ${lastName}`;
    ulEl.appendChild(li);

}
