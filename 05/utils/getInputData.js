import checkErrors from "./checkErrors.js"
import getValueByType from "./getValueByType.js"

const getInputData = (input, validators, formData) => {
    let currentError
    if (validators[input.name]) {
        currentError = checkErrors(input, validators[input.name], formData)
    }
    if (!currentError) {
        formData.data = {
            ...formData.data,
            [input.name]: getValueByType(input)
        }
    }
    return formData
}

export default getInputData