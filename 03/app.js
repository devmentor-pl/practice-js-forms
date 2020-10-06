const fileElem = document.querySelector("input[type='file']");

const convertSizeToMB = (size) => {
  return `${(size / 1024 / 1024).toFixed(2)} MB`;
};

const renderFile = (file, imgElement) => {
  const reader = new FileReader();

  reader.onload = function (e) {
    imgElement.src = e.target.result;
  };

  reader.readAsDataURL(file);
};

const createListItem = (file) => {
  const imagesListClass = "images-list";
  const listItemClass = `${imagesListClass}__item`;
  const listItemPrototypeClass = `${listItemClass}--prototype`;
  const listItemNameSelector = `.${listItemClass}-name`;
  const listItemImageSelector = `.${listItemClass}-img`;
  const listItemSizeSelector = `.${listItemClass}-size`;

  const listItemPrototype = document.querySelector(
    `.${listItemPrototypeClass}`
  );

  if (listItemPrototype) {
    const newListLitem = listItemPrototype.cloneNode(true);
    newListLitem.classList.remove(listItemPrototypeClass);

    const nameElem = newListLitem.querySelector(listItemNameSelector);

    if (nameElem) {
      nameElem.innerText = file.name;
    }

    const imageElem = newListLitem.querySelector(listItemImageSelector);

    if (imageElem) {
      renderFile(file, imageElem);
    }

    const sizeElem = newListLitem.querySelector(listItemSizeSelector);

    if (sizeElem) {
      sizeElem.innerText = convertSizeToMB(file.size);
    }

    return newListLitem;
  }

  return null;
};

const showFilesInfo = (e) => {
  const files = e.target.files;
  const imagesList = document.querySelector(".images-list");

  if (imagesList) {
    for (let i = 0; i < files.length; i++) {
      const file = files.item(i);

      if (file.type.includes("image")) {
        const listItem = createListItem(file);

        if (listItem) {
          imagesList.appendChild(listItem);
        }
      }
    }
  }
};

if (fileElem) {
  fileElem.addEventListener("change", showFilesInfo);
}
