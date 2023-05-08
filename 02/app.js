const form = document.querySelector("form");
const emailInput = form.querySelector('input[type="email"]');
const passwordInputs = form.querySelectorAll('input[type="password"]');
const acceptInput = form.querySelector('input[type="checkbox"]');
const errors = [];
form.setAttribute("novalidate", "");

form.addEventListener("submit", function (e) {
  //check if email is valid
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value)) {
    errors.push(emailInput);
  }
  //check if passwords are the same
  const password1 = passwordInputs[0].value;
  const password2 = passwordInputs[1].value;
  if (password1.length < 6 || password1 !== password2) {
    errors.push(...passwordInputs);
  }

  // check if terms are accepted
  if (!acceptInput.checked) {
    errors.push(acceptInput);
  }

  //check errors
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

form.addEventListener("change", function (e) {
  const errorIndex = errors.indexOf(e.target);
  console.log("errorIndex: ", errorIndex);
  if (errorIndex >= 0) {
    const label = document.querySelector(`label[for="${e.target.id}"]`);
    console.log("label: ", label);
    label.style.color = "black";
  }
  // console.log("change: ", e.target);
  // console.log("index", errors.indexOf(e.target));
  // errors = errors.filter((element, index) => console.log("element", element));
});

// const form = document.querySelector("form");
// const emailInput = form.querySelector('input[type="email"]');
// const passwordInputs = form.querySelectorAll('input[type="password"]');
// const acceptInput = form.querySelector('input[type="checkbox"]');

// form.setAttribute("novalidate", "");
// form.addEventListener("submit", (event) => {
//   const errors = [];
//   // Sprawdzenie adresu e-mail
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   if (!emailRegex.test(emailInput.value)) {
//     errors.push(emailInput);
//   }

//   // Sprawdzenie haseł
//   const password1 = passwordInputs[0].value;
//   const password2 = passwordInputs[1].value;
//   if (password1.length < 6 || password1 !== password2) {
//     errors.push(...passwordInputs);
//   }

//   // Sprawdzenie akceptacji regulaminu
//   if (!acceptInput.checked) {
//     errors.push(acceptInput);
//   }

//   // Obsługa błędów
//   if (errors.length > 0) {
//     event.preventDefault();

//     errors.forEach((input) => {
//       const label = form.querySelector(`label[for="${input.id}"]`);
//       label.style.color = "red";
//     });
//   } else {
//     console.log("done");
//   }
// });

// // Dodawanie i usuwanie błędów
// const addError = (input) => {
//   if (!errors.includes(input)) {
//     errors.push(input);
//     const label = form.querySelector(`label[for="${input.id}"]`);
//     label.style.color = "red";
//   }
// };

// const removeError = (input) => {
//   const index = errors.indexOf(input);
//   if (index !== -1) {
//     errors.splice(index, 1);
//     const label = form.querySelector(`label[for="${input.id}"]`);
//     label.style.color = "black";
//   }
// };

// // Obsługa zdarzeń
// emailInput.addEventListener("input", checkEmail);
// passwordInputs[0].addEventListener("input", checkPasswords);
// passwordInputs[1].addEventListener("input", checkPasswords);
// acceptInput.addEventListener("change", checkAccept);

// form.addEventListener("submit", (event) => {
//   checkEmail();
//   checkPasswords();
//   checkAccept();

//   if (errors.length > 0) {
//     event.preventDefault();
//   } else {
//     console.log("done");
//   }
// });

// // Usuwanie błędów
// const clearErrors = () => {
//   errors.forEach((input) => {
//     removeError(input);
//   });
// };

// emailInput.addEventListener("change", clearErrors);
// passwordInputs[0].addEventListener("change", clearErrors);
// passwordInputs[1].addEventListener("change", clearErrors);
// acceptInput.addEventListener("change", clearErrors);
