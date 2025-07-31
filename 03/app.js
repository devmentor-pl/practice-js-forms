const inputEl = document.querySelector('input');

if (inputEl) {
    inputEl.addEventListener('change', handleChange)
}

function handleChange(e) {
    const ulEl = document.querySelector('.images-list')
    const imagePrototypeEl = document.querySelector('.images-list__item--prototype')
    const files = Array.from(e.target.files);

    files.forEach(function (file) {
        if (file.type.indexOf('image') >= 0) {

            const liEl = imagePrototypeEl.cloneNode(true);
            const headerEl = liEl.querySelector('header');
            const footerEl = liEl.querySelector('footer');
            const imgEl = liEl.querySelector('img');

            const fileReader = new FileReader();
            fileReader.addEventListener('load', function (e) {
                headerEl.innerText = file.name;
                footerEl.innerText = (file.size / (1024 * 1024)).toFixed(2) + ' MB';
                liEl.classList.remove('images-list__item--prototype');
                ulEl.appendChild(liEl);
                const image = e.target.result;
                imgEl.src = image;
            });

            fileReader.readAsDataURL(file);
        } else {
            alert('Loaded file ' + file.name + ' is not an image type');
        }

    })
}
