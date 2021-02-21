document.addEventListener('DOMContentloaded', () => {
  const form = document.querySelector('form')
  form.addEventListener('submit', validate)
})

function validate(e) {
  e.preventDefault();
  const elements = e.target.elements;
  const loginVal = elements.login.value;
  const pass1Val = elements.pass1.value;
  const pass2Val = elements.pass2.value;
  const acceptVal = elements.accept.checked;
  console.log(loginVal, pass1Val, pass2Val, acceptVal)
  const errors = []
  if(!loginVal.includes('@')) {
    errors.push('[for="formLogin"]')
  }
  if((pass1Val !== pass2Val) || (pass1Val.length < 6)) {
    errors.push('[for="formPass1"]', '[for="formPass2]');
  }
  if(!acceptVal) {
    errors.push('[for="formAccept"]')
  }
  const labelsList = document.querySelectorAll('label')
  labelsList.forEach(label => {
    label.style.color = '';
  });

  if(errors.length === 0) {
    console.log('done')
  } else {
    errors.forEach(selector => {
      const el = document.querySelector(selector)
      el.style.color = 'red';
    })
  }
}