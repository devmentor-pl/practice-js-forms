const form = document.querySelector('form');
const email = document.querySelector('input#formLogin');
const password1 = document.querySelector('input#formPass1');
const password2 = document.querySelector('input#formPass2');
const regulationsCheckbox = document.querySelector('input#formAccept');
const emailLabel = document.querySelector('label[for="formLogin"]');
const password1Label = document.querySelector('label[for="formPass1"]');
const password2Label = document.querySelector('label[for="formPass2"]');
const regulationsCheckboxLabel = document.querySelector('label[for="formAccept"]');
let errors = [];

const checkEmail = function (emailInput) {
  if (!emailInput.value.includes('@')) {
    errors.push('Your email needs to include a "@" sign!');
    emailLabel.style.color = 'red';
  }
}

const checkPasswords = function (firstPassword, secondPassword) {
  if (firstPassword.value.length < 6) {
    errors.push('Your password has to consist of 6 or more characters!');
    password1Label.style.color = "red";
  }
  if (secondPassword.value.length < 6) {
    errors.push('Your password has to consist of 6 or more characters!');
    password2Label.style.color = "red";
  }
  if (firstPassword.value !== secondPassword.value) {
    errors.push('Passwords have to be identical!');
    password1Label.style.color = "red";
    password2Label.style.color = "red";
  }
}

const checkRegulationsConsent = function (checkbox) {
  if (!checkbox.checked) {
    errors.push('You have to accept the regulations!');
    regulationsCheckboxLabel.style.color = "red";
  }
}

const resetLabelsColor = function () {
  emailLabel.style.color = '';
  password1Label.style.color = '';
  password2Label.style.color = '';
  regulationsCheckboxLabel.style.color = '';
}

const checkData = function (e) {
  e.preventDefault();
  errors = [];
  resetLabelsColor();
  checkEmail(email);
  checkPasswords(password1, password2);
  checkRegulationsConsent(regulationsCheckbox);
  if (errors.length === 0) {
    console.log('Done!');
    form.reset();
  }
}

form.addEventListener('submit', checkData);