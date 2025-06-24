const formEl = document.querySelector('form');
console.log('formEl', formEl);
formEl.addEventListener('submit', function (e) {
  e.preventDefault();

  const firstName = e.target.elements.firstName;
  const lastName = e.target.elements.lastName;

  console.log(firstName.value, lastName.value);

  if (firstName.value && lastName.value) {
    const ulEL = document.querySelector('ul');
    const createli = document.createElement('li');
    createli.classList.add('user-list__person');
    createli.innerText = `${firstName.value}  ${lastName.value}`;
    ulEL.appendChild(createli);
  }
});
