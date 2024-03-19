//BŁAD linia 14
const input = document.querySelector('input'); //ok

const newItem = document.querySelector('.images-list__item--prototype').cloneNode(true);
newItem.style.display = 'block';

//nasłuchiwanie na 'change'
input.addEventListener('change', function(e) {
    const file = e.target.files[0]; // do wyjaśnienia
    console.log(file);
    console.log(e.target.value);
    
    // dodaję do tablicy pobrane pliki
    const fileList = [];
    const fileDownloaded = file.type.includes['image']; // BŁąD undefined
    console.log(fileDownloaded);
    fileList.push(fileDownloaded); //ok
    
    //dodaję pobrane pliki do newItem
    fileList.forEach(function (file) {
        newItem.setAttribute('src', file);
    })
    console.log(newItem); //ok
})
