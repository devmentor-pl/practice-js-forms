
const formEl = document.querySelector('form');
const messagesList = formEl.querySelector('.messages')

if(formEl) {
  formEl.noValidate = true;
  formEl.addEventListener('submit', handleSubmit);
}


function handleSubmit (e) {
  e.preventDefault();

  const errorsArr = [];

  const formInputs = [
    { name: 'firstName',
      label: 'Imię',
      pattern: '/^[a-zA-Z ]{2,20}$/',
      required: true
    },
    { name: 'lastName',
      label: 'Nazwisko',
      pattern: '/^[a-zA-Z ]{2,20}$/',
      required: true
    },
    { name: 'street',
      label: 'Ulica',
      pattern: '',
      required: true
    },
    { name: 'houseNumber',
      label: 'Numer budynku',
      pattern: '',
      required: true,
      type: 'number'
    },
    { name: 'flatNumber',
      label: 'Numer Mieszkania',
      pattern: '',
      required: false,
      type: 'number'
    },
    { name: 'zip',
      label: 'Kod pocztowy',
      pattern: '[0-9]{2}-[0-9]{3}',
      required: true
    },
    { name: 'city',
      label: 'Miasto',
      pattern: '/^[a-zA-Z ]{2,20}$/', 
      required: true
    },
    { name: 'voivodeship',
      label: 'Województwo',
      pattern: '',
      required: true
    },
  ]

  // formInputs.forEach(function(el) {
  //   const formElement = formEl.elements[el.name];
  //   checkForm(formInputs, formElement);
  // })

  formInputs.forEach(function(el) {
    const formElValue = formEl.elements[el.name].value;
    checkForm(formInputs, formElValue);
  })
 
}

function checkForm(formInputs, formElValue){
  console.log(formInputs);
  console.log(formElValue)
  
  // if (formElement.pattern) {
  //   const reg = new RegExp(formInputs.pattern)
  //   if(!reg.test(formElement)) {
  //     errorsArr.push(`Niedozwolone znaki`)
  //     console.log(errorsArr)
  //   }

  // }
}

// tu troche namieszałem, bo zacząłem od wyrażenia regularnego, a chyba powinienem zacząć
// od łatwiejszego sprawdzania. 

// Na obecną chwilę chciałem napisać funkję ( lub kilka do sprawdzania).
// nie wiem jak połączyć pola wprowadzane z założonym w formInputs schemtem poprawności danych.



