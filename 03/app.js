const fileEl = document.querySelector('input');
fileEl.addEventListener('change', showImage);

function showImage(e){
    const numOfFiles = e.target.files.length;

    for(let i = 0; i < numOfFiles; i++){
        const file = e.target.files[i];

        if(file && file.type.includes('image')){

            const reader = new FileReader();
            const ul = document.querySelector('.images-list');
            const listItemPrototype = document.querySelector('.images-list__item--prototype');
            const listItemEl = listItemPrototype.cloneNode(true);

            listItemEl.classList.remove('images-list__item--prototype');

                reader.onload = function(readerEvent){
                    const imgEl = listItemEl.querySelector('img');
                    const headerEl = listItemEl.querySelector('header');
                    const footerEl = listItemEl.querySelector('footer');

                    imgEl.src = readerEvent.target.result;
                    headerEl.textContent = file.name;
                    footerEl.textContent = (file.size/1000000).toFixed(2);
                }
        
            ul.appendChild(listItemEl);

            reader.readAsDataURL(file);
        }
    }
}