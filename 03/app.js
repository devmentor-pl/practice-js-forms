const inputFile = document.querySelector('input[type="file"]');
console.log(inputFile);

inputFile.addEventListener("change", (event) => {
    const fileList = event.target.files;
    console.log(fileList);
    for (const file of fileList) {
        if (file.type.includes("image")) {
            displayList(file)
        }
    }
});

function displayList(file) {
    const prototype = document.querySelector(".images-list__item--prototype");
    const item = prototype.cloneNode(true);
    item.classList.remove("images-list__item--prototype");
    item.style.display = "block";
    const image = item.querySelector(".images-list__item-img");
    const fileNameElement = item.querySelector(".images-list__item-name");
    const fileSizeElement = item.querySelector(".images-list__item-size");

    const fileName = file.name;
    const fileSizeMB = (file.size / (1024 * 1024)).toFixed(2);
    fileNameElement.textContent = fileName;
    fileSizeElement.textContent = `${fileSizeMB} MB`;

    const imageUrl = URL.createObjectURL(file);
    image.src = imageUrl;

    const imageList = document.querySelector(".images-list");
    imageList.appendChild(item);

};