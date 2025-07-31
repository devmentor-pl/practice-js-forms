// W momencie wysyłania danych zatrzymać domyślną akcję foormularza 
// oraz pobrać dane z jego pól
const ulEl = document.querySelector('ul');
const formEl = document.querySelector('form');
formEl.addEventListener('submit', function(e){
    e.preventDefault();
    const first = e.target.elements.firstName;
    const last = e.target.elements.lastName;
    console.log(first.value);
    console.log(last.value);
    if(first.value || last.value !=='') {
        const classEl = document.createElement('li');
        classEl.classList.add('user-list__person');
        classEl.innerText = first.value + ' ' + last.value;
        ulEl.appendChild(classEl);
        first.value = '';
        last.value = '';
}});




 

