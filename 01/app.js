const formEl = document.querySelector("form");
const usersListEl = document.querySelector(".users-list");

const regexName =
  /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;

formEl.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  const firstName = formEl.elements.firstName;
  const lastName = formEl.elements.lastName;
  validateInputEl(firstName);
  validateInputEl(lastName);

  printData(firstName.value, lastName.value);

  firstName.value = lastName.value = "";
}

function validateInputEl(inputEl) {
  const isValid = regexName.test(inputEl.value.trim());
  if (!isValid) throw new Error("Input is not valid");
}

function printData(...names) {
  const capitalizedNames = names.map((name) => {
    const isString = typeof name === "string";
    if (!isString) throw new Error("not a string type");

    const normaliseName = capitalizeName(name);
    return normaliseName;
  });

  if (usersListEl && usersListEl.firstElementChild) {
    const cloneLiEl = usersListEl.firstElementChild.cloneNode(true);
    cloneLiEl.innerText = capitalizedNames.join(" ");
    usersListEl.appendChild(cloneLiEl);
  }
}

function capitalizeName(name) {
  return name.replace(/\b(\w)/g, (s) => s.toUpperCase());
}
