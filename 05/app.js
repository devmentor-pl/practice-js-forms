class FieldValidator {
    constructor(fieldName, validateFn, errorMsg) {
        this.fieldName = fieldName;
        this.validateFn = validateFn;
        this.errorMsg = errorMsg;
    }

    validate(formData) {
        const value = (formData.get(this.fieldName) || '').toString().trim();
        return this.validateFn(value);
    }
}

const requiredValidator = displayName => ({
    fn: value => value.trim() !== '',
    error: `${displayName} is required.`
});

const numericValidator = displayName => ({
    fn: value => value === '' || !isNaN(value),
    error: `${displayName} must be numeric.`
});

const patternValidator = (displayName, pattern, errorMsg) => ({
    fn: value => value === '' || pattern.test(value.trim()),
    error: errorMsg || `${displayName} is invalid.`
});

const createFieldValidator = (fieldName, strategy) => new FieldValidator(fieldName, strategy.fn, strategy.error);

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const messagesList = document.querySelector('.messages');
    if (!form || !messagesList) return;

    form.setAttribute('novalidate', true);

    const validators = [
        createFieldValidator('firstName', requiredValidator('First Name')),
        createFieldValidator('lastName', requiredValidator('Last Name')),
        createFieldValidator('street', requiredValidator('Street')),
        createFieldValidator('houseNumber', requiredValidator('House Number')),
        createFieldValidator('houseNumber', numericValidator('House Number')),
        createFieldValidator('flatNumber', numericValidator('Flat Number')),
        createFieldValidator('zip', requiredValidator('Postal Code')),
        createFieldValidator('zip', patternValidator('Postal Code', /^[0-9]{2}-[0-9]{3}$/, 'Postal code must be in format XX-XXX.')),
        createFieldValidator('city', requiredValidator('City')),
        createFieldValidator('voivodeship', requiredValidator('Voivodeship'))
    ];

    const resetErrorMessages = () => messagesList.innerHTML = '';

    form.addEventListener('submit', event => {
        event.preventDefault();
        resetErrorMessages();
        const formData = new FormData(form);
        const errors = [];

        validators.forEach(validator => !validator.validate(formData) && errors.push(validator.errorMsg));

        if (errors.length > 0) {
            errors.forEach(msg => {
                const li = document.createElement('li');
                li.textContent = msg;
                messagesList.appendChild(li);
            });
        } else {
            alert("Form has been successfully submitted!");
            form.reset();
        }
    });
});