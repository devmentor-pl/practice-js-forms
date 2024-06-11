const fileEl = document.querySelector('input');
const ulList = document.querySelector('.images-list');

fileEl.addEventListener('change', function(e) {
    const files = Array.from(e.target.files);

    files.forEach(function(file){
        if(file.type.includes('image')) {
            const clonedNode = ulList.querySelector('.images-list__item--prototype').cloneNode(true)
            const clonedHeader = clonedNode.querySelector('.images-list__item-name')
            const clonedImg = clonedNode.querySelector('.images-list__item-img')
            const clonedFooter = clonedNode.querySelector('.images-list__item-size')
            clonedNode.classList.remove('images-list__item--prototype')
            
            const fr = new FileReader();
            fr.onload = function(readerEvent) {
                clonedHeader.textContent = file.name
                clonedImg.src = readerEvent.target.result
                const fileSizeMB = (file.size / (1024 * 1024)).toFixed(2) // nie znalazlem innego sposobu, a ten nie dziala
                clonedFooter.textContent = `${fileSizeMB} MB`
                ulList.appendChild(clonedNode)
            }
            fr.readAsDataURL(file)
        }
    });
});

