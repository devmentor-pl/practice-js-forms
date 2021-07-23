const formElement = document.querySelector('form');
const inputElements = formElement.querySelectorAll('input[name]')
const ulElement = document.querySelector('.users-list');

function getUserInfo (e) {
  e.preventDefault()
  let firstName = e.target.elements.firstName.value;
  let lastName = e.target.elements.lastName.value

  if(!(firstName.length === 0) && !(lastName.length === 0)) {
    inputElements.forEach(item => {
      item.style.border = '2px solid green';
    })
    let liElement = document.createElement('li');
    liElement.classList.add('users-list__person');
    liElement.textContent = `${firstName} ${lastName}`
    ulElement.appendChild(liElement)
  } else {
    alert('uzupełnij wszystkie pola')
  }

}


formElement.addEventListener('submit', getUserInfo)
