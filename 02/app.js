const formEl = document.querySelector('form');
formEl.noValidate = true;
let errors = [];




function checkEmail () {
  const emailLabel = formEl.querySelector('[for=formLogin');
  const emailInput = formEl.querySelector('#formLogin')
  const emailValue = emailInput.value;
  const regex = new RegExp('@');
  const testreg = regex.test(emailValue);

  // if(!emailValue.includes('@')) {
  //   errors.push(emailLabel)
  // } else {
  //   success.push(1);
  // }
  if(!testreg) {
    errors.push(emailLabel)
  } else {
    emailLabel.style.color = 'inherit'
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
    passLabelOne.style.color = 'inherit';
    passLabelTwo.style.color = 'inherit';
  }
  
}

function checkBoxCheck () {
  const checkBoxInput = formEl.querySelector('#formAccept');
  const checkBoxLabel = formEl.querySelector('[for=formAccept]');

  if(!(checkBoxInput.checked)) {
    errors.push(checkBoxLabel);
  } else {
    checkBoxLabel.style.color = 'inherit';
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
  if(errors.length === 0) {
    console.log('done')
  } else {
    showErrors();
    errors = [];
  }
}

formEl.addEventListener('submit', checkData)