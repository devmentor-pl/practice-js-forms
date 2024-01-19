const formEl = document.querySelector('form');
// Znajdź formularz na stronie

formEl.addEventListener('submit', function(e) {
    // Nasłuchuj zdarzenia submit na formularzu
    e.preventDefault();
    // Zablokuj domyślną akcję formularza (przeładowanie strony)

    // Inicjalizacja tablicy do przechowywania błędów
    let errors = [];

    const email = e.target.elements.login.value;
    const pass1 = e.target.elements.pass1.value;
    const pass2 = e.target.elements.pass2.value;
    const checkbox = e.target.elements.accept;

    // Walidacja pola email: Jeśli nie zawiera '@', dodaj błąd do tablicy
    if (!email.includes('@')) {
        errors.push('formLogin');
    }

    // Walidacja pola hasła 1: Jeśli długość jest mniejsza niż 6, dodaj błąd do tablicy
    if (pass1.length < 6) {
        errors.push('formPass1');
    }

    // Walidacja pola hasła 2: Jeśli długość jest mniejsza niż 6, dodaj błąd do tablicy
    if (pass2.length < 6) {
        errors.push('formPass2');
    }

    // Walidacja zgodności haseł: Jeśli hasła nie są takie same, dodaj błędy do tablicy
    if (pass1 !== pass2) {
        errors.push('formPass1');
        errors.push('formPass2');
    }

    // Walidacja checkboxa: Jeśli nie jest zaznaczony, dodaj błąd do tablicy
    if (!checkbox.checked) {
        errors.push('formAccept');
    }

    // Jeśli nie ma żadnych błędów, wyświetl "done" w konsoli
    if (errors.length === 0) {
        console.log('done');
    }

    // Przekaż tablice błędów do funkcji obsługującej błędy
    console.log(errors);
    handleErrors(errors);
});

// Funkcja obsługująca błędy
function handleErrors(array) {
    // Zresetuj kolory wszystkich labeli
    let allLabels = document.querySelectorAll('label');
    allLabels.forEach(function(label) {
        label.style.color = ''; // Ustaw pusty string, aby przywrócić domyślny kolor
    });

    // Ustaw kolor tylko dla błędnych labeli
    array.forEach(function(id) {
        let label = document.querySelector(`label[for="${id}"]`);
        if (label) {
            label.style.color = 'red';
        }
    });
}
