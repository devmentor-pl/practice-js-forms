const inputFiles = document.querySelector(`input[type="file"]`);
const imagesList = document.querySelector(".images-list");
const imagesListItemPrototype = document.querySelector(
  ".images-list__item--prototype"
);

inputFiles.addEventListener("change", test);

function test(e) {
  const files = e.target.files;
  for (const file of files) {
    const fileObj = {
      name: file.name,
      type: file.type,
      path: URL.createObjectURL(file),
      size: fileSize(file),
    };
    renderImageListItem(fileObj);
    console.log(fileObj);
  }
  console.log(files);
}

function fileSize(file) {
  const fileSize = file.size;
  const sizeSufix = {
    B: 1,
    KB: 1024,
    MB: 1024 * 1024,
    GB: 1024 * 1024 * 1024,
  };
  let size = "B";

  for (const [key, value] of Object.entries(sizeSufix)) {
    if (fileSize / value > 1) {
      size = key;
    }
  }
  return `${(fileSize / sizeSufix[size]).toFixed(2)} ${size}`;
}

function renderImageListItem(obj) {
  if (obj.type.includes("image")) {
    const htmlItem = imagesListItemPrototype.cloneNode(true);
    htmlItem.classList.remove("images-list__item--prototype");
    htmlItem.querySelector("header").innerText = obj.name;
    htmlItem.querySelector("img").src = obj.path;
    htmlItem.querySelector("footer").innerText = obj.size;
    imagesList.appendChild(htmlItem);
  }
}
