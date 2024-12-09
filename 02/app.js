"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const formEl = document.querySelector("form");
  formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = formEl.elements.formLogin.value;
    console.log(email);
    const password1 = formEl.elements.formPass1.value;
    const password2 = formEl.elements.formPass2.value;
    const checked = formEl.elements.formAccept.checked;
    const errors = [];
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) errors.push("formLogin");

    if (password1 <= 6 || password1 !== password2) {
      if (password1 <= 6) errors.push("formPass1");
      if (password1 !== password2) errors.push("formPass2");
    }

    if (!checked) errors.push("formAccept");
    const labels = document.querySelectorAll("label");

    labels.forEach((item) => {
      item.style.color = "";
    });

    if (errors.length > 0) {
      errors.forEach((item) => {
        const label = document.querySelector(`label[for='${item}']`);
        label.style.color = "red";
      });
    } else {
      console.log("done");
    }
  });
});
