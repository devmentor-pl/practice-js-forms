const fileEl = document.querySelector("input");
fileEl.addEventListener("change", getImages);

function getImages(e) {
  const files = Array.from(e.target.files);

  files.forEach(renderImages);
}

function renderImages(file) {
  const prototype = document.querySelector(".images-list__item--prototype");
  const newListItem = prototype.cloneNode(true);
  newListItem.classList.remove("images-list__item--prototype");
  const name = newListItem.querySelector(".images-list__item-name");
  const img = newListItem.querySelector(".images-list__item-img");
  const size = newListItem.querySelector(".images-list__item-size");
  if (file && file.type.includes("image")) {
    const reader = new FileReader();
    reader.onload = function (readerEvent) {
      img.src = readerEvent.target.result;
      name.textContent = file.name;
      const sizeInMb = (Number(file.size) / (1024 * 1024)).toFixed(2);
      size.textContent = `${sizeInMb}MB`;

      const list = document.querySelector(".images-list");
      list.appendChild(newListItem);
    };
    reader.readAsDataURL(file);
  }
}
