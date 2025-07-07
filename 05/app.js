const formEl = document.querySelector('form');
const ulEl = document.querySelector('.messages');
formEl.noValidate = true;

formEl.addEventListener('submit', checkData);

function checkData(e) {
  const firstName = e.target.elements.firstName.value;
  const lastName = e.target.elements.firstName.value;
  const street = e.target.elements.street.value;
  const houseNumber = e.target.elements.houseNumber.value;
  const flatNumber = e.target.elements.flatNumber.value;
  const zip = e.target.elements.zip.value;
  const city = e.target.elements.city.value;
  const voivodeship = e.target.voivodeship.value;
  const errors = [];

  if (firstName.length === 0) {
    errors.push('Name is required');
  }

  if (lastName.length === 0) {
    errors.push('Last name is required');
  }

  if (street.length === 0) {
    errors.push('Street name is required');
  }

  if (houseNumber.length === 0) {
    errors.push('House number is required');
  }

  const pattern = /^[0-9]{2}-[0-9]{3}$/;
  if (!pattern.test(zip)) {
    errors.push('Incorrect zip code');
  }

  if (city.length === 0) {
    errors.push('City is required');
  }

  if (voivodeship === '') {
    errors.push('Choose voivodeship');
  }

  showMessages(e, errors);
}

function showMessages(e, errors) {
  if (errors.length > 0) {
    e.preventDefault();
    ulEl.innerHTML = '';
    errors.forEach((err) => {
      const newLi = document.createElement('li');
      newLi.innerText = err;
      ulEl.appendChild(newLi);
    });
  } else {
    e.preventDefault();
    ulEl.innerHTML = '';
    const newLi = document.createElement('li');
    ulEl.appendChild(newLi);
    newLi.innerText = 'Success!';
  }
}
