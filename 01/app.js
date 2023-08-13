const formEl = document.querySelector('form');
const usersList = document.querySelector('.users-list')
const userFirstName = formEl.querySelector('input[name="firstName"]')
const userLastName = formEl.querySelector('input[name="lastName"]')

const handleSubmit = function(e) {
  e.preventDefault()
  const firstName = userFirstName.value;
  const lastName = userLastName.value;
  if ((isNaN(firstName) && firstName !== '') 
  && (isNaN(lastName) && lastName !== '')) {
    liAdd(usersList, firstName, lastName);
  } else alert('Incorrect data');
}

const liAdd = function (parent, firstEl, lastEl) {
  const liEl = document.createElement('li');
  liEl.classList.add('users-list__person');
  liEl.innerText = firstEl + ' ' + lastEl;
  parent.append(liEl)
}

formEl.addEventListener('submit', handleSubmit)
