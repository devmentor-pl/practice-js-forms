document.addEventListener('DOMContentLoaded', init);

function init(){
    
    const formEl = document.querySelector('form');
    const ulEl = document.querySelector('.messages');

    if(formEl){
        formEl.addEventListener('submit', handleSubmit);
        formEl.noValidate = true;

        function handleSubmit(e){
            e.preventDefault();

            const fields = [
                {name: 'firstName', label: 'imię'},
                {name: 'lastName', label: 'nazwisko'},
                {name: 'street', label: 'ulica'}, 
                {name: 'houseNumber', label: 'numer budynku', type: 'number'},
                {name: 'flatNumber', label: 'numer mieszkania', type: 'number'},
                {name: 'zip', label: 'kod pocztowy', pattern: '[0-9]{2}-[0-9]{3}'},
                {name: 'city', label: 'miejscowość'},
                {name: 'voivodeship', label: 'województwo'},
            ]
            
            const errors = [];

            fields.forEach(function(f){
                
                const fieldName = formEl.elements[f.name];
                const fieldValue = formEl.elements[f.name].value;
                const fieldLabel = f.label;
                
                if(fieldName.required){
                    if(fieldValue.length === 0) {
                        errors.push('Pole ' + fieldLabel + ' jest niepoprawne!');
                    }
                }
                if(f.type === 'number'){
                    if(Number.isNaN(Number(fieldValue))){
                        errors.push('Pole' + fieldLabel + ' powinno być liczbą!');
                    }
                }
                if(f.pattern){
                    const reg = new RegExp(f.pattern);
                    if(!reg.test(fieldValue)){
                        errors.push('Pole ' + fieldLabel + ' ma niepoprawną formę!');
                    }
                }
            });

            if(errors.length === 0){
                alert('Dane zostały prawidłowo przesłane!')
            } else {
                ulEl.innerText='';
                errors.forEach(function(message){
                    const newLi = document.createElement('li');
                    newLi.innerText = message;
                    ulEl.appendChild(newLi);
                });
            }
        }                       
    }    
}