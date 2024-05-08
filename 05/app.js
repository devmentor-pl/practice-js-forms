const messagesList = document.querySelector('.messages')
const formEl = document.querySelector('form');
const errors = []

const firstNameEl = document.querySelector('input[name="firstName"]')
const lastNameEl = document.querySelector('input[name="lastName"]')
const streetNameEl = document.querySelector('input[name="street"]')
const houseNumberEl = document.querySelector('input[name="houseNumber"]')
const flatNumberEl = document.querySelector('input[name="flatNumber"]')
const zipCodeEl = document.querySelector('input[name="zip"]')
const cityEl = document.querySelector('input[name="city"]')
const stateEl = document.querySelector('select[name="voivodeship"]')

const checkNames = function(firstName, lastName) {
  if(firstName.value.length < 1) {
    errors.push('Podaj swoje imię.')
  }
  if(lastName.value.length < 1) {
    errors.push('Podaj swoje nazwisko.')
  }
}

const checkAddress = function(
  streetName,
  houseNumber,
  flatNumber,
  zipCode,
  city,
  state
) {
  if(streetName.value.length < 3) {
    errors.push('Podaj ulicę.')
  }
  if(houseNumber.value.length === 0) {
    errors.push('Podaj numer budynku.')
  }
  if(flatNumber.value.length === 0) {
    errors.push('Podaj numer mieszkania.')
  }
  if(zipCode.value.length !== 6) {
    errors.push('Podaj kod pocztowy.')
  }
  if(city.value.length <= 2) {
    errors.push('Podaj nazwę miasta.')
  }
  if(state.value === '') {
    errors.push('Wybierz województwo.')
  }
}

const checkData = function (e) {
  e.preventDefault();
  errors.length = 0;
  messagesList.innerHTML = '';
  checkNames(firstNameEl, lastNameEl);
  checkAddress(
    streetNameEl,
    houseNumberEl,
    flatNumberEl,
    zipCodeEl,
    cityEl,
    stateEl
  )
  if (errors.length === 0) {
    alert('Dziękujemy za przesłanie formularza!')
    formEl.reset();
  } else {
    errors.forEach(function (err) {
      const newLi = document.createElement('li');
      newLi.innerText = err;
      messagesList.appendChild(newLi);
    });
    alert('Popraw błędy, aby wysłać formularz.');
  }
}

formEl.addEventListener('submit', checkData);