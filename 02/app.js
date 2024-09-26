const form = document.querySelector("form");
const emailInput = form.querySelector('input[type="email"]');
const passwordInputs = form.querySelectorAll('input[type="password"]');
const acceptInput = form.querySelector('input[type="checkbox"]');
const errors = [];
form.setAttribute("novalidate", "");

//check if email is valid
const checkEmail = function () {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value)) {
    if (errors.indexOf(emailInput) === -1) {
      errors.push(emailInput);
    }
  } else {
    //remove error
    errors.splice(errors.indexOf(emailInput), 1);
    setLabelColorToBlack(emailInput);
  }
};

//check if passwords match
const checkPasswords = function () {
  const password1 = passwordInputs[0].value;
  const password2 = passwordInputs[1].value;
  console.log("passw if: ", password1.length < 6 || password1 !== password2);
  if (password1.length < 6 || password1 !== password2) {
    if (errors.indexOf(passwordInputs[0]) === -1) {
      errors.push(...passwordInputs);
    }
  } else {
    const password1Index = errors.indexOf(passwordInputs[0]);
    errors.splice(errors.indexOf(password1Index), 1);
    const password2Index = errors.indexOf(passwordInputs[1]);
    errors.splice(errors.indexOf(password2Index), 1);
    setLabelColorToBlack(passwordInputs[0]);
    setLabelColorToBlack(passwordInputs[1]);
  }
};

//check if terms are accepted
const areTermsAccepted = function () {
  if (!acceptInput.checked) {
    if (errors.indexOf(acceptInput) === -1) {
      errors.push(acceptInput);
    }
  } else {
    errors.splice(errors.indexOf(acceptInput), 1);
    setLabelColorToBlack(acceptInput);
  }
};

const setLabelColorToBlack = function (element) {
  const label = document.querySelector(`label[for="${element.id}"]`);
  label.style.color = "black";
};

form.addEventListener("submit", function (e) {
  checkEmail();
  checkPasswords();
  areTermsAccepted();
  //color tags marked as errors
  if (errors.length > 0) {
    e.preventDefault();
    errors.forEach(function (error) {
      const label = document.querySelector(`label[for="${error.id}"]`);
      label.style.color = "red";
    });
  } else {
    console.log("done");
  }
});

// form.addEventListener("change", function (e) {
//   const errorIndex = errors.indexOf(e.target);
//   console.log("errorIndex: ", errorIndex);
//   if (errorIndex >= 0) {
//     const label = document.querySelector(`label[for="${e.target.id}"]`);
//     label.style.color = "black";
//   }
// });
