const fileEl = document.querySelector('input');
fileEl.addEventListener('change', readFile);

function readFile(e) {
  const files = e.target.files;

  for (let i = 0; i < files.length; i++) {
    const file = e.target.files[i];

    if (file && file.type.includes('image')) {
      //1. get ul
      const ulEl = getUlEl();
      //2. clone li
      const liEl = cloneLiEl();
      //3. remove prototype class
      removePrototypeClass(liEl);
      //4. add more li
      appendLiEl(ulEl, liEl);
      //5. add header
      addHeaderEl(liEl, file);
      //6. add img
      addImgEl(liEl, file);
      //7. add footer
      addFooterEl(liEl, file);
    }
  }
}

function getUlEl() {
  const ulEl = document.querySelector('ul');

  return ulEl;
}

function cloneLiEl() {
  const liEl = document.querySelector('li').cloneNode(true);

  return liEl;
}

function removePrototypeClass(liEl) {
  liEl.classList.remove('images-list__item--prototype');
}

function appendLiEl(ulEl, liEl) {
  ulEl.appendChild(liEl);
}

function addHeaderEl(liEl, file) {
  const headerEl = liEl.querySelector('header');
  headerEl.innerText = `${file.name}`;
}

function addImgEl(liEl, file) {
  const imgEl = liEl.querySelector('img');
  const imageUrl = URL.createObjectURL(file);
  imgEl.setAttribute('src', imageUrl);
}

function addFooterEl(liEl, file) {
  const footerEl = liEl.querySelector('footer');
  const fileSize = file.size / (1024 * 1024);
  footerEl.innerText = `${fileSize.toFixed(2)}MB`;
}
