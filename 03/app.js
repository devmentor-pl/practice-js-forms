document.addEventListener("DOMContentLoaded", init);

function init() {
  const inputEl = document.querySelector("input");
  if (inputEl) {
    inputEl.addEventListener("change", changeHandler);
  }
}

function changeHandler(e) {
  const prototypeEl = document.querySelector(".images-list__item--prototype");
  const ulElement = document.querySelector(".images-list");
  const filesList = Array.from(e.target.files);

  filesList.forEach((file) => {
    if (file.type.indexOf("image") >= 0) {
      const liElement = prototypeEl.cloneNode(true);
      const headerElement = liElement.querySelector("header");
      const footerElement = liElement.querySelector("footer");
      const imageElement = liElement.querySelector("img");

      const reader = new FileReader();

      reader.addEventListener("load", (e) => {
        headerElement.innerText = file.name;
        footerElement.innerText = `${(file.size / (1024 * 1024)).toFixed(
          2
        )} MB`;
        liElement.classList.remove("images-list__item--prototype");
        ulElement.appendChild(liElement);

        const image = e.target.result;
        imageElement.src = image;
      });
      reader.readAsDataURL(file);
    } else {
      showAlert(file);
    }
  });
}

function showAlert(file) {
  alert(
    "Załadowany plik o nazwie " + file.name + " nie jest plikiem graficznym!"
  );
}
