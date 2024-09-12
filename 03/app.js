document.addEventListener('DOMContentLoaded', init);

function init() {
    const inputEl = document.querySelector('input');
    if(inputEl) {
        inputEl.addEventListener('change', handleChange)
    }
}
function handleChange(e) {
    const prototypeEl = document.querySelector('.images-list__item--prototype');
    const ulElement = document.querySelector('.images-list');

    const filesList = Array.from(e.target.files);

    filesList.forEach(function(file) {
        console.log(file);
        const liElement = prototypeEl.cloneNode(true);
        const headerEl = liElement.querySelector('header');
        const footerEl = liElement.querySelector('footer');
        const imageEl = liElement.querySelector('img');

        headerEl.innerText = file.name;
        footerEl.innerText = (file.size / (1024*1024)).toFixed(2) + 'MB';   
        liElement.classList.remove('images-list__item--prototype');
        ulElement.appendChild(liElement);

        const reader = new FileReader() 

        reader.addEventListener('load', function(e) {
            const image = e.target.result;
            imageEl.src = image;

        });
        reader.readAsDataURL(file)    
    });
}



  