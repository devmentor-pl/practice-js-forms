const form = document.querySelector("form");
const firstName = document.querySelector("input[name=firstName]");
const lastName = document.querySelector("input[name=lastName]");
const street = document.querySelector("input[name=street]");
const houseNumer = document.querySelector("input[name=houseNumber]");
const flatNumber = document.querySelector("input[name=flatNumber");
const zip = document.querySelector("input[name=zip]");
const city = document.querySelector("input[name=city]");
const voivodeship = document.querySelector("select[name=voivodeship]");
const submitBtn = document.querySelector("input[type=submit]");
const ulEl = document.querySelector("ul");


submitBtn.addEventListener('click', (e) => {
    const errors = []
  
    if (firstName.value.length === 0) {
      errors.push('Musisz wypelnic pole z imieniem');
      changeBorderColor(firstName);
    } else {
        changeBackBorderColor(firstName);
    }

    if (lastName.value.length === 0) {
        errors.push('Musisz wypelnic pole z nazwiskiem');
        changeBorderColor(lastName);
    } else {
        changeBackBorderColor(lastName);
    }

    if (street.value.length === 0) {
        errors.push('Musisz wpisac nazwe ulicy');
        changeBorderColor(street);
    
    } else {
        changeBackBorderColor(street);
    }

    if ((isNaN(houseNumer.value)) || houseNumer.value <= 1) {
        errors.push('Musisz podac numer domu, ktora jest rowna lub wieksza niz 1');
        changeBorderColor(houseNumer);
    } else {
        changeBackBorderColor(houseNumer);
    }


    if ((isNaN(flatNumber.value)) || flatNumber.value <= 1) {
        errors.push('Musisz podac numer mieszkania, ktora jest rowna lub wieksza niz 1');
        changeBorderColor(flatNumber);
    } else {
        changeBackBorderColor(flatNumber)
    }

    if (city.value.length === 0) {
        errors.push('Musisz wpisac nazwe miasta')
        changeBorderColor(city);
    } else {
        changeBackBorderColor(city);
    }


    if (voivodeship.value.length === 0) {
        errors.push('Musisz wybrac jedno wojewodztwo')
        changeBorderColor(voivodeship);
    } else {
        changeBackBorderColor(voivodeship);
    }

    function isValidZipCode(zip) {
        const regex = new RegExp("[0-9]{2}-[0-9]{3}");
        if (!regex.test(zip.value)) {
            errors.push('kod pocztowy musi byc w odpowiednim formacie');
            changeBorderColor(zip);}
        else {
            changeBackBorderColor(zip);
        }
    }

    isValidZipCode(zip);

    if(errors.length > 0) {
        e.preventDefault();
        ulEl.innerHTML = '';
        errors.forEach(function(err) {
            const newLi = document.createElement('li');
            newLi.innerText = err;
            ulEl.appendChild(newLi);
            newLi.style.color = "red";
        });
    }


    if(errors.length === 0) {
        e.preventDefault();
        ulEl.innerHTML = '';
        alert("Brawo! Twoje dane zostaly wyslane!");
    }
  
});

function changeBorderColor(el) {
    el.style.border = "1px solid red"
}

function changeBackBorderColor(el) {
    el.style.border = "1px solid grey"
}


