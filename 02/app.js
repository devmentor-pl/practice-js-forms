document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Zatrzymujemy domyślną akcję formularza
  
    const emailInput = document.querySelector("input[name = 'login")
    const passOneInput = document.querySelector("input[name = 'pass1")
    const passTwoInput = document.querySelector("input[name = 'pass2")
    const checkBoxInput = document.querySelector("input[name = 'accept")

    const errors = []
    
    // czy email zawiera poprawne znaki
    const emailKey = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    if (!emailKey.test(emailInput.value)) {
        errors.push(emailInput)
        alert("zły adres email")
    }

    // czy hasło jest dłuższe niż 6 znaków
    if(passOneInput.value.lenght < 6 || passOneInput.value !== passTwoInput.value ) {
        errors.push(passOneInput);
        errors.push(passTwoInput);
        alert("Hasło jest zbyt krótkie lub niezgodne");
    }
// czy regulamin jest zaakceptowany 
 if (!checkBoxInput.checked) {
    errors.push(checkBoxInput)
    alert("zaakceptuj regulamini")
 }
// błedy na czerwono
errors.forEach(function(element) {
    element.style.color = "red";
  });

    if (errors.length === 0) {
        console.log("done");
      }

 })

