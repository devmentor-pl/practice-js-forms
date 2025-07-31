const fileEl = document.querySelector("input");
const ulEl = document.querySelector(".images-list");
const liEl = document.querySelector(".images-list__item--prototype");

fileEl.addEventListener("change", showImg);

function showImg(e) {
  const imgList = e.target.files;
  const imgArray = Array.from(imgList);

  for (let i = 0; i < imgArray.length; i++) {
    if (imgArray[i].type.includes("image")) {
      const reader = new FileReader();

      reader.onload = function (readerEvent) {
        const newLi = liEl.cloneNode(true);
        newLi.classList.remove("images-list__item--prototype");
        ulEl.appendChild(newLi);
        newLi.children[1].src = readerEvent.target.result;
      };

      reader.readAsDataURL(imgArray[i]);
    }
  }
}
