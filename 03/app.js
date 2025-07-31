const fileEl = document.querySelector('input')
const fileUl = document.querySelector('.images-list')
const fileListPrototype = document.querySelector('.images-list__item--prototype')

fileEl.addEventListener('change', showImage)


function showImage(e) {
    const fileList = Array.from(e.target.files)
   
    fileList.forEach(function (file) {
        if(file && file.type.includes('image')) {
           const reader = new FileReader();
            
            reader.onload = function(readerEvent) {
                const newFileList = fileListPrototype.cloneNode(true)
                newFileList.classList.remove('images-list__item--prototype') 
                fileUl.appendChild(newFileList)

                const fileName = newFileList.querySelector('.images-list__item-name')
                const fileSize = newFileList.querySelector('.images-list__item-size')
                const fileImg = newFileList.querySelector('.images-list__item-img')
                
                fileImg.src = readerEvent.target.result;
                fileName.innerText = file.name
                fileSize.innerText =(file.size / (1024*1024)).toFixed(2) +'MB'
            }
        reader.readAsDataURL(file);
        } else {
            alert('Należy wybrać plik graficzny')
         }
    }
)}
