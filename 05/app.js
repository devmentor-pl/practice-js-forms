const initForm = {action: "", method: "post", noValidate: true};
const fields = [
    {name: "firstName", label: "Imię", type: "text", pattern: '^[a-zA-Z –-]+$', required: true},
    {name: "lastName", label: "Nazwisko", type: "text", pattern: '^[a-zA-Z –-]+$', required: true},
    {name: "street", label: "Ulica", type: "text", required: true},
    {name: "houseNumber", label: "Numer budynku", type: "number", required: true},
    {name: "flatNumber", label: "Numer Mieszkania", type: "number", required: true},
    {name: "zip", label: "Kod pocztowy", pattern: /[0-9]{2}-[0-9]{3}/,  required: true},
    {name: "city", label: "Miejscowość", type: "text", required: true},
    {
        name: "voivodeship", 
        label: "Województwo", 
        type: "select", 
        required: true,
        options: ["", "dolnośląskie", "kujawsko-pomorskie", "lubelskie", "lubuskie", "łódzkie", "małopolskie",
         "mazowieckie", "opolskie", "podkarpackie", "podlaskie", "pomorskie", "śląskie", "świętokrzyskie",
         "warmińsko-mazurskie", "wielkopolskie", "zachodniopomorskie"]
    },
    {
        name: "sex", 
        label: "Płeć", 
        type: "select", 
        required: true,
        options: ["", "male","female"],
    },
    {name: "value", type:"submit", label: ""}
]

//execute form creation
createForm(fields, initForm);



//form creation subfunctions

function createForm(sourceArray, initFormObject) {
    createFormFrame(initFormObject)
    createFields(sourceArray);

}
//form with ul for errors on the top
function createFormFrame(initForm) {
    const newForm = document.createElement('form');
    for(const formProperty in initForm) {
        newForm.setAttribute(formProperty, initForm[formProperty]);
    }
    appendErrorListFrameTo(newForm);
    document.body.appendChild(newForm);
    newForm.addEventListener('submit', checkFieldsData);
}

function appendErrorListFrameTo(newForm) {
    const newList =  document.createElement('ul');
    newList.classList.add('messages');
    newForm.appendChild(newList)
}



//form's fields with  properties from source array
function createFields (sourceArray) {
    sourceArray.forEach(function(fieldSourceObject){
        //create div first
        const newDiv = document.createElement('div');
        document.forms[0].appendChild(newDiv);
        

        //checks for select field
        let typeOfField;
        if(fieldSourceObject.type!=="select"){
            typeOfField='input'
        } else {
            typeOfField='select'
        }
        const newField = document.createElement(typeOfField);
       
        //objects w/o label (e.g submit) are appended directly to parent div
        if (fieldSourceObject.label) {
            const newLabel = document.createElement('label');
            newLabel.innerText =  fieldSourceObject.label;
            newDiv.appendChild(newLabel);
            newLabel.appendChild(newField);
        } else {
            newDiv.appendChild(newField);
        }

        //"fills in" fields with properties (<select> included)
        for(const fieldProperty in fieldSourceObject) {
            if (fieldProperty!=="options") {
                newField.setAttribute(fieldProperty, fieldSourceObject[fieldProperty]);
            } else {
                fieldSourceObject[fieldProperty].forEach(function(option){
                    const newOption = document.createElement('option');
                    newField.appendChild(newOption);
                    newOption.setAttribute('value', option);
                    newOption.innerText = option;
                }) 
            }
        }
    })
}




//submit event handler




function checkFieldsData(e) {
    const formEl = document.forms[0];
    const messages = document.querySelector('.messages');
    e.preventDefault();
    messages.innerHTML="" ;
    const errors =[];
  

    fields.forEach(function(field){
        
        const {name, label, type="text", pattern, required=false, } = field;
        const value = formEl.elements[name].value;
        
    //Validation
        if(required) {
           if(value.length === 0) {
                pushToErrorsList(`Field ${label} is empty!`,name)
           } 
        }

        if(pattern) {
            const reg = new RegExp(pattern);
            if(!reg.test(value)) {
                pushToErrorsList(`Field ${label} contains invalid characters or data format!`, name);
            }
        }
        
        if(type === "checkbox"){
            const checked = (formEl.elements[name].checked);
            if(!checked) {
                pushToErrorsList("You have to accept policy in order to join our community!", name)
            }
        }
    })

    handleErrorsLists(); 

    function pushToErrorsList(message) {
        errors.push(message);
    }

    function handleErrorsLists () {
        if (errors.length > 0) {
            createErrorsListItems();
        } else {
            console.log('done');
        //cleans form fields
            fields.forEach(function(el) {
                formEl[el.name].value = ''
            })
        } 
    }

    function createErrorsListItems() {
            errors.forEach(function(error){
                const newLi = document.createElement('li');
                newLi.innerText = error;
                newLi.style.backgroundColor = 'red';
                messages.appendChild(newLi);
            })
    }

    
}  













