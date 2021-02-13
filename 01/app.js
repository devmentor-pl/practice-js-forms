const form = document.querySelector('form')

form.addEventListener('submit', e => {
  e.preventDefault();
  const ulElement = document.querySelector('.users-list')
  const firstName = e.target.elements[0].value;
  const lastName = e.target.elements[1].value;
  const liElement = document.createElement('li')
  liElement.innerText = `${firstName} ${lastName}`;
  liElement.classList.add('users-list__person')
  ulElement.appendChild(liElement)
})