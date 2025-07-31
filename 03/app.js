document.addEventListener("DOMContentLoaded", init)

function init() {
    console.log('dom loaded')
    const inputEl = document.querySelector('.files>input');
    
    inputEl.addEventListener('change', changeHandler);
    
}
function changeHandler(e) {
    const fileList = [...e.target.files];
    const ulEl = document.querySelector('.images-list')
    fileList.forEach(function(fileEl) {
        if(fileEl.type.includes('image')) {
            const newLi = createNewLiFromPrototype();
        
            const newLiName = newLi.children[0]
            const newLiSrc = newLi.children[1]
            const newLiSize = newLi.children[2]
            newLiName.innerText = fileEl.name;
            newLiSize.innerText = (fileEl.size/(1024*1024)).toFixed(2) + 'MB';
            ulEl.appendChild(newLi)

            const reader = new FileReader();

            reader.addEventListener('load', function() {
                newLiSrc.src = this.result;
            })

            reader.readAsDataURL(fileEl)

        } else {
            // e.preventDefault()
            console.log('ten obrazek o nazwie ' + fileEl.name + ' nie jest plikiem graficznym')
        }
    });
}

function createNewLiFromPrototype() {
    const LiPrototypeEl = document.querySelector('.images-list__item--prototype');
    const newLiEl = LiPrototypeEl.cloneNode(true)
    newLiEl.classList.remove('images-list__item--prototype');
    
    return newLiEl  
}