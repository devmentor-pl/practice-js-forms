const form = document.querySelector('form');
const ul = document.querySelector('.user-list');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const { firstName, lastName } = e.target.elements;
    if (firstName.value !== '' && lastName.value !== '') {
      const newLI = document.createElement('li');
      newLI.classList.add('user-list__person');
      newLI.innerText = `${firstName.value} ${lastName.value}`;
      e.target.nextElementSibling.appendChild(newLI);
      firstName.value = '';
      lastName.value = '';
    } else {
      alert('Please enter your name and/or last name');
    }
  });
}