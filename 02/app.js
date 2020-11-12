const emailLabel = document.getElementById("formLogin");
const firstPassLabel = document.getElementById("formPass1");
const secondPassLabel = document.getElementById("formPass2");
const acceptLabel = document.getElementById("formAccept");
const errorsArray = [];
const formElement = document.querySelector("form");
const inputEl = document.getElementById('formLogin');
inputEl.addEventListener('input', validationFunc);
    function validationFunc(e) {
        const target = e.target;
        const email = target.value;
        if(email.includes('@')) {
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
    let checkArr = [];
    passElFirst.addEventListener('blur', passFunc);
    passElSecond.addEventListener('blur', passFunc);
    function passFunc(e) {
        const target = e.target;
        const pass = target.value;
        const passArr = Array.from(pass);
        if(passArr.length < 6) {
            target.style.border = '1px red solid';
            check = false;
            checkSec = false;
            errorsArray.push(firstPassLabel);

        }
        else if (passElFirst.value !== passElSecond.value) {
            target.style.border = '1px red solid';
            check = false;
            checkSec = false;
        }
         
        else {
            target.style.border = '1px green solid';
            passElSecond.style.border = '1px green solid';
            check = true;
            checkSec = true;

        }
        
        if (passElFirst.value === "" || passElSecond.value === "") {
            passElFirst.style.border = '1px red solid';
            passElSecond.style.border = '1px red solid';
            check = false;
            checkSec = false;
        }
        if (check === true) {
            passElFirst.style.border = '1px green solid';
            passElSecond.style.border = '1px green solid';
        }
        //if ()
        checkArr.push(check);
        checkArr.push(checkSec);
        return check;

    }
    function passFuncSec(e) {
        const target = e.target;
        const pass = target.value;
        const passArr = Array.from(pass);
        if(passArr.length < 6) {
            target.style.border = '1px red solid';
            checkArr[1] = false;
            errorsArray.push(secondPassLabel);

        }
        else if (passElFirst.value !== passElSecond.value) {
            target.style.border = '1px red solid';
            checkArr[1] = false;
        }
         
        else {
            target.style.border = '1px green solid';
            passElFirst.style.border = '1px green solid';
            checkArr[1] = true;

        }
        
        if (passElFirst.value === "" || passElSecond.value === "") {
            passElFirst.style.border = '1px red solid';
            passElSecond.style.border = '1px red solid';
            checkArr[1] = false;
        }
        if (checkSec === true) {
            passElFirst.style.border = '1px green solid';
            passElSecond.style.border = '1px green solid';
        }
        //if ()
        return checkArr;

    }
    const checkbox = document.getElementById("formAccept");
    checkbox.addEventListener( 'change', function(e) {
        let trueElements = 1;
        let allTrue = false;
        function checkEach(el, tEl) {
            
            checkArr.forEach(function (element) {
                if (element = true) {
                    tEl = tEl + 1;
                }
            });
            if (trueElements === 3) {
                el = true;
            }
            return el;
        }
        checkEach(allTrue, trueElements);
        if(this.checked && checkEach === true) {
            console.log("done")
        } else {
            console.log("che")
        }
    });
    
