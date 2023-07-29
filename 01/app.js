const formEl = document.querySelector("form");
const usersListEl = document.querySelector(".users-list");

const regexName = /^[a-zA-Z –-]+$/u;
const defaultLiOptionsKeys = ["className", "innerText"];
const defaultLiElOptions = {
  className: "",
  innerText: "",
};

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
  if (!isValid) alert("Input is not valid");
}

function printData(...names) {
  const capitalizedNames = names.map((name) => {
    const isString = typeof name === "string";
    if (!isString) alert("not a string type");

    const normaliseName = capitalizeName(name);
    return normaliseName;
  });

  if (!usersListEl) return null;
  const newLi = createLiEl({
    className: "users-list__person",
    innerText: capitalizedNames.join(" "),
  });
  usersListEl.appendChild(newLi);
}

function createLiEl(options = defaultLiElOptions) {
  const isObject =
    Object.prototype.toString.call(options) === "[object Object]" &&
    !Array.isArray(options) &&
    options !== null;
  if (!isObject) alert("given options should be provided in type object");
  const optionsKeys = Object.keys(options);
  for (const optionKeyItem of optionsKeys) {
    const isKeyValid = defaultLiOptionsKeys.includes(optionKeyItem);
    if (!isKeyValid) alert("provided option key is not valid");
  }

  const { className, innerText } = { ...defaultLiElOptions, ...options };
  const newLiEl = document.createElement("li");
  newLiEl.classList.add(className);
  newLiEl.innerText = innerText;

  return newLiEl;
}

function capitalizeName(name) {
  return name.replace(/\b(\w)/g, (s) => s.toUpperCase());
}
