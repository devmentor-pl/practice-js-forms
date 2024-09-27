const fileEl = document.querySelector("input[type=file]");
const ulEl = document.querySelector(".images-list");
const liEl = ulEl.querySelector(".images-list__item");

fileEl.addEventListener("change", readFile);

function readFile(e) {
  const { files } = e.target;

  const isFilesEmpty =
    Object.keys(files).length === 0 && files.constructor === Object;

  if (!isFilesEmpty) {
    for (const imageEl of files) printImage(imageEl);
  }
}

function printImage(imageEl) {
  const isImage = imageEl.type.includes("image");
  if (!isImage) return;

  const reader = new FileReader();
  reader.onload = function (readerEvent) {
    const src = readerEvent.target.result;
    const name = imageEl.name.split(".")[0];
    const size = imageEl.size;

    const newLi = createLiEl(src, name, size);
    ulEl.appendChild(newLi);
  };
  reader.readAsDataURL(imageEl);
}

function createLiEl(src, name, size) {
  const cloneLi = liEl.cloneNode(true);
  if (cloneLi.classList.contains("images-list__item--prototype")) {
    cloneLi.classList.remove("images-list__item--prototype");
  }
  const headerEl = cloneLi.querySelector(".images-list__item-name");
  const imgEl = cloneLi.querySelector(".images-list__item-img");
  const footerEl = cloneLi.querySelector(".images-list__item-size");
  headerEl.innerText = name;
  imgEl.src = src;
  footerEl.innerText = size;

  return cloneLi;
}
