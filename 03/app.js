class ImageListItem {
    constructor(file, prototypeElement, options = {}) {
        this.file = file;
        this.prototypeElement = prototypeElement;
        this.formatFileSize = options.formatFileSize || ImageListItem.defaultFormatFileSize;
        this.createObjectURL = options.createObjectURL || URL.createObjectURL.bind(URL);
    }

    static defaultFormatFileSize(bytes) {
        const BYTES_PER_MB = 1024 * 1024;
        // Calculate MB and round upward to two decimals.
        const sizeMB = Math.ceil((bytes / BYTES_PER_MB) * 100) / 100;
        return sizeMB.toFixed(2) + ' MB';
    }

    createElement() {
        const item = this.prototypeElement.cloneNode(true);
        item.classList.remove('images-list__item--prototype');

        const nameEl = item.querySelector('.images-list__item-name');
        const sizeEl = item.querySelector('.images-list__item-size');
        const imgEl = item.querySelector('.images-list__item-img');

        if (nameEl) nameEl.textContent = this.file.name;
        if (sizeEl) sizeEl.textContent = this.formatFileSize(this.file.size);
        if (imgEl) imgEl.src = this.createObjectURL(this.file);

        return item;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const fileInput = document.querySelector('input[type="file"]');
    const imagesList = document.querySelector('.images-list');
    const prototypeItem = document.querySelector('.images-list__item--prototype');

    if (!fileInput || !imagesList || !prototypeItem) return;

    fileInput.addEventListener('change', event => {
        const files = event.target.files;
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            if (!file.type.includes('image')) continue;

            const newItem = new ImageListItem(file, prototypeItem).createElement();
            imagesList.appendChild(newItem);
        }
    });
});