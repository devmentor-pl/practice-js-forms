const checkErrors = (input, validatorName, formData) => {
    return Object.entries(validatorName).forEach(errorState => {
        const inputResponseValue = input.type === 'checkbox' ? input.checked : input.value
        const hasErrorOccurred = !errorState[1].operation(inputResponseValue)
        if (hasErrorOccurred) {
            formData.errors = {
                ...formData.errors,
                [input.name]: {
                    msg: validatorName[errorState[0]].responseMsg
                }
            }
            return true
        } else {
            return false
        }
    })
}

export default checkErrors