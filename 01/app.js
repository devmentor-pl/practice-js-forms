document.addEventListener('DOMContentLoaded', initEvents);

function initEvents() {
  const form = document.querySelector('form');

  form.addEventListener('submit', getData)
}


function getData(e) {
  e.preventDefault();
  const firstName = e.target.elements.firstName.value
  const lastName = e.target.elements.lastName.value

  const userList = document.querySelector('.users-list')
  const listItem = document.createElement('li');
  listItem.classList.add('user-list__person');
  listItem.innerText = `${firstName} ${lastName}`;
  userList.appendChild(listItem);

  //Zrobiłam sobie zadanie z gwiazdą ;)
  function clearInputs() {
    e.target.elements.firstName.value = '';
    e.target.elements.lastName.value = ''
  } //nie rozumiem dlaczego funkcja ta nie działa mi jako funkcja samowywołująca. 
  clearInputs()
}






