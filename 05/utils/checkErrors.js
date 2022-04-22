const checkErrors = (input, validatorName, formData) => {
    let hasError
    Object.entries(validatorName).forEach(errorState => {
        const inputResponseValue = input.type === 'checkbox' ? input.checked : input.value
        if (!errorState[1].operation(inputResponseValue)) {
            formData.errors = {
                ...formData.errors,
                [input.name]: {
                    msg: validatorName[errorState[0]].responseMsg
                }
            }
            hasError = true
        } else {
            hasError = false
        }
    })
    return hasError
}

export default checkErrors