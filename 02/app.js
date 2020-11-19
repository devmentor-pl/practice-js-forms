const emailLabel = document.getElementById("formLogin");
const firstPassLabel = document.getElementById("formPass1");
const secondPassLabel = document.getElementById("formPass2");
const acceptLabel = document.getElementById("formAccept");
const errorsArray = [];
const formElement = document.querySelector("form");
const inputEl = document.getElementById('formLogin');

/*inputEl.addEventListener('input', validationFunc);
    function validationFunc(e) {
        const target = e.target;
        const email = target.value;
        if(email.includes('@') && email !== "") {
            target.style.border = '1px green solid';
        } 
        else {
            target.style.border = '1px red solid';
            errorsArray.push(emailLabel);
        }
    }

    const passElFirst = document.getElementById('formPass1');
    const passElSecond = document.getElementById('formPass2');
    let check = false;
    let checkSec = false;
    passElFirst.addEventListener('blur', passFunc);
    passElSecond.addEventListener('blur', passFunc);
    function passFunc(e) {
        const target = e.target;
        const pass = target.value;
        const passArr = Array.from(pass);
        if(passArr.length < 6) {
            passElFirst.style.border = '1px red solid';
            passElSecond.style.border = '1px red solid';
            check = false;
            errorsArray.push(firstPassLabel);
            errorsArray.push(secondPassLabel);


        }
        else if (passElFirst.value !== passElSecond.value) {
            passElFirst.style.border = '1px red solid';
            passElSecond.style.border = '1px red solid';
            check = false;
            errorsArray.push(firstPassLabel);
            errorsArray.push(secondPassLabel);

        }
         
        else {
            passElFirst.style.border = '1px green solid';
            passElSecond.style.border = '1px green solid';
            check = true;

        }
        
        if (passElFirst.value === "" || passElSecond.value === "") {
            passElFirst.style.border = '1px red solid';
            passElSecond.style.border = '1px red solid';
            check = false;
            errorsArray.push(firstPassLabel);
            errorsArray.push(secondPassLabel);

        }
        if (check === true) {
            passElFirst.style.border = '1px green solid';
            passElSecond.style.border = '1px green solid';
        }
       
        return check;

    }
    
    const checkbox = document.getElementById("formAccept");
    checkbox.addEventListener( 'change', function(e) {
        
        if(this.checked && check === true) {
            console.log("done");
            errorsArray.forEach(function (element) {
                element.style.color = "black";
        })}
         else {
            errorsArray.forEach(function (element) {
                element.style.color = "red";
            })
        }
    }); */
    const checkbox = document.getElementById("formAccept");
    const passElFirst = document.getElementById('formPass1');
    const passElSecond = document.getElementById('formPass2');
    let checkF = false;
    let checkS = false;
    
    formElement.addEventListener("submit", function(e) {
        const arrPass = Array.from(passElFirst.value);
        const arrPassSec = Array.from(passElSecond.value);
        if(inputEl.value.includes('@') && inputEl.value !== "") {
            emailLabel.style.border = '1px green solid';
            checkF = true;
        } 
        else {
            emailLabel.style.border = '1px red solid';
            errorsArray.push(emailLabel);
            checkF = false;
        }



        if (arrPass.length < 6) {
            passElFirst.style.border = '1px red solid';
            passElSecond.style.border = '1px red solid';
            errorsArray.push(firstPassLabel);
            errorsArray.push(secondPassLabel);
            checkS = false;

        }
        else if (passElFirst.value !== passElSecond.value) {
            passElFirst.style.border = '1px red solid';
            passElSecond.style.border = '1px red solid';
            errorsArray.push(firstPassLabel);
            errorsArray.push(secondPassLabel);
            checkS = false;
        }
        if (arrPass.length >= 6 && passElFirst.value === passElSecond.value) {
            passElFirst.style.border = '1px green solid';
            passElSecond.style.border = '1px green solid';
            checkS = true;
            
        }
        if(checkbox.checked && checkF === true && checkS === true) {
            console.log("done");
            errorsArray.forEach(function (element) {
                element.style.color = "black";
        })}
         else {
            errorsArray.forEach(function (element) {
                element.style.color = "red";

            })
            e.preventDefault();

        }
        if (checkbox.checked === false) {
            e.preventDefault();
        }
    })
    
