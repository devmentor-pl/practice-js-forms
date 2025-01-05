const fileInputEl = document.querySelector(".files input[type='file']");
const listEl = document.querySelector(".images-list");

if (fileInputEl) {
  fileInputEl.addEventListener("change", handleReadFiles);
}

function handleReadFiles(e) {
  const files = Array.from(e.target.files);

  files.forEach((file) => {
    const { name, size } = file;

    if (file.type.includes("image")) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const itemEl = createImageItem(e.target.result, name, size);
        listEl.appendChild(itemEl);
      };

      reader.readAsDataURL(file);
    }
  });
}

function converToMB(size) {
  return (size / Math.pow(10, 6)).toFixed(2);
}

function createImageItem(src, name, size) {
  const prototypeEl = document.querySelector(".images-list__item--prototype");

  if (prototypeEl) {
    const itemEl = prototypeEl.cloneNode(true);
    itemEl.classList.remove("images-list__item--prototype");

    const headerEl = itemEl.querySelector("header");
    const imageEl = itemEl.querySelector("img");
    const footerEl = itemEl.querySelector("footer");

    if (headerEl) {
      headerEl.textContent = name;
    }

    if (imageEl) {
      imageEl.src = src;
    }

    if (footerEl) {
      footerEl.textContent = converToMB(size) + " MB";
    }

    return itemEl;
  } else {
    throw new Error("Something went wrong!");
  }
}
