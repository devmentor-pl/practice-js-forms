const formEl = document.querySelector("form");
const PASSWORD_LENGTH = 4;

const regexEmail =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

formEl.addEventListener("submit", handleSubmit);

const validations = {
  login: { validation: validateEmail, errorMsg: "Email is not valid" },
  pass1: {
    validation: checkPassword,
    errorMsg: `password should have ${PASSWORD_LENGTH} characters or more`,
  },
  // pass2: validatePasswords,
  // accept: validateCheckbox,
};

function handleSubmit(e) {
  e.preventDefault();

  const self = e.target;
  const inputs = self.elements;
  console.log(inputs);
  //   const email = self.elements.login.value.trim();
  //   const pass1 = self.elements.pass1.value.trim();
  //   const pass2 = self.elements.pass2.value.trim();
  //   const checkboxRegulations = self.elements.accept;
  const errors = [];

  //   const { isValidEmail, errorMsg: errorMsgEmail } = validateEmail(email);
  //   if (!isValidEmail) {
  //     errors.push(errorMsgEmail);
  //   }

  //   const { isValidPassLength, errorMsg: errorMsgPassLength } =
  //     checkPassword(pass1);
  //   if (!isValidPassLength) errors.push(errorMsgPassLength);

  //   const { isPass2Match, errorMsg: errorMsgConfirmPass } = validatePasswords(
  //     pass1,
  //     pass2
  //   );
  //   if (!isPass2Match) errors.push(errorMsgConfirmPass);

  //   const { isChecked, errorMsg: errorMsgRegulations } = validateCheckbox(
  //     checkboxRegulations,
  //     "Regulations must be accepted"
  //   );
  //   if (!isChecked) errors.push(errorMsgRegulations);

  checkErrors(errors);
}

function validateEmail(email) {
  const isValidEmail = regexEmail.test(email);
  return {
    isValidEmail,
    errorMsg: "Email is not valid",
  };
}

function checkPassword(password) {
  const isString = typeof password === "string";
  if (!isString) throw new Error("not string type");

  const isValidPassLength = password.length > PASSWORD_LENGTH;
  return {
    isValidPassLength,
    errorMsg: `password should have ${PASSWORD_LENGTH} characters or more`,
  };
}

function validatePasswords(pass1, pass2) {
  const isPass2Match = pass1 === pass2;
  return {
    isPass2Match,
    errorMsg: "Passwords do not match ",
  };
}

function validateCheckbox(checkbox, errorMsg) {
  const isCheckbox = typeof checkbox === "checkbox";
  console.log(isCheckbox);

  const isChecked = checkbox.isChecked;
  return {
    isChecked,
    errorMsg,
  };
}

function checkErrors(errorsArr) {
  const isArray = Array.isArray(errorsArr);
  if (!isArray) throw new Error("not an array type");

  const clear = errorsArr.length === 0;
  if (!clear) throw new Error("form not valid");
}
