const formEl = document.querySelector('form');
formEl.noValidate = true;
const errors = [];
const success = [];




function checkEmail () {
  const emailLabel = formEl.querySelector('[for=formLogin');
  const emailInput = formEl.querySelector('#formLogin')
  
  const emailValue = emailInput.value;
  if(!emailValue.includes('@')) {
    errors.push(emailLabel)
  } else {
    success.push(1);
  }
}

function checkPassword () {
  const passOneEl = formEl.querySelector('#formPass1');
  const passTwoEl = formEl.querySelector('#formPass2');
  const passLabelTwo = formEl.querySelector('[for=formPass2]');
  const passLabelOne = formEl.querySelector('[for=formPass1]');

  let passOne = passOneEl.value;
  let passTwo = passTwoEl.value;

  if(!(passOne === passTwo) || (passOne.length < 6)) {
    errors.push(passLabelTwo, passLabelOne)
  } else {
    success.push(1);
  }
}

function checkBoxCheck () {
  const checkBoxInput = formEl.querySelector('#formAccept');
  const checkBoxLabel = formEl.querySelector('[for=formAccept]');

  if(!(checkBoxInput.checked)) {
    errors.push(checkBoxLabel);
  } else {
    success.push(1);
  }
}

function showErrors () {
  errors.forEach(item => {
    item.style.color = 'red';
  })
}

function checkData(e) {
  e.preventDefault();
  checkEmail()
  checkPassword()
  checkBoxCheck()
  if(success.length === 3) {
    console.log('done')
  } else {
    showErrors();
  }
}

formEl.addEventListener('submit', checkData)