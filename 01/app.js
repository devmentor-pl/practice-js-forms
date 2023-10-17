
function stopForm(event) {
    event.preventDefault();

    const firstName = document.querySelector("input[name='firstName']").value;
    const lastName = document.querySelector("input[name='lastName']").value;

    if (firstName && lastName) {
      const createLi = document.createElement('li');
      createLi.classList.add("user-list__person");
      createLi.innerHTML = `${firstName} ${lastName}`;

      const list = document.querySelector("ul");
      list.appendChild(createLi);

      document.querySelector("#error-message").textContent = '';
    } else {
      document.querySelector("#error-message").textContent = 'Wypełnij oba pola'; 
    }
  }



document.querySelector("form").addEventListener("submit", stopForm);