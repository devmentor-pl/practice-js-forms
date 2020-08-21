// get form
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {

  // make a error obj
  let obj = {};

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
    obj.firstName = 'First Name: No empty, no number, length min 2';
  }
  if (lastName == null || !isNaN(lastName) || lastName.length < 2) {
    obj.lastName = 'Last Name: No empty, no number, length min 2';
  }
  if (street == null || !isNaN(street) || street.length < 2) {
    obj.street = 'Street: No empty, no number, length min 2';
  }
  if (city == null || !isNaN(city) || city.length < 2) {
    obj.city = 'City name: No empty, źno number, length min 2';
  }
  if (houseNum.value < 1) {
    obj.houseNumber = 'House number be above zero';
  }
  if (flatNumber.value < 1) {
    obj.flatNumber = 'Flat number be above zero';
  }

  // import pattern from HTML
  const regEx = form.querySelector('input[name="zip"]').getAttribute('pattern');
  if (!postCode.match(regEx)) {
    obj.zip = 'PostCode must match the pattern';
  }

  // voivodeship
  // console.log('voivodeship: ' + voobjdeship.value + ' ' + typeof voivodeship);
  if (voivodeship === '' || voivodeship.selectedIndex == 0) {
    obj.voivodeship = 'Voivodeship must be selected';
  }


  // STONÓG meme section
  if (voivodeship.value === 'podkarpackie') {
    console.log('***** ***');
    const stonoga = document.createElement('div');
    const meme = document.createElement('img');
    stonoga.appendChild(meme);
    meme.setAttribute('src', 'https://media1.tenor.com/images/e1924cf039373968557e7e2ebc25a147/tenor.gif?itemid=8694186')
    document.body.appendChild(stonoga);
  };

  if (obj.length > 0) {
    event.preventDefault();

    console.log('sukces');
  } else {
    // NEED TO BE TURNED INTO AN OBJECT TO DISPLAY PROPERLY

    for (let i = 0; i < form.length; i++) {

      const formField = document.querySelectorAll('label');
      let val = form[i].name;

      if (val in obj) {
        const par = document.createElement('p');
        par.innerText = obj[val];
        par.style.color = 'red';
        par.style.border = '2px solid red';
        par.style.width = '300px'

        // formField.forEach(el => el.appendChild(par));
        formField[i].appendChild(par);
      }
    }
  }
});
