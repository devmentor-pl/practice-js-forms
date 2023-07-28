document.addEventListener('DOMContentLoaded', init);

function init() {
    const input = document.querySelector('input');
    const imagesList = document.querySelector('.images-list');
    input.addEventListener('change', showFiles);

    function showFiles(e) {
        const files = e.target.files;
        
        for (let i = 0; i < files.length; i++) {
            
            if(files[i].type.includes('image')) {

            const imagesListItemPrototype = document.querySelector('.images-list__item--prototype');
            const cloneImagesListItemPrototype = imagesListItemPrototype.cloneNode(true);
    
            const img = cloneImagesListItemPrototype.querySelector('img');
            const header = cloneImagesListItemPrototype.querySelector('header');
            const footer = cloneImagesListItemPrototype.querySelector('footer');            
                
            const reader = new FileReader();
            reader.addEventListener('load', function(e) {
                header.innerText = files[i].name;
                footer.innerText = (files[i].size / (1024*1024)).toFixed(2) + 'MB';
                cloneImagesListItemPrototype.classList.remove('images-list__item--prototype');
                imagesList.appendChild(cloneImagesListItemPrototype);
                    
                imgSrc = e.target.result;
                img.src = imgSrc;                
            });

            reader.readAsDataURL(files[i]);   
                         
            }
        }

    }
}