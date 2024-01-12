/* const liEl = document.querySelector('.images-list__item--prototype');
const inpFile = document.querySelector('input');
const imgList = document.querySelector('.images-list');

function 
*/
document.addEventListener("DOMContentLoaded", init);

function init() {
  const inputEl = document.querySelector("input");
  if (inputEl) {
    inputEl.addEventListener("change", changeHandler);
  }
}

function changeHandler(e) {
  const protEl = document.querySelector(".images-list__item--prototype");
  const ulEl = document.querySelector(".images-list");
  const filesList = Array.from(e.target.files);

  filesList.forEach((file) => {
    if (file.type.indexOf("image") >= 0) {
      const liEl = protEl.cloneNode(true);
      const headerEl = liEl.querySelector("header");
      const footerEl = liEl.querySelector("footer");
      const imageEl = liEl.querySelector("img");

      const reader = new FileReader();

      reader.addEventListener("load", (e) => {
        headerEl.innerText = file.name;
        footerEl.innerText = `${(file.size / (1024 * 1024)).toFixed(
          2
        )} MB`;
        liEl.classList.remove("images-list__item--prototype");
        ulEl.appendChild(liEl);

        const image = e.target.result;
        imageEl.src = image;
      });
      reader.readAsDataURL(file);
    } else {
      showAlert(file);
    }
  });
}

function showAlert(file) {
  alert(
    "This file " + file.name + " its not a graphic file!"
  );
}