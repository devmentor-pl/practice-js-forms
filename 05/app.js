document.addEventListener("DOMContentLoaded", init)

function init () {
    const messages = document.querySelector('.messages')
    const form = document.querySelector('form')

    function lookCorect(event) {
        event.preventDefault()

        const firstName = form.elements.firstName.value;
        const lastName = form.elements.lastName.value;
        const street = form.elements.street.value;
        const houseNumber = form.elements.houseNumber.value;
        const flatNumber = form.elements.flatNumber.value;
        const zip = form.elements.zip.value;
        const city = form.elements.city.value;
        const voivodeship = form.elements.voivodeship.value;
        if (
            !firstName ||
            !lastName ||
            !street ||
            !houseNumber ||
            !zip ||
            !city ||
            !voivodeship
        ) {
            messages.innerHTML = 'Proszę wypełnić wszystkie wymagane pola.';
            return;
        }

        // Czy pole "Numer budynku" zawiera tylko liczby?
        if (!/^\d+$/.test(houseNumber)) {
            messages.innerHTML = 'Numer budynku powinien zawierać tylko liczby.';
            return;
        }

        // Czy pole "Numer mieszkania" zawiera tylko liczby (jeśli jest wypełnione)?
        if (flatNumber && !/^\d+$/.test(flatNumber)) {
            messages.innerHTML = 'Numer mieszkania powinien zawierać tylko liczby.';
            return;
        }

        // Czy kod pocztowy ma poprawny format XX-XXX?
        if (!/^\d{2}-\d{3}$/.test(zip)) {
            messages.innerHTML = 'Kod pocztowy powinien mieć format XX-XXX.';
            return;
        }

        // Wszystkie walidacje przeszły pomyślnie
        messages.innerHTML = 'Dane zostały wysłane prawidłowo.';
    
    }
    form.addEventListener('submit',lookCorect )
}





