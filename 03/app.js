const fileInput = document.querySelector('input[type="file"]');

fileInput.addEventListener('change', function(event) {
    handleFileSelection(event);
    function handleFileSelection(event) {
        const files = event.target.files;
    
        for (const file of files) {
            if (isImageFile(file)) {
                const fileItem = createFileItem(file);
                appendToFileList(fileItem);
            }
        }
    }
    
    function isImageFile(file) {
        return file.type.includes('image');
    }
    
    function createFileItem(file) {
        const prototype = document.querySelector('.images-list__item--prototype');
        const clone = prototype.cloneNode(true);
    
        clone.classList.remove('images-list__item--prototype');
    
        clone.querySelector('.images-list__item-name').innerText = file.name;
        clone.querySelector('.images-list__item-size').innerText = formatFileSize(file.size);
    
        return clone;
    }
    
    function formatFileSize(sizeInBytes) {
        return (sizeInBytes / (1024 * 1024)).toFixed(2) + ' MB';
    }
    
    function appendToFileList(item) {
        document.querySelector('.images-list').appendChild(item);
    }
    
});

