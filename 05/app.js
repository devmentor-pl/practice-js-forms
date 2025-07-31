
const bodyEl = document.querySelector('body')
const formEl = document.querySelector('form');
const messagesList = formEl.querySelector('.messages')
const form = document.createElement('form')

formEl.remove()

const createNewForm = function() {
  const formFields = [
    {
      name: 'firstName',
      label: 'Imię',
      required: true,
      pattern: '^[a-zA-Z]+$',
    },
    {
      name: 'lastName',
      label: 'Nazwisko',
      required: true,
      pattern: '^[a-zA-Z]+$'
    },
    {
      name: 'street',
      label: 'Ulica',
      required: true,
      pattern: '^[a-zA-Z]+$'
    },
    {
      name: 'houseNumber',
      label: 'Numer budynku',
      type: 'number',
      required: true,
    },
    {
      name: 'flatNumber',
      label: 'Numer mieszkania',
      type: 'number',
    },
    {
      name: 'zip',
      label: 'Kod pocztowy',
      required: true,
      pattern: '^[0-9]{2}-[0-9]{3}$',
    },
    {
      name: 'city',
      label: 'Miasto',
      required: true,
      pattern: '^^[a-zA-Z]+$'
    },
    {
      name: 'voivodeship',
      label: 'Województwo',
      reguired: false,
      type: 'select',
      option: ['dolnoślaskie', 'inne']
    }
  ]

  form.addEventListener('submit', handleSubmit)
  form.setAttribute('novalidate', '')

  formFields.forEach (el => {
    const label = document.createElement('label')
    label.innerText = el.label

    const fieldEl = el.type === 'select' ?
      document.createElement('select')
      : document.createElement('input')
     
    
    fieldEl.setAttribute('type', el.type || 'text')
    fieldEl.setAttribute('name', el.name)
    fieldEl.setAttribute('required', el.required || false)

    if (el.pattern) {
      fieldEl.setAttribute('pattern', el.pattern)
    }

    label.appendChild(fieldEl)
    form.appendChild(label)

    if (el.type === 'select') {
      const selectEl = form.querySelector('select')

      optionList = el.option
      optionList.forEach(option => {
        const optionEl = document.createElement('option')
        optionEl.innerText = option
        selectEl.append(optionEl)
      })
    }    
  })

  const submitBtn = document.createElement('button')
  submitBtn.innerText = "Prześlij"
  submitBtn.type = 'submit'
  submitBtn.classList.add('button')

  form.appendChild(submitBtn)

  const ulEl = document.createElement('ul')
  document.body.append(ulEl)

  function handleSubmit(e) {
    e.preventDefault()
    const errors = []

    const formArr = Array.from(form)
    
    formArr.forEach(el => {
      const elValue = [el][0].value
      const labelEl = el.parentElement.innerText
      const elReq = el.getAttribute('required')
      const elPatternAtribute = el.hasAttribute('pattern')
      
      if (elReq === 'true' && elValue === '') {
        errors.push(`Wprowadź dane w polu ${labelEl}`)
        }
    
      if (elPatternAtribute === true) {
        const reg = new RegExp(el.pattern)
        if (!reg.test(elValue)) {
          errors.push(`Wprowadź właściwy format danych w polu ${labelEl}`)
        }
      }
    })
   
    ulEl.innerHTML = ''
    if (errors.length === 0) {
      alert('Dane wypełnine prawidłowo')

      formArr.forEach(element => {
        [element][0].value = ''
      })
    } else {
      errors.forEach(error => {
        const liEl = document.createElement('li')
        liEl.innerText = error

        ulEl.appendChild(liEl)
      })
    }
  } 
}

bodyEl.addEventListener('DOMContentLoaded', createNewForm)
createNewForm()

bodyEl.append(form)











