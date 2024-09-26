const getValueByType = (input) => {
    if (input.type === 'checkbox') {
        return input.checked
    } else {
        return input.value
    }
}

export default getValueByType