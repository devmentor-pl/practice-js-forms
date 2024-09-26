const validateOperations = (operationName, inputValue, requireValue) => {
    switch (operationName) {
        case 'require':
            // console.log('require', inputValue, inputValue.length)
            return inputValue.length > 0
        case 'string':
            // console.log('string', inputValue.length, isNaN(Number(inputValue)))
            return inputValue.length > 0 && isNaN(Number(inputValue))
        case 'number':
            // console.log('number', inputValue.length, !isNaN(Number(inputValue)))
            return inputValue.length > 0 && !isNaN(Number(inputValue))
        case 'integer':
            // console.log('number', Number.isInteger(Number(inputValue)))
            return Number.isInteger(Number(inputValue))
        case 'minLength':
            // console.log('minLength', inputValue.length > requireValue)
            return inputValue.length > requireValue
        case 'pattern':
            // console.log('pattern', requireValue.test(inputValue))
            return inputValue.length > 0 && requireValue.test(inputValue)
        /* case 'checkbox':
             // console.log('checkbox ', inputValue)
             return inputValue === true */
        default:
            return null
    }
}

export default validateOperations