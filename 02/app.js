const form = document.querySelector("form");

if (form) {
  form.addEventListener("submit", handleSubmit);
}

// Validators
const isEmailValid = (email) => {
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return regex.test(email.trim());
};

const isPasswordValid = (password1, passowrd2) => {
  return password1.length > 6 && password1 === passowrd2;
};

const isCheckboxChecked = (checkbox) => {
  return checkbox.checked;
};

const displayError = (element) => {
  const label = element.previousElementSibling;

  if (label && label.tagName === "LABEL") {
    label.style.color = "red";
  }
};

const clearError = (element) => {
  const label = element.previousElementSibling;

  if (label && label.tagName === "LABEL") {
    label.style.color = "black";
  }
};

function handleSubmit(e) {
  e.preventDefault();

  const errors = [];
  const inputElements = Array.from(e.target.elements);
  const [login, pass1, pass2, accept] = inputElements;

  // Validation
  if (!isEmailValid(login.value)) {
    errors.push(login);
  }
  if (!isPasswordValid(pass1.value, pass2.value)) {
    errors.push(pass1, pass2);
  }
  if (!isCheckboxChecked(accept)) {
    errors.push(accept);
  }

  inputElements.forEach((element) => {
    if (errors.includes(element)) {
      displayError(element);
    } else {
      clearError(element);
    }
  });

  if (errors.length > 0) return;
  console.log("done");
}
