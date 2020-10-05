document.addEventListener('DOMContentLoaded', init);

function init() {
  document.querySelector('form').addEventListener('submit', checkForm)
}
const errorList = document.querySelector('.messages');

function checkForm(e) {

  e.preventDefault()

  errorList.innerHTML = ''

  const fNameInp = e.target.elements.firstName;
  const lNameInp = e.target.elements.lastName;
  const streetInp = e.target.elements.street
  const houseNumInp = e.target.elements.houseNumber;
  const flatNumInp = e.target.elements.flatNumber;
  const zipInp = e.target.elements.zip;
  const cityInp = e.target.elements.city;
  const voivInp = e.target.elements.voivodeship;
  const formEls = e.target.elements;

  for (const element of formEls) {
    if (element.type !== 'submit') { element.style.background = 'initial' }
  }

  if (fNameInp.value === '') {
    isEmpty(fNameInp)
  } else if (!hasOnlyLetters(fNameInp.value)) {
    addError(fNameInp, 'First name must contain letters only')
  } else { fNameInp.value = capitFirstLetters(fNameInp.value) }

  if (lNameInp.value === '') {
    isEmpty(lNameInp)
  } else if (!hasOnlyLetters(lNameInp.value)) {
    addError(lNameInp, 'Last name must contain letters only')
  } else { lNameInp.value = capitFirstLetters(lNameInp.value) }

  if (streetInp.value === '') {
    isEmpty(streetInp)
  } else if (hasIncorrectSign(streetInp.value)) {
    addError(streetInp, 'Street name must not contain other characters than letters and numbers')
  } else if (!isNaN(streetInp.value)) {
    addError(streetInp, 'Street name must not contain numbers only')
  } else { streetInp.value = capitFirstLetters(streetInp.value) }

  if (houseNumInp.value === '') {
    addError(houseNumInp, 'House number must not remain empty or contain characters other than numbers')
  } else if (houseNumInp.value <= 0) {
    addError(houseNumInp, 'House number must not be equal or less than 0')
  }

  if (flatNumInp.value === '') {
    addError(flatNumInp, 'Flat number must not remain empty or contain characters other than numbers')
  } else if (flatNumInp.value <= 0) {
    addError(flatNumInp, 'Flat number must not be equal or less than 0')
  }

  if (!/^[0-9]{2}(?:-[0-9]{3})?$/.test(zipInp.value)) {
    addError(zipInp, 'Wrong zip code. Use the pattern xx-xxx, ex. 00-356')
  }

  if (cityInp.value === '') {
    isEmpty(cityInp)
  } else if (!hasOnlyLetters(cityInp.value)) {
    addError(cityInp, 'City name must contain letters only')
  } else { cityInp.value = capitFirstLetters(cityInp.value) }

  if (voivInp.value === '') {
    addError(voivInp, 'Choose a voivodeship')
  }
  if (errorList.childElementCount === 0) {
    const success = document.createElement('p');
    success.style.color = 'green';
    success.innerText = 'Thank you. The form was successfully submitted.';
    e.target.appendChild(success)
  }
}


function hasOnlyLetters(myString) {
  return /^[a-z-\s]+$/i.test(myString);
}
function hasIncorrectSign(myString) {
  return !(/^[a-zA-Z0-9\s_.-]*$/.test(myString))
}
function isEmpty(input) {
  addError(input, `Do not leave empty fields - ${input.parentElement.firstChild.nodeValue}`)
}

function capitFirstLetters(string) {
  const splitArr = string.toLowerCase().split(' ');
  const temporaryArr = [];
  splitArr.forEach(word => {
    temporaryArr.push(word.replace(word[0], word[0].toUpperCase()));
  })
  const lastArr = temporaryArr.join(' ')
  return lastArr
}

function addError(input, message) {
  input.style.background = '#ffd0d0';
  const errorLi = document.createElement('li');
  errorLi.innerText = message;
  errorList.appendChild(errorLi)
}



