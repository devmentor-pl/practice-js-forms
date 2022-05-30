const formEl = document.querySelector('form');
const ulEl = document.createElement('ul');
ulEl.classList.add('errors');
document.body.appendChild(ulEl);

function displayErrors(arr) {
  arr.forEach(function(el) {
    const liEl = document.createElement('li');
    liEl.textContent = el;
    ulEl.appendChild(liEl);
  })
}

if(formEl) {
  formEl.addEventListener('submit', handleSubmit);

  const firstNameEl = formEl.elements.firstName;
  const lastNameEl = formEl.elements.lastName;
  const streetEl = formEl.elements.street;
  const houseNumberEl = formEl.elements.houseNumber;
  const zipCodeEl = formEl.elements.zip;
  const cityNameEl = formEl.elements.city;
  const voivodeshipEl = formEl.elements.voivodeship;
  
  function handleSubmit(e) {
    e.preventDefault();
    const errors = [];
    const noDigitsPattern = /\d+/g;
    const zipCodePattern = /[0-9]{2}-[0-9]{3}/
    
    
    if(firstNameEl.value.length === 0 || noDigitsPattern.test(firstNameEl.value)) {
      errors.push('Dane w polu imię są niepoprawne')
    }

    if(lastNameEl.value.length === 0 || noDigitsPattern.test(lastNameEl.value)) {
      errors.push('Dane w polu nazwisko są niepoprawne')
    }

    if(streetEl.value.length === 0) {
      errors.push('Dane w polu ulica są niepoprawne')
    }

    if(houseNumberEl.value.length === 0) {
      errors.push('Dane w polu numer budynku są niepoprawne')
    }

    if(zipCodeEl.value.length === 0 || !zipCodePattern.test(zipCodeEl.value)) {
      errors.push('Dane w polu kod pocztowy są niepoprawne');
    }

    if(cityNameEl.value.length === 0 || noDigitsPattern.test(cityNameEl.value)) {
      errors.push('Dane w polu miasto są niepoprawne')
    }

    if(voivodeshipEl.value.length === 0) {
      errors.push('Dane w polu województwo są niepoprawne');
    }


    ulEl.innerHTML = '';
    if(errors.length === 0) {
      alert("Formularz został wypełniony prawidłowo.")

      Array.from(formEl.elements).forEach(function(el) {
        if(el.type !== 'submit') {
          el.value = '';
        }
      })
    } else {
      displayErrors(errors)
    }
  }
}
