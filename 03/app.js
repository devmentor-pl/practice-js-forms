'use strict';

const fileEl = document.querySelector('input');
const ulList = document.querySelector('.images-list');
const liEl = document.querySelector('.images-list__item');

fileEl.addEventListener('change', showInfoFile);

function showInfoFile(e) {
  const fileList = e.target.files;
  for (const file of fileList) {
    if (file && file.type.includes('image')) {
      const liElClone = prepareItem(file);
      appendContent(liElClone, file);
      ulList.appendChild(liElClone);
    } else {
      alert("Upload only image's files!");
    }
  }
}

// Functions

function prepareItem(file) {
  const liElClone = liEl.cloneNode(true);
  liElClone.classList.remove('images-list__item--prototype');
  const newFileName = liElClone.querySelector('.images-list__item-name');
  newFileName.textContent = file.name;
  const fileSize = liElClone.querySelector('.images-list__item-size');
  fileSize.textContent = `${(file.size / (1024 * 1024)).toFixed(2)} MB`;
  return liElClone;
}

function appendContent(liElClone, file) {
  const reader = new FileReader();
  reader.onload = function (readerEvent) {
    const imgSrc = readerEvent.target.result;
    const image = liElClone.querySelector('.images-list__item-img');
    image.src = imgSrc;
  };
  reader.readAsDataURL(file);
}
