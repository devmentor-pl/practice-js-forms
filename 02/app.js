// get form - form: HTML Collection
const form = document.querySelector('form');
console.log(form);

// add event listener onto the form
form.addEventListener('submit', checkUser);

// error handling
let errors = [];

// get data and run rests
function checkUser(el) {
  el.preventDefault();

  // get data
  let email = document.querySelector('input[id="formLogin"]').value;
  let pass_1 = document.querySelector('input[id="formPass1"]').value;
  let pass_2 = document.querySelector('input[id="formPass2"]').value;
  let chkbox = document.querySelector('input[type="checkbox"]').checked;

  // check if email has @, has, first character is not a dot
  const mailRegex = /^\S+(\.?)+@\S+$/

  if (mailRegex.test(email) === false) {
    errors.push(document.querySelector('input[id="formLogin"]'));
    // return false;

  } if (pass_1.length < 6 || pass_2.length < 6) {
    errors.push(document.querySelector('input[id="formPass1"]'), document.querySelector('input[id="formPass2"]'));
    // return false;

  } if (pass_1 !== pass_2) {
    errors.push(document.querySelector('input[id="formPass1"]'),               document.querySelector('input[id="formPass2"]'));
    // return false;

  } if (chkbox === false) {
    errors.push(document.querySelector('input[type="checkbox"]'));
    // return false;

  } else {
    return true;
  };

  // color the <label/> with errors
  errors.forEach(el => {
    el.previousElementSibling.style.color = 'red';
  });
};
