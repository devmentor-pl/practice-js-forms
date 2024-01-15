const imagesList = document.querySelector('.images-list');
const inputEl = document.querySelector('input[type="file"]');

inputEl.addEventListener('change', function(e) {
    const capturedImg = e.target.files[0];
    if (capturedImg && capturedImg.type.includes('image')) {
        console.log('Przechwycono obraz', capturedImg);
    }
});