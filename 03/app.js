const inputEl = document.querySelector('input[type="file"]')
const ulEl = document.querySelector('.images-list')
const liList = ulEl.children

inputEl.addEventListener('change', showImage)

function showImage(e) {

    for (let i = 0; i < e.target.files.length; i++) {
        const file = e.target.files[i]
    
        if (file && file.type.includes('image')) {
            
            // console.log(file.name);
            // console.log(file.size);
        
            const newLi = liList[0].cloneNode(true)
            newLi.classList.remove('images-list__item--prototype')
            
            const newLiChildrenList = newLi.children
            newLiChildrenList[0].innerText = file.name
            newLiChildrenList[2].innerText = ((file.size / 1024) / 1024).toFixed(2)
        
            const reader = new FileReader
        
            reader.onload = function(readerEvent) {
                newLiChildrenList[1].src = readerEvent.target.result
            }
        
            reader.readAsDataURL(file)
        
            ulEl.appendChild(newLi)
        }
    }

}