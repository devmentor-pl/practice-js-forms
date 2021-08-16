const formElement = document.querySelector('form');
formElement.noValidate = true;
formElement.autocomplete = 'off';
const ulElement = formElement.querySelector('.messages');
const validationObj = {
  firstName : formElement.elements.firstName,
  lastName : formElement.elements.lastName,
  streetName : formElement.elements.street,
  houseNumber : formElement.elements.houseNumber,
  zipCode : formElement.elements.zip,
  city : formElement.elements.city,
  voivodeship : formElement.elements.voivodeship
}

let errors = [];

formElement.addEventListener('submit', checkData)

function checkLength (obj) {
  for(let el in obj) {
    if(obj[el].value < 1) {
      errors.push(obj[el])
    }
  }
}

function resetErrosMessages () {
  let liElementCancel = ulElement.querySelectorAll('li');
    liElementCancel.forEach(item => {
      ulElement.removeChild(item);
    })
}

function checkData (e) {
  checkLength(validationObj);
  resetErrosMessages();
  if(errors.length > 0) {
    e.preventDefault();
    errors.forEach(item => {
      item.style.border = '1px solid red';
      let liElement = document.createElement('li');
      liElement.textContent = `Uzupełnij pole ${item.parentElement.innerText}`
      ulElement.appendChild(liElement);
    })
    errors = [];
  } else {
    e.preventDefault()
    resetErrosMessages();
    for(let el in validationObj) {
      validationObj[el].style.border = '1px solid green';
    }
    alert('done');
  }
}




