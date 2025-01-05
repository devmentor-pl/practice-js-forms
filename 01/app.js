const form = document.querySelector("form");

if (form) {
  form.addEventListener("submit", handleSubmit);
}

const isStringValid = (string, minLength) => {
  return string && string.length >= minLength;
};

function handleSubmit(e) {
  e.preventDefault();

  const firstName = e.target.elements.firstName.value.trim();
  const lastName = e.target.elements.lastName.value.trim();

  if (!isStringValid(firstName, 3) || !isStringValid(lastName, 3)) return;

  const listEl = document.querySelector(".users-list");
  if (!listEl) return;

  const newItem = document.createElement("li");
  newItem.textContent = firstName + " " + lastName;
  listEl.appendChild(newItem);

  form.reset();
}
