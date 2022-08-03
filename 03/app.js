const fileEl = document.querySelector("input");

fileEl.addEventListener("change", handleFile);

function handleFile(e) {
  const addedFiles = [...fileEl.files];

  for (let i = 0; i < addedFiles.length; i++) {
    if (addedFiles[i] && addedFiles[i].type.includes("image")) {
      const reader = new FileReader();
      reader.onload = function (readerEvent) {
        const ulEl = document.querySelector("ul");

        if (ulEl) {
          // const liEL = document.createElement("li");
          // liEL.classList.add("images-list__item");
          // ulEl.appendChild(liEL);
          // const headerEl = document.createElement("header");
          // headerEl.classList.add("images-list__item-name");
          // liEL.appendChild(headerEl);
          // const imgEl = document.createElement("img");
          // imgEl.classList.add("images-list__item-img");
          // imgEl.setAttribute("src", "");
          // imgEl.src = readerEvent.target.result;
          // liEL.appendChild(imgEl);
          // const footerEl = document.createElement("footer");
          // footerEl.classList.add("images-list__item-size");
          const prototype = document.querySelector(
            ".images-list__item--prototype"
          );
          const liEl = prototype.cloneNode(true);
          liEl.classList.remove("images-list__item--prototype");
          const imgEl = liEl.querySelector("img");
          imgEl.src = readerEvent.target.result;
          liEl.querySelector("header").innerHTML = addedFiles[i].name;
          liEl.querySelector("footer").innerHTML =
            (addedFiles[i].size * 0.000000954).toFixed(2) + " " + "MB";
          ulEl.appendChild(liEl);
        }
      };
      reader.readAsDataURL(addedFiles[i]);
    }
  }
}
