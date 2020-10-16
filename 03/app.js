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

const updateListItemElementContent = (
  listItemElem,
  selector,
  content,
  ...args
) => {
  const elem = listItemElem.querySelector(selector);

  if (elem) {
    if (typeof content === "function") {
      content.call(this, ...args, elem);
    } else {
      elem.innerText = content;
    }
  }
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

    updateListItemElementContent(newListLitem, listItemNameSelector, file.name);
    updateListItemElementContent(
      newListLitem,
      listItemSizeSelector,
      convertSizeToMB(file.size)
    );
    updateListItemElementContent(
      newListLitem,
      listItemImageSelector,
      renderFile,
      file
    );

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
