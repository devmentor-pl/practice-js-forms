//walidacja - czy powinniśmy sprawdzać coś jeszcze poza kodem pocztowym?

const zipType = document.querySelector('[name="zip"]');
console.log(zipType);

zipType.addEventListener('input', checkNumber);
// numberTypes.forEach(function(num) {
//     num.addEventListener('input', checkNumber);
// })

function checkNumber(e) {
    //powinniśmy sprawdzić czy pattern jest zachowany
    const num = e.target.value;
    console.log(num);
    //sprawdź czy ma 6 znakow
    if(num.length = 6) {
        const numFirst = num.substr(0, 2);
        // console.log(numFirst);
        const dash = num.substr(2, 2);
        // console.log(dash);
        const numSecond = num.substr(3, 5);
        // console.log(numSecond);
    }
    // if(isNaN(num)) {
    //     e.target.style.border = '1px solid red';
    //     alert('Wprowadzono niepoprawną wartość');
    // } 
} 