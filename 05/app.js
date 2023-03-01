document.addEventListener('DOMContentLoaded', init)

function init() {
	const formEl = document.querySelector('form')
	const messageList = document.querySelector('.messages')

	if (formEl) {
		formEl.addEventListener('submit', function (e) {
			e.preventDefault()
			handleSubmit(e)
		})
	}

	function handleSubmit(e) {
		const errors = []

		const fields = [
			{
				name: 'firstName',
				label: 'Imię',
				required: true,
				pattern: '^[a-zA-Z --]+$',
			},
			{
				name: 'lastName',
				label: 'Nazwisko',
				required: true,
				pattern: '^[a-zA-Z --]+$',
			},
			{
				name: 'street',
				label: 'Ulica',
				required: true,
			},
			{
				name: 'houseNumber',
				label: 'Numer budynku',
				required: true,
				type: 'number',
			},
			{
				name: 'flatNumber',
				label: 'Numer mieszkania',

				type: 'number',
			},
			{
				name: 'zip',
				label: 'Kod pocztowy',
				pattern: '^[0-9]{2}-[0-9]{3}$',
				required: true,
			},
			{
				name: 'city',
				label: 'Miasto',
				pattern: '^[a-zA-Z –-]+$',
				required: true,
			},
			{
				name: 'voivodeship',
				label: 'Województwo',
				required: true,
			},
		]

		fields.forEach(function (field) {
			const value = formEl.elements[field.name].value

			if (field.required === true) {
				if (value.length === 0) {
					errors.push(`Dane w polu '${field.label}' są wymagane`)
				}
			}

			if (field.type === 'number') {
				if (Number.isNaN(Number(value))) {
					errors.push(`Dane w polu '${field.label}' muszą być liczbą!`)
				}
			}

			if (field.pattern) {
				const reg = new RegExp(field.pattern)

				if (!reg.test(value)) {
					errors.push(
						`Dane w polu '${field.label}' zawierają niedozwolone znaki. `
					)
				}
			}
		})

		messageList.innerHTML = ''
		if (errors.length === 0) {
			alert('Dane zostały wypełnione prawidłowo')
			fields.forEach(function (el) {
				formEl[el.name].value = ''
			})
		} else {
			errors.forEach(function (text) {
				const liEl = document.createElement('li')
				liEl.innerText = text
				messageList.appendChild(liEl)
			})
		}
	}
}
