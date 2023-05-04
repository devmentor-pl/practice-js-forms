const formEl = document.querySelector('form')

formEl.addEventListener('submit', isCorrectData)

function isCorrectData(e) {
    e.preventDefault()
    e.target.setAttribute('noValidate', '')
    const errors = []
    let formPass1Incorrect = false
    let formPass1Value = ''

    // for (let i = 0; i < 4; i++) {
    //     console.log(e.target.elements[i]);
    // }

    for (const input of formEl) {

        const label = input.previousElementSibling

        if (input.id !== '') {
            const inputLabel = input.previousElementSibling
            inputLabel.style.color = 'black'
        }

        if (!input.value.includes('@') && input.id === 'formLogin') {
            // console.log('Email needs @ sign!');
            errors.push(label)
        }

        if (input.id === 'formPass1') {
            formPass1Value = input.value
            if (!(input.value.length > 6)) {
                // console.log('Password must have at least 7 characters');
                formPass1Incorrect = true
                errors.push(label)
            }
        }

        if ((formPass1Value === '' && input.id === 'formPass2') ||
            (input.id === 'formPass2' && formPass1Value !== input.value) ||
            (input.id === 'formPass2' && formPass1Incorrect)) {
            // console.log('Wrong Second Password');
            errors.push(label)
        }

        if (!input.checked && input.id === 'formAccept') {
            // console.log('You need accept regulations');
            errors.push(label)
        }
    }

    if (errors.indexOf(errors[0]) === -1) {
        console.log('Done');
    }

    errors.forEach(function (input) {
        input.style.color = 'red'
    })

}