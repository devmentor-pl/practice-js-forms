// get form
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {


  event.preventDefault();

  // make a error array
  let msg = [];

  const firstName = form.querySelector('input[name="firstName"]').value;
  const lastName = form.querySelector('input[name="lastName"]').value;
  const street = form.querySelector('input[name="street"]').value;
  const city = form.querySelector('input[name="city"]').value;

  const houseNum = form.querySelector('input[name="houseNumber"]');
  const flatNumber = form.querySelector('input[name="flatNumber"]');

  const postCode = form.querySelector('input[name="zip"]').value;
  // const firstNameEle = event.target.elements.firstName.value; // chyba inna forma

  const voivodeship = form.querySelector('select[name="voivodeship"]');

  // check if data is valid                     // // NOTE: TUTAJ NIE JESTEM PEWIEN
  if (firstName == null || !isNaN(firstName) || firstName.length < 2) {
    msg.push('First Name: No empty, no number, length min 2');
  }
  if (lastName == null || !isNaN(lastName) || lastName.length < 2) {
    msg.push('Last Name: No empty, no number, length min 2');
  }
  if (street == null || !isNaN(street) || street.length < 2) {
    msg.push('Street: No empty, no number, length min 2');
  }
  if (city == null || !isNaN(city) || city.length < 2) {
    msg.push('City name: No empty, no number, length min 2');
  }
  if (houseNum.value < 1) {
    msg.push('House number be above zero');
  }
  if (flatNumber.value < 1) {
    msg.push('Flat number be above zero');
  }

  // import pattern from HTML
  const regEx = form.querySelector('input[name="zip"]').getAttribute('pattern');
  if (!postCode.match(regEx)) {
    msg.push('PostCode must match the pattern');
  }

  // voivodeship
  // console.log('voivodeship: ' + voivodeship.value + ' ' + typeof voivodeship);
  if (voivodeship === '' || voivodeship.selectedIndex === 0) {
    msg.push('Voivodeship must be selected');
  }

  // STONÓG meme section
  if (voivodeship.value === 'podkarpackie') {
    console.log('***** ***');
    const stonoga = document.createElement('div');
    const meme = document.createElement('img');
    stonoga.appendChild(meme);
    meme.setAttribute('src', 'https://media1.tenor.com/images/e1924cf039373968557e7e2ebc25a147/tenor.gif?itemid=8694186')
    document.body.appendChild(stonoga);
  }

  // error messages array
  // NEED TO BE TURNED INTO AN OBJECT TO DISPLAY PROPERLY
  const formField = document.querySelectorAll('label');

  for(let i=0; i < formField.length; i++) {
    const par = document.createElement('p');
    par.innerText = msg[i];
    par.style.color = 'red'
    par.style.border = '2px solid red'
    formField[i].appendChild(par);
  }

});
