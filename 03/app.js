const fileEl = document.querySelector('input[type="file"]');
const filesUl = document.querySelector('ul');

fileEl.addEventListener('change', displayFile);

function displayFile(e) {
    const filesList = e.target.files;
    const fileContainerTemplate = document.querySelector('.images-list__item--prototype');
   
    for(let i=0; i<filesList.length; i++) {
        const file = filesList[i];

        if(file.type.includes('image')) {
            const reader = new FileReader();

            reader.onload = function(readerEvent) {
                const fileContainer = createFileContainer();
                const fileName = file.name;
                const fileSizeMB = (file.size / 1000000).toFixed(2);

                displayImage();
                /////////////////////////functions:
                function createFileContainer() {
                    const fileContainer = fileContainerTemplate.cloneNode(true);
                    
                    fileContainer.classList.remove('images-list__item--prototype');
                    return fileContainer;
                }

                function displayImage() {
                    const fileHeader = fileContainer.querySelector('header');
                    const fileImg = fileContainer.querySelector('img');
                    const fileFooter = fileContainer.querySelector('footer');

                    fileHeader.innerText = fileName;
                    fileImg.setAttribute('src', readerEvent.target.result);
                    fileFooter.innerText = fileSizeMB + ' MB';
                    filesUl.appendChild(fileContainer);
                }
            }
            reader.readAsDataURL(file);
        }
    }
}