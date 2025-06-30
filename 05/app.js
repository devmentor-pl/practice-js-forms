document.addEventListener('DOMContentLoaded', init);

function init() {
  const form = document.querySelector('form');
  const message = document.querySelector('.messages');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    message.innerHTML = '';
    const errors = [];

    const firstName = form.elements.firstName.value.trim();
    const lastName = form.elements.lastName.value.trim();
    const street = form.elements.street.value.trim();
    const houseNumber = form.elements.houseNumber.value.trim();
    const flatNumber = form.elements.flatNumber.value.trim();
    const zip = form.elements.zip.value.trim();
    const city = form.elements.city.value.trim();
    const voivodeship = form.elements.voivodeship.value.trim();

    if (firstName === '') errors.push('Imię jest wymagane.');
    if (lastName === '') errors.push('Nazwisko jest wymagane.');
    if (street === '') errors.push('Ulica jest wymagana');
    if (houseNumber === '') errors.push('Numer budynku jest wymagany');
    if (zip === '') {
      errors.push('Kod pocztowy jest wymagany.');
    } else if (!/^\d{2}-\d{3}$/.test(zip)) {
      errors.push('Kod pocztowy musi być w formacie 00-000.');
    }
    if (city === '') errors.push('Miejscowość jest wymagana');
    if (voivodeship === '') errors.push('Województwo jest wymagane');

    if (errors.length > 0) {
      errors.forEach((err) => {
        const li = document.createElement('li');
        li.textContent = err;
        message.appendChild(li);
      });
    } else {
      const li = document.createElement('li');
      li.textContent = 'Dane zostały wysłane prawidłowo!';
      li.style.color = 'green';
      message.appendChild(li);
    }
  });
}
