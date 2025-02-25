class Validator {
    constructor(selectors, validateFn) {
        this.selectors = Array.isArray(selectors) ? selectors : [selectors];
        this.validate = validateFn;
        Validator.registry.push(this);
    }
}

Validator.registry = [];

class FormValidator {
    constructor(form, validators) {
        this.form = form;
        this.validators = validators;
    }

    resetLabelStyles() {
        this.form.querySelectorAll('label').forEach(label => label.style.color = '');
    }

    getErrors() {
        const errors = [];
        this.validators.forEach(validator => !validator.validate() && errors.push(...validator.selectors));
        return errors;
    }

    markErrors(errors) {
        errors.forEach(selector => {
            const input = this.form.querySelector(selector);
            const label = this.form.querySelector(`label[for="${input.id}"]`);
            if (label) label.style.color = 'red';
        });
    }

    validateForm() {
        this.resetLabelStyles();
        const errors = this.getErrors();
        if (errors.length > 0) {
            this.markErrors(errors);
            return false;
        }
        return true;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    if (!form) return;

    Validator.registry = [];

    new Validator('input#formLogin', () => {
        const emailValue = form.elements.login.value.trim();
        const emailRegex = /^\S+@\S+\.\S+$/;
        return emailRegex.test(emailValue);
    });

    new Validator(['input#formPass1', 'input#formPass2'], () => {
        const pass1 = form.elements.pass1.value;
        const pass2 = form.elements.pass2.value;
        return pass1.length > 6 && pass1 === pass2;
    });

    new Validator('input#formAccept', () => form.elements.accept.checked);

    const formValidator = new FormValidator(form, Validator.registry);

    form.addEventListener('submit', event => {
        event.preventDefault();
        if (formValidator.validateForm()) {
            console.log('done');
            form.reset();
        }
    });
});