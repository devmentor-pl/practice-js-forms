const inputBtn = document.querySelector('input');


inputBtn.addEventListener('change', function(event) {
    const pliki = event.target.files; //zwraca się do właściwości pola html input=file i zwraca liste Filelist z polami lastModified, lastModifiedDate, name, size, type
    console.log(pliki)
    const imagesList = document.querySelector('.images-list');
    const prototype = document.querySelector('.images-list__item--prototype');

    for (const file of pliki) {
        if (file.type.includes('image')) {
            const clone = prototype.cloneNode(true);  
            clone.classList.remove('images-list__item--prototype');
            clone.querySelector('.images-list__item-name').textContent = file.name;
            clone.querySelector('.images-list__item-img').src = URL.createObjectURL(file);
            clone.querySelector('.images-list__item-size').textContent = (file.size / 1000000).toFixed(2) + ' MB';
            imagesList.appendChild(clone);
        }
    }
});
