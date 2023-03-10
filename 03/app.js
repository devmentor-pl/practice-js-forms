document.addEventListener('DOMContentLoaded', init);

function init() {
    const inputFile = document.querySelector('input');
    if(inputFile) {
        inputFile.addEventListener('change', handleChange);
    }
}

function handleChange(e) {
    const prototypeLi = document.querySelector('.images-list__item--prototype');    
    const ul = document.querySelector('.images-list');
    const filesList = Array.from(e.target.files);
    
    filesList.forEach(file => {
        if(file.type.indexOf('image') >= 0) {
            const newLi = prototypeLi.cloneNode(true);
            const headerEl = newLi.querySelector('header');
            const footerEl = newLi.querySelector('footer');
            const imgEl = newLi.querySelector('img');

            const reader = new FileReader();
            reader.addEventListener('load', function (e) {
                headerEl.innerText = file.name;
                footerEl.innerText = (file.size / (1024 * 1024)).toFixed(2) + 'MB';            
                newLi.classList.remove('images-list__item--prototype');
                ul.appendChild(newLi);

                const img = e.target.result;
                imgEl.src = img;
            })
            reader.readAsDataURL(file);  
        } else {
            alert('Zaladowany plik o nazwie ' + file.name + ' nie jest plikiem graficznym.');
        }
    });

}