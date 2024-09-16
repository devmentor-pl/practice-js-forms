document.addEventListener('DOMContentLoaded', init);

function init() {
    const formEl = document.querySelector('form');
    const ulEl = document.querySelector('.messages')

    if(formEl) {
       formEl.addEventListener('submit', handleSubmit);
    }

    function handleSubmit(e) {
        e.preventDefault();

        const formArray = [
            {name: "firstName",label: 'Imię', required: true},
            {name: "lastName",label: 'Nazwisko', required: true},
            {name: "street",label: 'Ulica', required: true},
            {name: "houseNumber",label: 'Numer budunku',type: "number", required: true},
            {name: "flatNumber",label: 'Numer mieszkania',type: "number", required: false},
            {name: "zip",label: 'Kod pocztowy',pattern: "[0-9]{2}-[0-9]{3}", required: true},
            {name: "city",label: 'Miejscowość', required: true},
            {name: "voivodeship",label: 'Województwo', required: true},
        ];

        ulEl.innerText = '';
        const errors = [];

        
        formArray.forEach(function(item) {
            const value = formEl.elements[item.name].value;
            const required = item.required;
            if(required) {
                if(value === '') {
                    errors.push(`pole ${item.label} musi być uzupełnione`);
                }

                if(item.type === 'number') {
                    if(Number.isNaN(Number(value))) {
                        errors.push(`pole ${item.label} musi być liczbą`);
                    }
                }
               
                if(item.pattern) {
                    const reg = new RegExp(item.pattern)
                    if(!reg.test(value)) {
                        errors.push(`pole ${item.label} musi być w formacie 00-000`)
                    }
                }
            }
        })

        if(errors.length > 0) {
            errors.forEach(function(error) {
                const newLi = document.createElement('li');
                newLi.innerText = error;
                ulEl.appendChild(newLi)
            })
            
        } else {
            alert('dane zostały wysłane prawidłowo')
        }
    }
    
}