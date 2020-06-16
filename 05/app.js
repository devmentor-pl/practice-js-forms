const formEl = document.querySelector('form');
const labelList = document.querySelectorAll('label');
const selectEl = formEl.querySelector('select');
const messegesEl = document.querySelector('ul');
//console.log(formEl, labelList, selectEl)
formEl.noValidate = true;

formEl.addEventListener('submit', function(e){
    e.preventDefault();
    //console.log('aaa')
    const firstName = e.target.elements.firstName//.value;
    const lastName = e.target.elements.lastName//.value;
    const street = e.target.elements.street//.value;
    const city = e.target.elements.city//.value;
    const flatNumb = e.target.elements.flatNumber.value;
    const houseNumb = e.target.elements.houseNumber.value;
    const zipEl = e.target.elements.zip.value
    const errorsArr = [];
    const correctArr = [];

    function checkValue(value){
        if(!isNaN(value.value) || value.value.length <2){
            errorsArr.push('błąd')
        }
        else{
            correctArr.push('ok')
        }
    }
    checkValue(firstName);
    checkValue(lastName);
    checkValue(street);
    checkValue(city);

    // if(!firstName || !isNaN(firstName) || firstName.length <2){
    //     errorsArr.push(e.target.elements.firstName)
    // }
    //  else{
    //    correctArr.push(e.target.elements.firstName) 
    // }

    // if(!lastName || !isNaN(lastName) || lastName.length <2){
    //     errorsArr.push(e.target.elements.lastName)
    // }
    // else{
    //     correctArr.push(e.target.elements.lastName) 
    //  }

    // if(!street || !isNaN(street) || street.length <2){
    //     errorsArr.push(e.target.elements.street)
    // }
    // else{
    //     correctArr.push(e.target.elements.street) 
    //  }

    // if(!city || !isNaN(city) || city.length <2){
    //     errorsArr.push(e.target.elements.city)
    // }
    // else{
    //     correctArr.push(e.target.elements.city) 
    //  }

    if(flatNumb<0){
        errorsArr.push('błąd');
    }
    else{
        correctArr.push(e.target.elements.flatNumber) 
     }

    if(houseNumb<1){
        errorsArr.push('błąd');
    }
    else{
        correctArr.push(e.target.elements.houseNumber) 
     }

    console.log(zipEl)
        if (!(zipEl.match('^[0-9]{2}\-[0-9]{3}$'))){
            //console.log('nie')
            errorsArr.push(e.target.elements.zip)
        }
        else{
            correctArr.push(e.target.elements.zip) 
         }

    const optionList =selectEl.querySelectorAll('option')
    optionList.forEach(function(el){
        //console.log(el.selected, el.innerText)
        //el.selected
        if(el.innerText ===  '' && el.selected === true){
            errorsArr.push('błąd1')
        }
        // else{
        //     correctArr.push('ok') 
        //  }
    })
    // console.log(errorsArr, zipEl )


        correctArr.forEach(function(el){
            //console.log(el)
            messegesEl.innerHTML = '';
            const infoLi = document.createElement('li');
            const infoP = document.createElement('p');
            infoP.innerText = "Dziękujemy za wypełnienie formularza !! :) "
        infoP.style.fontSize = '30px'
        infoLi.appendChild(infoP);
        messegesEl.appendChild(infoLi);
       // el.style.border = '2px solid green'
            })
            if(errorsArr.length>0){
                messegesEl.innerHTML = '';
        errorsArr.forEach(function(el){
            //console.log(el)
            //messegesEl.innerHTML = '';
            const newLi = document.createElement('li');
            newLi.classList.add('wrong')
            newLi.innerText = el;
            messegesEl.appendChild(newLi);
            //console.log(messegesEl)
            
        //el.style.border = '1px solid red'
            })
        }
    // if(errorsArr.length > 0){
    //     messegesEl.innerHTML = '';
    //     errorsArr.forEach(function(el){
    //         console.log(el)

    //         // const span = document.createElement('span')
    //         // span.innerText = 'popraw'
    //         // el.parentElement.appendChild(span)
    //         //el.style.border = '1px solid red'
    //         const newLi = document.createElement('li');
    //         newLi.classList.add('wrong')
    //         newLi.innerText = el;
    //         messegesEl.appendChild(newLi);
    //         console.log(messegesEl)
    //     })

    //  }
    // else if(correctArr.length > 0 && errorsArr.length === 0){
    //    // messegesEl.innerHTML ='';
    //     const infoLi = document.createElement('li');
    //     const infoP = document.createElement('p');
    //     infoP.innerText = "Dziękujemy za wypełnienie formularza !! :) "
    //     infoP.style.fontSize = '30px'
    //     infoLi.appendChild(infoP);
    //     messegesEl.appendChild(infoLi);
    //     correctArr.forEach(function(el){
    //         el.style.border = '2px solid green'
    //     })
    //}

})