const resetForm = (formInputs, container) => {
    for (const input of formInputs) {
        if (input.type !== 'submit') {
            input.value = ''
            if (input.type === 'checkbox') {
                input.checked = false
            }
        } else if (input.type === 'submit') {
            input.disabled = true
            setTimeout(() => {
                container.remove()
                input.disabled = false
            }, 3000)
        }
    }
}

export default resetForm