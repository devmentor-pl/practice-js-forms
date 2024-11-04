document.addEventListener("DOMContentLoaded", init);

function init() {
  const inputElement = document.querySelector("input");
  inputElement.addEventListener("change", handleChange);
}

function handleChange(e) {
  const prototypeElement = document.querySelector(
    ".images-list__item--prototype"
  );

  const ulElement = document.querySelector(".images-list");

  const filesList = Array.from(e.target.files);

  filesList.forEach((item) => {
    const newLiElement = prototypeElement.cloneNode(true);
    const headerElement = newLiElement.querySelector("header");
    const imgElement = newLiElement.querySelector("img");
    const footerElement = newLiElement.querySelector("footer");

    headerElement.innerText = item.name;
    footerElement.innerText = (item.size / (1024 * 1024)).toFixed(2);
    newLiElement.classList.remove("images-list__item--prototype");
    ulElement.appendChild(newLiElement);

    const reader = new FileReader();

    reader.addEventListener("load", function (e) {
      const img = e.target.result;
      imgElement.src = img;
    });

    reader.readAsDataURL(item);
  });
}
