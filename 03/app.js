document.addEventListener('DOMContentLoaded', function() {
    const fileInput = document.querySelector('input[type="file"]');
    const imagesList = document.querySelector('.images-list');
    const prototype = document.querySelector('.images-list__item--prototype');

    fileInput.addEventListener('change', function(event) {

        imagesList.querySelectorAll(':not(.images-list__item--prototype)').forEach(item => item.remove());

        for (const file of fileInput.files) {
            if (file.type.includes('image')) {
                const newImageItem = prototype.cloneNode(true);
                newImageItem.classList.remove('images-list__item--prototype');
                newImageItem.style.display = 'block';

                const header = newImageItem.querySelector('.images-list__item-name');
                if (header) {
                    header.textContent = file.name;
                }

                const size = (file.size / (1024 * 1024)).toFixed(2);
                const footer = newImageItem.querySelector('.images-list__item-size');
                if (footer) {
                    footer.textContent = `${size} MB`;
                }

                const img = newImageItem.querySelector('.images-list__item-img');
                const reader = new FileReader();
                reader.onload = function(e) {
                    if (img) {
                        img.src = e.target.result;
                    }
                }
                reader.readAsDataURL(file);

                imagesList.appendChild(newImageItem);
            }
        }
    });
});
