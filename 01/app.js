const form = document.querySelector('form');
const submit = document.querySelector('input[type=submit]');

const getValue = function (e) {
  e.preventDefault();
  let liContent = '';
  const ul = document.querySelector('.users-list');
  liContent = document.querySelector('input[name="firstName"]').value + " " + document.querySelector('input[name="lastName"]').value;
  const li = document.createElement('li');
  li.classList.add('user-list__person');
  li.textContent = liContent;
  if (liContent != " ") {
    ul.appendChild(li);
  }
}
if (form) {
  submit.addEventListener('click', getValue);
}