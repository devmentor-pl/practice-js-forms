const form = document.querySelector('form');
const messagesEl = document.querySelector('.messages');

form.setAttribute('novalidate', ''); 

form.addEventListener('submit', function(event) {
    messagesEl.innerHTML = '';
    const nameInput = document.querySelector('input[name="firstName"]');
    const nameValue = nameInput.value.trim();

    if (nameValue === '') {
        errorHandle(event); 
    }
});

function errorHandle(event) {
    event.preventDefault();
    const errorMsg = document.createElement('div');
    errorMsg.classList.add('error-msg');
    errorMsg.textContent = 'Proszę wprowadź poprawne dane';
    messagesEl.appendChild(errorMsg);
}
