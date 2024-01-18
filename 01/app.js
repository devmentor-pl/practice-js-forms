// Znajdź formularz w dokumencie
const formEl = document.querySelector('form');

// Nasłuchuj na zdarzenie submit formularza
formEl.addEventListener('submit', function(e) {
    // Zatrzymaj domyślną akcję formularza
    e.preventDefault();

    // Pobierz dane z pól formularza
    const firstName = e.target.elements.firstName.value;
    const lastName = e.target.elements.lastName.value;

    if (firstName && lastName ) {
        // Stwórz nowy element <li> za pomocą funkcji pomocniczej
        const newLi = createLi(firstName, lastName);

        // Znajdź listę <ul>, do której chcesz dodać nowy element <li>
        const userLi = document.querySelector('ul');

        // Dodaj utworzony element <li> do listy <ul>
        userLi.appendChild(newLi);
    }
});

// Funkcja pomocnicza tworząca element <li> i dodająca klasy oraz dane użytkownika
function createLi(firstName, lastName) {
    // Utwórz nowy element <li>
    const newLi = document.createElement('li');

    // Dodaj klasę 'user-list__person' do nowego elementu
    newLi.classList.add('user-list__person');

    // Ustaw treść utworzonego elementu <li> na połączenie imienia i nazwiska
    newLi.textContent = `${firstName} ${lastName}`;

    // Zwróć utworzony element <li>
    return newLi;
};
