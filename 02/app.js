const formEl = document.querySelector("form");

const handleChange = function (e) {
  const login = formEl.elements.login;
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  
};

for (const el of formEl.elements) {
  el.addEventListener("input", handleChange);
}
