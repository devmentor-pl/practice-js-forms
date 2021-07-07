const form = document.querySelector("form");

const checkEmail = function (e, arr) {
  const email = e.target.elements.login.value;
  const emailFormat =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!email.match(emailFormat)) {
    const emailInput = e.target.elements.login;
    const label = emailInput.parentNode.querySelector("label");
    arr.push(label);
    console.log(arr);
  }
};

const checkPassword = function (e, pass1, arr) {
  if (pass1.length < 6) {
    const pass1Input = e.target.elements.pass1;
    const label = pass1Input.parentNode.querySelector("label");
    arr.push(label);
    console.log(arr);
  }
};

const checkPassword2 = function (e, pass2, arr) {
  if (pass2.length < 6) {
    const pass2Input = e.target.elements.pass2;
    const label = pass2Input.parentNode.querySelector("label");
    arr.push(label);
    console.log(arr);
  }
};

const checkIfPasswordsMatch = function (e, arr) {
  const pass1 = e.target.elements.pass1.value;
  checkPassword(e, pass1, arr);
  const pass2 = e.target.elements.pass2.value;
  checkPassword2(e, pass2, arr);
  if (pass1 !== pass2) {
    const pass2Input = e.target.elements.pass2;
    const label = pass2Input.parentNode.querySelector("label");
    arr.push(label);
    console.log(arr);
  }
};

const isRegChecked = function (e, arr) {
  const accept = e.target.elements["accept"];
  if (!accept.checked) {
    const label = accept.parentNode.querySelector("label");
    arr.push(label);
    console.log(arr);
  }
};

form.addEventListener("submit", function (e) {
  //e.preventDefault(); // to see "done" if correct
  const errors = [];
  checkEmail(e, errors);
  checkIfPasswordsMatch(e, errors);
  isRegChecked(e, errors);
  if (errors.length === 0) {
    console.log("done");
  } else {
    e.preventDefault();
    errors.forEach(function (err) {
      err.style.color = "red";
    });
    alert(
      "Details that you put are incorrect. Please check fields marked with red color and fill the form with correct details."
    );
  }
});
