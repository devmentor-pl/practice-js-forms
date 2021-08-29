const fileEl = document.querySelector("input");
fileEl.addEventListener("change", getImages);

function getImages(e) {
  const files = Array.from(e.target.files);

  files.forEach(renderImages);
}

function renderImages(file) {
  const newListItem = prepareNewListItem();
  const newListItemProperties = prepareProperties(newListItem);

  if (file && file.type.includes("image")) {
    const reader = new FileReader();
    reader.onload = function (readerEvent) {
      newListItemProperties.img.src = readerEvent.target.result;
      newListItemProperties.name.textContent = file.name;
      const sizeInMb = (Number(file.size) / (1024 * 1024)).toFixed(2);
      newListItemProperties.size.textContent = `${sizeInMb}MB`;

      renderNewListItem(newListItem);
    };
    reader.readAsDataURL(file);
  }
}

function renderNewListItem(newListItem) {
  const list = document.querySelector(".images-list");
  list.appendChild(newListItem);
}

function prepareNewListItem() {
  const prototype = document.querySelector(".images-list__item--prototype");
  const newListItem = prototype.cloneNode(true);
  newListItem.classList.remove("images-list__item--prototype");
  return newListItem;
}

function prepareProperties(item) {
  const itemProperties = {};
  itemProperties.name = item.querySelector(".images-list__item-name");
  itemProperties.img = item.querySelector(".images-list__item-img");
  itemProperties.size = item.querySelector(".images-list__item-size");
  return itemProperties;
}
